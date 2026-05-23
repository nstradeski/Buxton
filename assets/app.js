// Buxton-area coordinates
const BUXTON = { lat: 53.2591, lon: -1.9111 };

const DAYS = [
  {
    date: '2026-05-27', title: 'Arrival',
    items: ['Travel to Gib Torr Farm', 'Check in at The Barnhouse — 4:00pm', 'Settle in'],
    meals: { breakfast: 'On the road', lunch: 'Service station / pack', dinner: 'The Lazy Trout, Meerbrook' }
  },
  {
    date: '2026-05-28', title: 'The Roaches',
    items: ['Walk The Roaches ridge + Lud\'s Church', 'Tea at The Roaches Tea Rooms'],
    meals: { breakfast: 'Barnhouse', lunch: 'Pack lunch', dinner: 'Cook in' }
  },
  {
    date: '2026-05-29', title: 'Castleton cluster',
    items: [
      'Drive to Mam Nick car park (top of Winnats Pass)',
      'Walk up to Mam Tor (paragliders if warm)',
      'Blue John Cavern, then drive down to Speedwell Cavern (boat)',
      'Castleton village — Peveril Castle + ice cream',
    ],
    meals: { breakfast: 'Barnhouse', lunch: 'Simply Vegan Buxton', dinner: 'Nat\'s Kitchen' }
  },
  {
    date: '2026-05-30', title: 'Big walk',
    items: ['Mam Tor ridge or Kinder Scout'],
    meals: { breakfast: 'Barnhouse', lunch: 'Pack lunch', dinner: 'The Old Hall Hotel' }
  },
  {
    date: '2026-05-31', title: 'Departure',
    items: ['Pack out', 'Quick walk / coffee', 'Travel home'],
    meals: { breakfast: 'Barnhouse', lunch: 'On the road', dinner: '—' }
  },
];

const TODAY_ISO = new Date().toISOString().slice(0, 10);

// --- Days + weather --------------------------------------------------------

function renderDays(weatherByDate = {}) {
  const grid = document.getElementById('days-grid');
  grid.innerHTML = '';
  DAYS.forEach(day => {
    const d = new Date(day.date + 'T00:00:00');
    const dow = d.toLocaleDateString('en-GB', { weekday: 'short' });
    const dom = d.getDate();
    const mon = d.toLocaleDateString('en-GB', { month: 'short' });
    const wx = weatherByDate[day.date];

    const card = document.createElement('div');
    card.className = 'day-card';
    if (day.date === TODAY_ISO) card.dataset.today = 'true';
    card.innerHTML = `
      <div class="day-date">
        <span class="dow">${dow}</span>
        <span class="dom">${dom}</span>
        <span class="mon">${mon}</span>
      </div>
      <div class="day-body">
        <h3>${day.title}</h3>
        <ul>${day.items.map(i => `<li>${i}</li>`).join('')}</ul>
        ${day.meals ? `
          <div class="day-meals">
            <span><b>B</b> ${day.meals.breakfast}</span>
            <span><b>L</b> ${day.meals.lunch}</span>
            <span><b>D</b> ${day.meals.dinner}</span>
          </div>
        ` : ''}
      </div>
      <div class="day-wx ${wx ? '' : 'empty'}">
        ${wx ? `
          <span class="icon">${weatherEmoji(wx.code)}</span>
          <div class="temps">${Math.round(wx.min)}° / ${Math.round(wx.max)}°C</div>
          <div class="meta">💧 ${wx.precip ?? 0}% · 💨 ${Math.round(wx.wind)} km/h</div>
        ` : 'Forecast not yet available'}
      </div>
    `;
    grid.appendChild(card);
  });
}

async function loadWeather() {
  renderDays();
  const start = DAYS[0].date;
  const end = DAYS[DAYS.length - 1].date;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${BUXTON.lat}&longitude=${BUXTON.lon}` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max` +
    `&timezone=Europe/London&start_date=${start}&end_date=${end}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return;
    const data = await res.json();
    const byDate = {};
    data.daily.time.forEach((date, i) => {
      byDate[date] = {
        code: data.daily.weather_code[i],
        min: data.daily.temperature_2m_min[i],
        max: data.daily.temperature_2m_max[i],
        precip: data.daily.precipitation_probability_max[i],
        wind: data.daily.wind_speed_10m_max[i],
      };
    });
    renderDays(byDate);
  } catch (e) {
    // leave the "not available" placeholders in
  }
}

function weatherEmoji(code) {
  if (code === 0) return '☀️';
  if ([1, 2].includes(code)) return '🌤️';
  if (code === 3) return '☁️';
  if ([45, 48].includes(code)) return '🌫️';
  if ([51, 53, 55, 56, 57].includes(code)) return '🌦️';
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return '🌧️';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return '🌨️';
  if ([95, 96, 99].includes(code)) return '⛈️';
  return '🌡️';
}

// --- Places ----------------------------------------------------------------

async function loadPlacesAndMap() {
  const listEl = document.getElementById('places-list');
  try {
    const [placesRes, restaurantsRes, activitiesRes] = await Promise.all([
      fetch('data/places.json'),
      fetch('data/restaurants.json'),
      fetch('data/activities.json'),
    ]);
    const places = await placesRes.json();
    const restaurants = await restaurantsRes.json();
    const activities = await activitiesRes.json();
    renderPlaces(places.filter(p => p.category !== 'accommodation'), listEl);
    renderActivities(activities);

    const restaurantMarkers = restaurants.map(r => ({ ...r, category: 'food' }));
    const activityMarkers = activities.map(a => ({
      name: a.name,
      address: a.description,
      lat: a.lat,
      lon: a.lon,
      category: 'activity',
    }));
    renderMap([...places, ...restaurantMarkers, ...activityMarkers]);
  } catch (err) {
    listEl.innerHTML = `<p class="error">Couldn't load places: ${err.message}</p>`;
  }
}

function renderActivities(activities) {
  const el = document.getElementById('activities-list');
  if (!el) return;
  const grouped = activities.reduce((acc, a) => {
    const g = a.group || 'Other';
    (acc[g] = acc[g] || []).push(a);
    return acc;
  }, {});
  el.innerHTML = '';
  for (const [group, items] of Object.entries(grouped)) {
    const wrap = document.createElement('div');
    wrap.className = 'activity-group';
    wrap.innerHTML = `<h3>${group}</h3><div class="tile-grid"></div>`;
    const grid = wrap.querySelector('.tile-grid');
    items.forEach(a => {
      const tile = document.createElement('a');
      tile.className = 'tile activity';
      tile.href = a.url;
      tile.target = '_blank';
      tile.rel = 'noopener';
      tile.innerHTML = `
        <h4>${a.name}</h4>
        <p class="muted">${a.description}</p>
        <div class="activity-tags">${(a.tags || []).map(t => `<span>${t}</span>`).join('')}</div>
      `;
      grid.appendChild(tile);
    });
    el.appendChild(wrap);
  }
}

function isOpen(hoursStr) {
  if (!hoursStr) return { open: null, label: 'Hours unknown' };
  try {
    const oh = new opening_hours(hoursStr);
    const open = oh.getState();
    const next = oh.getNextChange();
    let label;
    if (open) {
      label = next ? `Open · til ${formatTime(next)}` : 'Open';
    } else {
      label = next ? `Opens ${formatTime(next)}` : 'Closed';
    }
    return { open, label };
  } catch (e) {
    return { open: null, label: 'Hours unparseable' };
  }
}

function formatTime(date) {
  const now = new Date();
  const sameDay = date.toDateString() === now.toDateString();
  const opts = sameDay
    ? { hour: '2-digit', minute: '2-digit' }
    : { weekday: 'short', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleString('en-GB', opts);
}

const CAT_LABELS = {
  supermarket: 'Supermarkets',
  organic: 'Organic & Wholefoods',
  market: 'Markets',
};

function renderPlaces(places, el) {
  const grouped = places.reduce((acc, p) => {
    (acc[p.category] = acc[p.category] || []).push(p);
    return acc;
  }, {});

  el.innerHTML = '';
  for (const [cat, items] of Object.entries(grouped)) {
    const group = document.createElement('div');
    group.className = 'place-group';
    group.innerHTML = `<h3>${CAT_LABELS[cat] || cat}</h3>`;
    items.forEach(p => {
      const status = isOpen(p.opening_hours);
      const pillClass = status.open === true ? 'open' : status.open === false ? 'closed' : 'unknown';
      const dotClass = pillClass;
      const item = document.createElement('div');
      item.className = 'place';
      item.innerHTML = `
        <div>
          <div class="place-name"><span class="dot ${dotClass}"></span>${p.name}</div>
          <div class="place-meta">${p.address}</div>
          <div class="place-hours">${p.opening_hours}</div>
        </div>
        <span class="status-pill ${pillClass}">${status.label}</span>
      `;
      group.appendChild(item);
    });
    el.appendChild(group);
  }
}

// --- Map -------------------------------------------------------------------

function renderMap(places) {
  const map = L.map('map-canvas', { scrollWheelZoom: false });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap · © CARTO'
  }).addTo(map);

  const colors = {
    supermarket: '#4a8a64',
    organic: '#d99350',
    market: '#8b6cc4',
    accommodation: '#d35a6f',
    food: '#3a8fb7',
    activity: '#b58a2f',
  };

  places.forEach(p => {
    const isStay = p.category === 'accommodation';
    const hasHours = !!p.opening_hours;
    const marker = L.circleMarker([p.lat, p.lon], {
      radius: isStay ? 11 : 8,
      fillColor: colors[p.category] || '#555',
      color: '#fff',
      weight: 2,
      fillOpacity: 0.95,
    }).addTo(map);
    const status = hasHours ? isOpen(p.opening_hours) : null;
    const statusLine = (isStay || !hasHours) ? '' : `<br><em>${status.label}</em>`;
    marker.bindPopup(`<strong>${p.name}</strong><br>${p.address}${statusLine}`);
  });

  const bounds = L.latLngBounds(places.map(p => [p.lat, p.lon]));
  map.fitBounds(bounds, { padding: [40, 40] });
}

// --- Init ------------------------------------------------------------------

async function loadRestaurants() {
  const el = document.getElementById('restaurants-list');
  if (!el) return;
  try {
    const res = await fetch('data/restaurants.json');
    const items = await res.json();
    const grouped = items.reduce((acc, p) => {
      (acc[p.type] = acc[p.type] || []).push(p);
      return acc;
    }, {});
    const TYPE_LABELS = { cafe: 'Cafés', restaurant: 'Restaurants', pub: 'Pubs' };
    el.innerHTML = '';
    for (const [type, list] of Object.entries(grouped)) {
      const group = document.createElement('div');
      group.className = 'place-group';
      group.innerHTML = `<h3>${TYPE_LABELS[type] || type}</h3>`;
      list.forEach(p => {
        const status = isOpen(p.opening_hours);
        const pillClass = status.open === true ? 'open' : status.open === false ? 'closed' : 'unknown';
        const veganTag = p.vegan === 'full'
          ? '<span class="vegan-tag full">Fully vegan</span>'
          : '<span class="vegan-tag">Vegan options</span>';
        const item = document.createElement('div');
        item.className = 'place';
        item.innerHTML = `
          <div>
            <div class="place-name">
              <span class="dot ${pillClass}"></span>${p.name} ${veganTag}
            </div>
            <div class="place-meta">${p.address}</div>
            ${p.notes ? `<div class="place-meta">${p.notes}</div>` : ''}
            <div class="place-hours">${p.opening_hours}</div>
          </div>
          <span class="status-pill ${pillClass}">${status.label}</span>
        `;
        group.appendChild(item);
      });
      el.appendChild(group);
    }
  } catch (err) {
    el.innerHTML = `<p class="error">Couldn't load restaurants: ${err.message}</p>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadWeather();
  loadPlacesAndMap();
  loadRestaurants();
});
