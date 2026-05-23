// Buxton-area coordinates
const BUXTON = { lat: 53.2591, lon: -1.9111 };

const DAYS = [
  {
    date: '2026-05-27', title: 'Arrival',
    items: ['Travel to Gib Torr Farm', 'Check in at The Barnhouse — 4:00pm', 'Settle in'],
    meals: { breakfast: 'On the road', lunch: 'Pack', dinner: 'Cook in · Italian 🍝' }
  },
  {
    date: '2026-05-28', title: 'The Roaches',
    items: ['Walk The Roaches ridge + Lud\'s Church', 'Tea at The Roaches Tea Rooms'],
    meals: { breakfast: 'Barnhouse', lunch: 'Pack lunch', dinner: 'Cook in · Mexican 🌮' }
  },
  {
    date: '2026-05-29', title: 'Castleton cluster',
    items: [
      'Drive to Mam Nick car park (top of Winnats Pass)',
      'Walk up to Mam Tor (paragliders if warm)',
      'Blue John Cavern, then drive down to Speedwell Cavern (boat)',
      'Castleton village — Peveril Castle + ice cream',
    ],
    meals: { breakfast: 'Barnhouse', lunch: 'Pack / Castleton café', dinner: 'Nat\'s Kitchen · restaurant night ✨' }
  },
  {
    date: '2026-05-30', title: 'Big walk',
    items: ['Mam Tor ridge or Kinder Scout'],
    meals: { breakfast: 'Barnhouse', lunch: 'Pack lunch', dinner: 'Cook in · Asian 🥢' }
  },
  {
    date: '2026-05-31', title: 'Departure',
    items: ['Pack out', 'Quick walk / coffee', 'Travel home'],
    meals: { breakfast: 'Barnhouse', lunch: 'On the road', dinner: '—' }
  },
];

const RECIPES = [
  {
    night: 'Wed · Italian 🍝',
    title: 'Pasta al Pomodoro + garlic bread',
    serves: '4',
    time: '30 min',
    why: 'Easy arrival-night cook after a long drive. One pan + an oven.',
    ingredients: [
      '400g spaghetti or linguine',
      '2 × 400g tins plum tomatoes',
      '4 cloves garlic, sliced',
      'Big handful fresh basil',
      '4 tbsp olive oil + extra to finish',
      '1 tsp sugar, salt, black pepper',
      '1 sourdough loaf or ciabatta',
      '2 tbsp vegan butter',
      '2 cloves garlic (for bread), parsley',
      'Optional: chilli flakes, vegan parm (Violife)',
    ],
    method: [
      'Heat olive oil in a wide pan, gently fry sliced garlic 1–2 min (don\'t brown).',
      'Add tomatoes, crush with a spoon, add sugar, pinch of salt. Simmer 15–20 min.',
      'Meanwhile mix vegan butter with crushed garlic and parsley. Slice bread, butter, bake 180°C / 10 min.',
      'Cook pasta al dente in well-salted water. Reserve a mug of pasta water.',
      'Toss pasta into the sauce with a splash of pasta water, basil, more oil. Serve with bread.',
    ],
  },
  {
    night: 'Thu · Mexican 🌮',
    title: 'Black bean & sweet potato tacos',
    serves: '4',
    time: '40 min',
    why: 'Post-walk fuel. Bold flavours, mostly cupboard ingredients, lots of toppings.',
    ingredients: [
      '12 small corn or flour tortillas',
      '2 sweet potatoes, diced 1.5cm',
      '2 × 400g tins black beans, drained',
      '1 red onion + 1 lime (quick-pickled)',
      '2 ripe avocados',
      'Bunch coriander',
      '2 tsp ground cumin, 2 tsp smoked paprika, 1 tsp oregano',
      '1–2 tbsp chipotle paste',
      'Jar of salsa / pico',
      'Olive oil, salt, pepper',
      'Optional: vegan sour cream, hot sauce, pickled jalapeños',
    ],
    method: [
      'Toss sweet potato with oil, cumin, paprika, salt. Roast 200°C / 25 min until edges crisp.',
      'Thinly slice red onion, cover with lime juice + pinch salt — leave 15 min to pickle.',
      'Heat black beans with chipotle paste, oregano, splash of water. Mash slightly. 10 min.',
      'Mash avocado with lime, salt → quick guac.',
      'Warm tortillas. Build: beans → sweet potato → guac → pickled onion → salsa → coriander.',
    ],
  },
  {
    night: 'Sat · Asian 🥢',
    title: 'Crispy tofu & broccoli stir-fry with rice noodles',
    serves: '4',
    time: '35 min',
    why: 'Fresh, quick, balances out a big walk day.',
    ingredients: [
      '500g firm tofu, pressed and cubed',
      '3 tbsp cornflour',
      '250g flat rice noodles',
      '1 head broccoli, florets',
      '1 red pepper, sliced',
      '4 spring onions',
      '4 cloves garlic, 30g ginger — minced',
      '5 tbsp soy sauce',
      '2 tbsp rice vinegar (or lime)',
      '2 tbsp maple syrup or brown sugar',
      '1 tbsp sesame oil + neutral oil for frying',
      'Sriracha to taste, sesame seeds',
    ],
    method: [
      'Press tofu 15 min. Cube, toss in cornflour + pinch salt. Pan-fry in oil until golden on all sides. Set aside.',
      'Mix sauce: soy, vinegar, maple, sesame oil, 3 tbsp water, sriracha.',
      'Cook rice noodles per packet, drain, rinse cold.',
      'Stir-fry garlic + ginger 30s, add broccoli + pepper, splash of water, cover 2 min.',
      'Add noodles, tofu, sauce. Toss 1–2 min until glossy. Top with spring onion + sesame.',
    ],
  },
];

const WALKS = [
  {
    name: 'The Roaches',
    distance: '~6 km',
    time: '2–3 hrs',
    difficulty: 'Moderate',
    parking: 'Roach End or Roaches layby (free, fills up)',
    description: 'Gritstone edge right above the accommodation. Wide views over Tittesworth Reservoir to Wales on a clear day. Combine with Lud\'s Church for a longer loop.',
    url: 'https://www.peakdistrict.gov.uk/visiting/places-to-visit/the-roaches',
  },
  {
    name: 'Lud\'s Church',
    distance: '~5 km loop',
    time: '2 hrs',
    difficulty: 'Easy / moderate',
    parking: 'Gradbach NT car park',
    description: 'Deep mossy chasm in the woods — feels prehistoric. Pairs with The Roaches as a half-day loop via Roach End.',
    url: 'https://www.nationaltrust.org.uk/visit/peak-district/back-forest-and-luds-church',
  },
  {
    name: 'Kinder Scout',
    distance: '13–16 km',
    time: '5–6 hrs',
    difficulty: 'Hard',
    parking: 'Edale village (paid)',
    description: 'The big one. Plateau walk up Jacob\'s Ladder, across the moor edge, down Grindsbrook. Bring map + compass — the top is featureless and easy to get lost in mist.',
    url: 'https://www.nationaltrust.org.uk/visit/peak-district/kinder-edale-and-mam-tor/kinder-scout-walk',
  },
  {
    name: 'Chee Dale stepping stones',
    distance: '~7 km out-and-back',
    time: '2–3 hrs',
    difficulty: 'Moderate (river hop)',
    parking: 'Miller\'s Dale station car park',
    description: 'Limestone gorge with stepping stones bolted to the cliff over the River Wye. Don\'t attempt after heavy rain — water rises fast.',
    url: 'https://www.peakdistrict.gov.uk/visiting/things-to-do/walks/chee-dale-walk',
  },
  {
    name: 'Monsal Trail',
    distance: 'Flexible (full route 13 km)',
    time: '2–4 hrs',
    difficulty: 'Easy',
    parking: 'Miller\'s Dale, Bakewell, or Hassop',
    description: 'Old railway converted to a flat traffic-free path with lit tunnels and Headstone Viaduct. Walkable or hire bikes at Hassop / Blackwell Mill.',
    url: 'https://www.peakdistrict.gov.uk/visiting/things-to-do/walks/monsal-trail',
  },
  {
    name: 'Three Shire Heads',
    distance: '~6 km loop',
    time: '2 hrs',
    difficulty: 'Easy / moderate',
    parking: 'Cumberland Brook layby',
    description: 'Packhorse bridges + waterfall where three counties meet. Easy half-day from the accommodation; can swim if hot.',
    url: 'https://www.walkingbritain.co.uk/walks/walk-1186/',
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
      const bookBtn = a.booking_url
        ? `<a class="book-btn" href="${a.booking_url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Book →</a>`
        : '';
      tile.innerHTML = `
        <h4>${a.name}</h4>
        <p class="muted">${a.description}</p>
        ${a.hours ? `<div class="activity-hours">🕐 ${a.hours}</div>` : ''}
        <div class="activity-foot">
          <div class="activity-tags">${(a.tags || []).map(t => `<span>${t}</span>`).join('')}</div>
          ${bookBtn}
        </div>
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

function renderWalks() {
  const el = document.getElementById('walks-list');
  if (!el) return;
  el.innerHTML = '';
  WALKS.forEach(w => {
    const card = document.createElement('a');
    card.className = 'walk-card';
    card.href = w.url;
    card.target = '_blank';
    card.rel = 'noopener';
    card.innerHTML = `
      <div class="walk-head">
        <h4>${w.name}</h4>
        <span class="walk-diff diff-${w.difficulty.split(' ')[0].toLowerCase()}">${w.difficulty}</span>
      </div>
      <div class="walk-stats">
        <span>📏 ${w.distance}</span>
        <span>⏱ ${w.time}</span>
      </div>
      <p class="muted">${w.description}</p>
      <div class="walk-foot">🚗 ${w.parking}</div>
    `;
    el.appendChild(card);
  });
}

function renderRecipes() {
  const el = document.getElementById('recipes-list');
  if (!el) return;
  el.innerHTML = '';
  RECIPES.forEach(r => {
    const details = document.createElement('details');
    details.className = 'recipe';
    details.innerHTML = `
      <summary>
        <div class="recipe-summary">
          <div>
            <div class="recipe-night">${r.night}</div>
            <h4>${r.title}</h4>
            <div class="recipe-meta">Serves ${r.serves} · ${r.time}</div>
          </div>
          <span class="recipe-chevron">▾</span>
        </div>
      </summary>
      <div class="recipe-body">
        <p class="muted">${r.why}</p>
        <div class="recipe-cols">
          <div>
            <h5>Ingredients</h5>
            <ul>${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
          <div>
            <h5>Method</h5>
            <ol>${r.method.map(m => `<li>${m}</li>`).join('')}</ol>
          </div>
        </div>
      </div>
    `;
    el.appendChild(details);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadWeather();
  loadPlacesAndMap();
  loadRestaurants();
  renderWalks();
  renderRecipes();
});
