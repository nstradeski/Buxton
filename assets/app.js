// Buxton-area coordinates
const BUXTON = { lat: 53.2591, lon: -1.9111 };

const DAYS = [
  { date: '2026-05-27', title: 'Arrival', items: ['Travel to Gib Torr Farm', 'Check in at The Barnhouse — 4:00pm', 'Settle in / dinner'] },
  { date: '2026-05-28', title: 'Day 1', items: ['TBD — local walk (The Roaches?)'] },
  { date: '2026-05-29', title: 'Day 2', items: ['TBD'] },
  { date: '2026-05-30', title: 'Day 3', items: ['TBD'] },
  { date: '2026-05-31', title: 'Departure', items: ['Pack out', 'Travel home'] },
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

async function loadPlaces() {
  const listEl = document.getElementById('places-list');
  try {
    const res = await fetch('data/places.json');
    const places = await res.json();
    renderPlaces(places.filter(p => p.category !== 'accommodation'), listEl);
    renderMap(places);
  } catch (err) {
    listEl.innerHTML = `<p class="error">Couldn't load places: ${err.message}</p>`;
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
  };

  places.forEach(p => {
    const isStay = p.category === 'accommodation';
    const marker = L.circleMarker([p.lat, p.lon], {
      radius: isStay ? 11 : 8,
      fillColor: colors[p.category] || '#555',
      color: '#fff',
      weight: 2,
      fillOpacity: 0.95,
    }).addTo(map);
    const status = isOpen(p.opening_hours);
    const statusLine = isStay ? '' : `<br><em>${status.label}</em>`;
    marker.bindPopup(`<strong>${p.name}</strong><br>${p.address}${statusLine}`);
  });

  const bounds = L.latLngBounds(places.map(p => [p.lat, p.lon]));
  map.fitBounds(bounds, { padding: [40, 40] });
}

// --- Init ------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  loadWeather();
  loadPlaces();
});
