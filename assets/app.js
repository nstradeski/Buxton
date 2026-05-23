// Buxton-area coordinates
const BUXTON = { lat: 53.2591, lon: -1.9111 };

const DAYS = [
  {
    date: '2026-05-27', title: 'Arrival',
    schedule: [
      { time: '~14:00', text: 'Travel to Gib Torr Farm', ref: 'stay' },
      { time: '16:00', text: 'Check in at The Barnhouse', ref: 'stay' },
      { time: '17:00', text: 'Unpack, short stretch in the garden / nap for the little one' },
      { time: '19:00', text: 'Cook Italian dinner', ref: 'recipe-italian' },
    ],
    meals: { breakfast: 'On the road', lunch: 'Pack', dinner: 'Cook in · Italian 🍝' }
  },
  {
    date: '2026-05-28', title: 'Three Shire Heads',
    schedule: [
      { time: '08:30', text: 'Breakfast at the Barnhouse' },
      { time: '10:30', text: 'Drive to Cumberland Brook layby (15 min)' },
      { time: '11:00', text: 'Walk to Three Shire Heads — easy, buggy-tricky but doable', ref: 'walk-three-shire-heads' },
      { time: '13:00', text: 'Picnic by the waterfall (paddling if hot)' },
      { time: '15:00', text: 'Back to barnhouse, downtime / nap' },
      { time: '18:30', text: 'Cook Mexican dinner', ref: 'recipe-mexican' },
    ],
    meals: { breakfast: 'Barnhouse', lunch: 'Pack lunch', dinner: 'Cook in · Mexican 🌮' }
  },
  {
    date: '2026-05-29', title: 'Castleton day',
    schedule: [
      { time: '08:30', text: 'Breakfast' },
      { time: '10:00', text: 'Drive to Mam Nick car park (~40 min)' },
      { time: '10:45', text: 'Easy walk up to Mam Tor — paragliders if warm', ref: 'activity-mam-tor' },
      { time: '12:30', text: 'Lunch in Castleton + ice cream', ref: 'activity-castleton-village' },
      { time: '14:00', text: 'Speedwell Cavern (boat trip) — book ahead', ref: 'activity-speedwell-cavern' },
      { time: '15:30', text: 'Peveril Castle for the bigger kids', ref: 'activity-peveril-castle' },
      { time: '18:30', text: 'Dinner at Nat\'s Kitchen — early sitting' },
    ],
    meals: { breakfast: 'Barnhouse', lunch: 'Pack / Castleton café', dinner: 'Nat\'s Kitchen · restaurant night ✨' }
  },
  {
    date: '2026-05-30', title: 'Monsal & Poole\'s',
    schedule: [
      { time: '09:00', text: 'Breakfast' },
      { time: '10:30', text: 'Drive to Hassop Station (~30 min)' },
      { time: '11:00', text: 'Monsal Trail — flat & buggy-friendly, hire bikes for the 5-year-olds', ref: 'walk-monsal-trail' },
      { time: '13:30', text: 'Picnic lunch at Headstone Viaduct' },
      { time: '15:00', text: 'Poole\'s Cavern + Go Ape Junior (5yo only) in Buxton', ref: 'activity-go-ape-buxton' },
      { time: '18:30', text: 'Cook Asian dinner', ref: 'recipe-asian' },
    ],
    meals: { breakfast: 'Barnhouse', lunch: 'Pack lunch', dinner: 'Cook in · Asian 🥢' }
  },
  {
    date: '2026-05-31', title: 'Departure',
    schedule: [
      { time: '08:30', text: 'Breakfast & pack up' },
      { time: '10:00', text: 'Short walk on The Roaches if dry', ref: 'walk-the-roaches' },
      { time: '11:00', text: 'Check out, travel home' },
    ],
    meals: { breakfast: 'Barnhouse', lunch: 'On the road', dinner: '—' }
  },
];

const RECIPES = [
  {
    cuisine: 'Italian',
    emoji: '🍝',
    day: 'Wed',
    accent: '#b03a3a',
    night: 'Wed · Italian 🍝',
    title: 'Pasta al Pomodoro + garlic bread',
    serves: '5 adults + 3 kids',
    time: '35 min',
    why: 'Easy arrival-night cook after a long drive. One big pan + an oven.',
    ingredients: [
      '800g spaghetti or linguine',
      '4 × 400g tins plum tomatoes',
      '8 cloves garlic, sliced',
      'Big handful fresh basil',
      '6 tbsp olive oil + extra to finish',
      '1 tsp sugar, salt, black pepper',
      '2 sourdough loaves or ciabattas',
      '4 tbsp vegan butter',
      '4 cloves garlic (for bread), parsley',
      'Optional: chilli flakes (adults), vegan parm (Violife)',
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
    cuisine: 'Mexican',
    emoji: '🌮',
    day: 'Thu',
    accent: '#c2693f',
    night: 'Thu · Mexican 🌮',
    title: 'Black bean & sweet potato tacos',
    serves: '5 adults + 3 kids',
    time: '45 min',
    why: 'Post-walk fuel. Bold flavours, mostly cupboard ingredients, lots of toppings. Build-your-own works well for the kids.',
    ingredients: [
      '24 small corn or flour tortillas',
      '4 sweet potatoes, diced 1.5cm',
      '3 × 400g tins black beans, drained',
      '2 red onions + 2 limes (quick-pickled)',
      '3 ripe avocados',
      '2 bunches coriander',
      '3 tsp ground cumin, 3 tsp smoked paprika, 2 tsp oregano',
      '1–2 tbsp chipotle paste (keep separate for kids)',
      '2 jars salsa / pico (one mild)',
      'Olive oil, salt, pepper',
      'Optional: vegan sour cream, hot sauce, pickled jalapeños (adults)',
      'For kids: grated cheese-style (Violife), plain beans, cucumber sticks',
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
    cuisine: 'Asian',
    emoji: '🥢',
    day: 'Sat',
    accent: '#2f7a6f',
    night: 'Sat · Asian 🥢',
    title: 'Crispy tofu & broccoli stir-fry with rice noodles',
    serves: '5 adults + 3 kids',
    time: '40 min',
    why: 'Fresh, quick, balances out a big walk day. Sauce on the side for the kids who don\'t want it spicy.',
    ingredients: [
      '900g firm tofu, pressed and cubed',
      '5 tbsp cornflour',
      '500g flat rice noodles',
      '2 heads broccoli, florets',
      '2 red peppers, sliced',
      '6 spring onions',
      '6 cloves garlic, 50g ginger — minced',
      '8 tbsp soy sauce',
      '3 tbsp rice vinegar (or lime)',
      '3 tbsp maple syrup or brown sugar',
      '2 tbsp sesame oil + neutral oil for frying',
      'Sriracha (adults only, on the side), sesame seeds',
      'For kids: portion their tofu + noodles + plain broccoli aside before adding sauce',
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
    emoji: '🪨',
    distance: '~6 km',
    time: '2–3 hrs',
    difficulty: 'Moderate',
    parking: 'Roach End or Roaches layby (free, fills up)',
    description: 'Gritstone edge right above the accommodation. Wide views over Tittesworth Reservoir to Wales on a clear day. Combine with Lud\'s Church for a longer loop.',
    url: 'https://www.peakdistrict.gov.uk/visiting/places-to-visit/the-roaches',
  },
  {
    name: 'Lud\'s Church',
    emoji: '🌿',
    distance: '~5 km loop',
    time: '2 hrs',
    difficulty: 'Easy',
    parking: 'Gradbach NT car park',
    description: 'Deep mossy chasm in the woods — feels prehistoric. Pairs with The Roaches as a half-day loop via Roach End.',
    url: 'https://www.nationaltrust.org.uk/visit/peak-district/back-forest-and-luds-church',
  },
  {
    name: 'Kinder Scout',
    emoji: '⛰️',
    distance: '13–16 km',
    time: '5–6 hrs',
    difficulty: 'Hard',
    parking: 'Edale village (paid)',
    description: 'The big one. Plateau walk up Jacob\'s Ladder, across the moor edge, down Grindsbrook. Bring map + compass — the top is featureless and easy to get lost in mist.',
    url: 'https://www.nationaltrust.org.uk/visit/peak-district/kinder-edale-and-mam-tor/kinder-scout-walk',
  },
  {
    name: 'Chee Dale stepping stones',
    emoji: '💧',
    distance: '~7 km out-and-back',
    time: '2–3 hrs',
    difficulty: 'Moderate',
    parking: 'Miller\'s Dale station car park',
    description: 'Limestone gorge with stepping stones bolted to the cliff over the River Wye. Don\'t attempt after heavy rain — water rises fast.',
    url: 'https://www.peakdistrict.gov.uk/visiting/things-to-do/walks/chee-dale-walk',
  },
  {
    name: 'Monsal Trail',
    emoji: '🚲',
    distance: 'Flexible · up to 13 km',
    time: '2–4 hrs',
    difficulty: 'Easy',
    parking: 'Miller\'s Dale, Bakewell, or Hassop',
    description: 'Old railway converted to a flat traffic-free path with lit tunnels and Headstone Viaduct. Walkable or hire bikes at Hassop / Blackwell Mill.',
    url: 'https://www.peakdistrict.gov.uk/visiting/things-to-do/walks/monsal-trail',
  },
  {
    name: 'Three Shire Heads',
    emoji: '🌊',
    distance: '~6 km loop',
    time: '2 hrs',
    difficulty: 'Easy',
    parking: 'Cumberland Brook layby',
    description: 'Packhorse bridges + waterfall where three counties meet. Easy half-day from the accommodation; can swim if hot.',
    url: 'https://www.walkingbritain.co.uk/walks/walk-1186/',
  },
];

const DIFF_ACCENT = {
  Easy: '#3b8a52',
  Moderate: '#c2693f',
  Hard: '#a83a2f',
};

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
    const scheduleHtml = day.schedule.map(s => {
      const body = s.ref
        ? `<a class="schedule-link" href="#${s.ref}" data-ref="${s.ref}">${s.text}</a>`
        : s.text;
      return `<li><span class="schedule-time">${s.time}</span><span class="schedule-text">${body}</span></li>`;
    }).join('');
    card.innerHTML = `
      <div class="day-date">
        <span class="dow">${dow}</span>
        <span class="dom">${dom}</span>
        <span class="mon">${mon}</span>
      </div>
      <div class="day-body">
        <h3>${day.title}</h3>
        <ul class="day-schedule">${scheduleHtml}</ul>
        ${day.meals ? `
          <div class="day-meals">
            <span><b>B</b> ${day.meals.breakfast}</span>
            <span><b>L</b> ${day.meals.lunch}</span>
            <span><b>D</b> ${linkifyDinner(day.meals.dinner)}</span>
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

function linkifyDinner(text) {
  const match = RECIPES.find(r => text.toLowerCase().includes(r.cuisine.toLowerCase()));
  if (!match) return text;
  return `<a class="meal-link" href="#recipe-${match.cuisine.toLowerCase()}" data-recipe="${match.cuisine.toLowerCase()}">${text}</a>`;
}

document.addEventListener('click', e => {
  const mealLink = e.target.closest('.meal-link');
  if (mealLink) {
    const target = document.getElementById(`recipe-${mealLink.dataset.recipe}`);
    if (target) target.open = true;
    return;
  }
  const schedLink = e.target.closest('.schedule-link');
  if (schedLink) {
    const target = document.getElementById(schedLink.dataset.ref);
    if (target && target.tagName === 'DETAILS') target.open = true;
  }
});

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
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
      fetch('data/places.json?t=' + Date.now()),
      fetch('data/restaurants.json?t=' + Date.now()),
      fetch('data/activities.json?t=' + Date.now()),
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
      tile.id = `activity-${slug(a.name)}`;
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
    const res = await fetch('data/restaurants.json?t=' + Date.now());
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
    const accent = DIFF_ACCENT[w.difficulty] || '#888';
    const card = document.createElement('a');
    card.className = 'walk-card';
    card.id = `walk-${slug(w.name)}`;
    card.style.setProperty('--walk-accent', accent);
    card.href = w.url;
    card.target = '_blank';
    card.rel = 'noopener';
    card.innerHTML = `
      <div class="walk-top">
        <div class="walk-emoji">${w.emoji}</div>
        <div class="walk-title">
          <h4>${w.name}</h4>
          <span class="walk-diff">${w.difficulty}</span>
        </div>
      </div>
      <div class="walk-stats">
        <div><span>📏</span><strong>${w.distance}</strong></div>
        <div><span>⏱</span><strong>${w.time}</strong></div>
      </div>
      <p class="walk-desc">${w.description}</p>
      <div class="walk-foot"><span>🚗</span> ${w.parking}</div>
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
    details.id = `recipe-${r.cuisine.toLowerCase()}`;
    details.style.setProperty('--recipe-accent', r.accent);
    details.innerHTML = `
      <summary>
        <div class="recipe-emoji">${r.emoji}</div>
        <div class="recipe-summary-text">
          <div class="recipe-cuisine">${r.day} · ${r.cuisine}</div>
          <h4>${r.title}</h4>
          <div class="recipe-meta">
            <span>👥 Serves ${r.serves}</span>
            <span>⏱ ${r.time}</span>
          </div>
        </div>
        <span class="recipe-chevron" aria-hidden="true">＋</span>
      </summary>
      <div class="recipe-body">
        <p class="recipe-why">${r.why}</p>
        <div class="recipe-cols">
          <div class="recipe-col">
            <h5>Ingredients</h5>
            <ul class="ingredients">${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
          <div class="recipe-col">
            <h5>Method</h5>
            <ol class="method">${r.method.map(m => `<li><span>${m}</span></li>`).join('')}</ol>
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
