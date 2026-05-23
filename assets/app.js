// Buxton coordinates
const BUXTON = { lat: 53.2591, lon: -1.9111 };
const TRIP_DATES = ['2026-05-27', '2026-05-28', '2026-05-29', '2026-05-30', '2026-05-31'];

// --- Weather ---------------------------------------------------------------

async function loadWeather() {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${BUXTON.lat}&longitude=${BUXTON.lon}` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max` +
    `&timezone=Europe/London&start_date=${TRIP_DATES[0]}&end_date=${TRIP_DATES[TRIP_DATES.length - 1]}`;

  const container = document.getElementById('weather-grid');
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    container.innerHTML = '';
    data.daily.time.forEach((date, i) => {
      const card = document.createElement('div');
      card.className = 'weather-card';
      const d = new Date(date);
      const dayName = d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
      card.innerHTML = `
        <h4>${dayName}</h4>
        <div class="wx-icon">${weatherEmoji(data.daily.weather_code[i])}</div>
        <div class="wx-temp">${Math.round(data.daily.temperature_2m_min[i])}° / ${Math.round(data.daily.temperature_2m_max[i])}°C</div>
        <div class="wx-meta">💧 ${data.daily.precipitation_probability_max[i] ?? 0}% · 💨 ${Math.round(data.daily.wind_speed_10m_max[i])} km/h</div>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = `<p class="error">Weather unavailable: ${err.message}. Forecast becomes available ~7 days ahead.</p>`;
  }
}

function weatherEmoji(code) {
  // WMO weather codes
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

// --- Places + opening hours -----------------------------------------------

async function loadPlaces() {
  const listEl = document.getElementById('places-list');
  try {
    const res = await fetch('data/places.json');
    const places = await res.json();

    renderPlaces(places, listEl);
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
      label = next ? `Open · closes ${formatTime(next)}` : 'Open';
    } else {
      label = next ? `Closed · opens ${formatTime(next)}` : 'Closed';
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

function renderPlaces(places, el) {
  const grouped = places.reduce((acc, p) => {
    (acc[p.category] = acc[p.category] || []).push(p);
    return acc;
  }, {});

  el.innerHTML = '';
  for (const [cat, items] of Object.entries(grouped)) {
    const group = document.createElement('div');
    group.className = 'place-group';
    group.innerHTML = `<h3>${cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>`;
    items.forEach(p => {
      const status = isOpen(p.opening_hours);
      const dot = status.open === true ? 'open' : status.open === false ? 'closed' : 'unknown';
      const item = document.createElement('div');
      item.className = 'place';
      item.innerHTML = `
        <div class="place-head">
          <span class="dot ${dot}"></span>
          <strong>${p.name}</strong>
          <span class="status">${status.label}</span>
        </div>
        <div class="place-meta">${p.address}</div>
        <div class="place-hours">${p.opening_hours}</div>
      `;
      group.appendChild(item);
    });
    el.appendChild(group);
  }
}

// --- Map -------------------------------------------------------------------

function renderMap(places) {
  const map = L.map('map');
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  const colors = {
    supermarket: '#3b6b4a',
    organic: '#c97b3a',
    market: '#7a4ec9',
    accommodation: '#c93a6b'
  };

  places.forEach(p => {
    const marker = L.circleMarker([p.lat, p.lon], {
      radius: 9,
      fillColor: colors[p.category] || '#555',
      color: '#fff',
      weight: 2,
      fillOpacity: 0.9
    }).addTo(map);
    const status = isOpen(p.opening_hours);
    marker.bindPopup(`<strong>${p.name}</strong><br>${p.address}<br><em>${status.label}</em>`);
  });

  const bounds = L.latLngBounds(places.map(p => [p.lat, p.lon]));
  map.fitBounds(bounds, { padding: [30, 30] });
}

// --- Init ------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  loadWeather();
  loadPlaces();
});
