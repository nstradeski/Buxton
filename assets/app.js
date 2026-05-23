// Buxton-area coordinates
const BUXTON = { lat: 53.2591, lon: -1.9111 };

const DAYS = [
  {
    date: '2026-05-27', title: 'Arrival',
    schedule: [
      { time: '09:00', text: 'Lewes party leaves (long drive — plan breaks)', ref: 'travel' },
      { time: '11:00', text: 'Newcastle party leaves', ref: 'travel' },
      { time: '14:00', text: 'Huddersfield party leaves', ref: 'travel' },
      { time: '14:30', text: 'Lewes party stops at Leek for fresh shop', ref: 'arrival-meal' },
      { time: '16:00', text: 'Check in at The Barnhouse', ref: 'stay' },
      { time: '17:00', text: 'Unpack, short stretch in the garden, kids decompress' },
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
    date: '2026-05-30', title: 'Home day at the barnhouse',
    schedule: [
      { time: 'All day', text: 'Slow morning — kids decompress, dogs run around the farm' },
      { time: '10:30', text: 'Garden play / drawing / barnhouse games' },
      { time: '12:30', text: 'Long lazy lunch (build-your-own wraps)' },
      { time: '14:00', text: 'Optional short stroll on The Roaches lower tier', ref: 'walk-the-roaches' },
      { time: '15:30', text: 'Tea & cake at Roaches Tea Rooms (2 mi up the road)' },
      { time: '17:00', text: 'Quiet time — bath, books, naps' },
      { time: '18:30', text: 'Cook Asian dinner together', ref: 'recipe-asian' },
    ],
    meals: { breakfast: 'Barnhouse', lunch: 'Cook in · wraps / leftovers', dinner: 'Cook in · Asian 🥢' }
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
    name: 'Pavilion Gardens, Buxton',
    emoji: '🦆',
    distance: '~1 km wander',
    time: '1–2 hrs',
    difficulty: 'Easy',
    min_age: 'all',
    from_base: '10 mi · ~25 min drive',
    dog_friendly: 'yes — on lead in formal gardens',
    parking: 'Bridge St / Burlington Rd pay & display',
    description: 'Victorian gardens with a lake, playground, mini railway, cafés. Pure toddler win on a rainy half-day.',
    url: 'https://paviliongardens.co.uk/',
    lat: 53.2604, lon: -1.9168,
  },
  {
    name: 'Tittesworth Reservoir',
    emoji: '🦢',
    distance: '~1.5 km or full 8 km',
    time: '45 min – 2 hrs',
    difficulty: 'Easy',
    min_age: 'all',
    from_base: '5 mi · ~12 min drive',
    dog_friendly: 'yes — popular dog walk',
    parking: 'Tittesworth Water visitor centre (paid)',
    description: 'Reservoir with a flat surfaced trail, café, big playground and bird hides. Stroller- and chihuahua-friendly.',
    url: 'https://www.severntrent.com/visit-us/our-attractions/tittesworth-water/',
    lat: 53.1380, lon: -2.0079,
  },
  {
    name: 'Monsal Trail',
    emoji: '🚲',
    distance: 'Flexible · up to 13 km',
    time: '2–4 hrs',
    difficulty: 'Easy',
    min_age: 'all',
    from_base: '16 mi · ~35 min drive',
    dog_friendly: 'yes — flat & well-suited to all three dogs',
    parking: 'Miller\'s Dale, Bakewell, or Hassop',
    description: 'Old railway converted to a flat traffic-free path with lit tunnels and Headstone Viaduct. Walkable or hire bikes at Hassop / Blackwell Mill.',
    url: 'https://www.peakdistrict.gov.uk/visiting/things-to-do/walks/monsal-trail',
    lat: 53.2351, lon: -1.7242,
  },
  {
    name: 'Three Shire Heads (short)',
    emoji: '🌊',
    distance: '~2 km out-and-back',
    time: '1 hr',
    difficulty: 'Easy',
    min_age: 'all',
    from_base: '6 mi · ~15 min drive',
    dog_friendly: 'yes — paddling spot',
    parking: 'Cumberland Brook layby',
    description: 'Shortened version: just down to the packhorse bridges & waterfall, then back. Big-kid paddling, toddlers in carriers for the rocky bits.',
    url: 'https://www.walkingbritain.co.uk/walks/walk-1186/',
    lat: 53.1880, lon: -1.9710,
  },
  {
    name: 'Dovedale stepping stones',
    emoji: '🪜',
    distance: '~2 km out-and-back',
    time: '1 hr',
    difficulty: 'Easy',
    min_age: '3+',
    from_base: '12 mi · ~30 min drive',
    dog_friendly: 'yes — on lead at stones',
    parking: 'Dovedale NT car park (paid, busy)',
    description: 'Classic family stroll along the river to the famous stepping stones. Mostly flat path; 3yo can do hand-held.',
    url: 'https://www.nationaltrust.org.uk/visit/peak-district/dovedale',
    lat: 53.0588, lon: -1.7825,
  },
  {
    name: 'Padley Gorge',
    emoji: '🌲',
    distance: '~3 km loop',
    time: '1.5 hrs',
    difficulty: 'Easy',
    min_age: '3+',
    from_base: '22 mi · ~45 min drive',
    dog_friendly: 'yes — woodland & stream',
    parking: 'Grindleford Station',
    description: 'Magical oak woodland with mossy boulders and a babbling brook. Plenty of stopping points for tired toddlers.',
    url: 'https://www.peakdistrict.gov.uk/visiting/places-to-visit/longshaw-burbage-and-the-eastern-moors/padley-gorge',
    lat: 53.3060, lon: -1.6371,
  },
  {
    name: 'Lud\'s Church',
    emoji: '🌿',
    distance: '~5 km loop',
    time: '2 hrs',
    difficulty: 'Easy',
    min_age: '5+',
    from_base: '4 mi · ~10 min drive',
    dog_friendly: 'yes — on lead in woodland',
    parking: 'Gradbach NT car park',
    description: 'Deep mossy chasm in the woods — feels prehistoric. Pairs with The Roaches as a half-day loop via Roach End. Some scrambling at the chasm.',
    url: 'https://www.nationaltrust.org.uk/visit/peak-district/back-forest-and-luds-church',
    lat: 53.1840, lon: -1.9990,
  },
  {
    name: 'The Roaches',
    emoji: '🪨',
    distance: '~6 km',
    time: '2–3 hrs',
    difficulty: 'Moderate',
    min_age: '5+',
    from_base: '1 mi · ~5 min',
    dog_friendly: 'yes — on lead (sheep)',
    parking: 'Roach End or Roaches layby (free, fills up)',
    description: 'Gritstone edge right above the accommodation. Wide views over Tittesworth Reservoir to Wales on a clear day. The Lower Tier alone works as a shorter walk with the 5yos.',
    url: 'https://www.peakdistrict.gov.uk/visiting/places-to-visit/the-roaches',
    lat: 53.1602, lon: -1.9970,
  },
  {
    name: 'Chee Dale stepping stones',
    emoji: '💧',
    distance: '~7 km out-and-back',
    time: '2–3 hrs',
    difficulty: 'Moderate',
    min_age: '8+',
    from_base: '14 mi · ~30 min drive',
    dog_friendly: 'yes — tricky stepping stones with small dogs',
    parking: 'Miller\'s Dale station car park',
    description: 'Limestone gorge with stepping stones bolted to the cliff over the River Wye. Bolts can be wet/slippery — not for toddlers or small dogs without help.',
    url: 'https://www.peakdistrict.gov.uk/visiting/things-to-do/walks/chee-dale-walk',
    lat: 53.2562, lon: -1.7847,
  },
  {
    name: 'Kinder Scout',
    emoji: '⛰️',
    distance: '13–16 km',
    time: '5–6 hrs',
    difficulty: 'Hard',
    min_age: 'adults',
    from_base: '18 mi · ~40 min drive',
    dog_friendly: 'yes — strict on lead (ground-nesting birds & sheep)',
    parking: 'Edale village (paid)',
    description: 'The big one. Plateau walk up Jacob\'s Ladder, across the moor edge, down Grindsbrook. Bring map + compass — the top is featureless and easy to get lost in mist.',
    url: 'https://www.nationaltrust.org.uk/visit/peak-district/kinder-edale-and-mam-tor/kinder-scout-walk',
    lat: 53.3866, lon: -1.8716,
  },
];

const AGE_LABELS = {
  all: 'All ages (buggy ok)',
  '3+': 'Kids 3+',
  '5+': 'Kids 5+',
  '8+': 'Older kids',
  adults: 'Adults only',
};

const AGE_FILTERS = [
  { key: 'all-walks', label: 'All walks' },
  { key: 'all', label: 'All ages (buggy)' },
  { key: '3+', label: '3-year-old friendly' },
  { key: '5+', label: '5+ friendly' },
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

const BASE_COORDS = '53.1547,-1.9667';

function mapLinks(lat, lon, fromBase = false) {
  if (lat == null || lon == null) return '';
  const dest = `${lat},${lon}`;
  const google = fromBase
    ? `https://www.google.com/maps/dir/?api=1&origin=${BASE_COORDS}&destination=${dest}&travelmode=driving`
    : `https://www.google.com/maps/search/?api=1&query=${dest}`;
  const waze = `https://waze.com/ul?ll=${dest}&navigate=yes`;
  return `
    <div class="map-links">
      <a href="${google}" target="_blank" rel="noopener" onclick="event.stopPropagation()">📍 Maps</a>
      <a href="${waze}" target="_blank" rel="noopener" onclick="event.stopPropagation()">🚗 Waze</a>
    </div>
  `;
}

function dogFriendlyPill(text) {
  const t = (text || '').toLowerCase();
  let cls = 'dog-unknown';
  if (t.startsWith('yes') || t.includes('cable cars')) cls = 'dog-yes';
  else if (t.startsWith('no') || t.includes('assistance dogs only')) cls = 'dog-no';
  else if (t.includes('outside') || t.includes('park yes')) cls = 'dog-partial';
  return `<span class="dog-pill ${cls}">${text}</span>`;
}

function distanceKey(s) {
  if (!s) return Number.POSITIVE_INFINITY;
  if (/base/i.test(s)) return 0;
  const m = s.match(/(\d+(?:\.\d+)?)/);
  return m ? parseFloat(m[1]) : Number.POSITIVE_INFINITY;
}

function byDistance(a, b) {
  return distanceKey(a.from_base) - distanceKey(b.from_base);
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
  activities = [...activities].sort(byDistance);
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
      const dogPill = a.dog_friendly ? dogFriendlyPill(a.dog_friendly) : '';
      tile.innerHTML = `
        <h4>${a.name}</h4>
        <p class="muted">${a.description}</p>
        <div class="activity-meta">
          ${a.from_base ? `<div>🚗 ${a.from_base}</div>` : ''}
          ${a.hours ? `<div>🕐 ${a.hours}</div>` : ''}
          ${a.price ? `<div>💷 ${a.price}</div>` : ''}
          ${dogPill ? `<div>🐕 ${dogPill}</div>` : ''}
        </div>
        ${mapLinks(a.lat, a.lon, true)}
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
  places = [...places].sort(byDistance);
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
          ${p.from_base ? `<div class="place-meta">🚗 ${p.from_base} from the barnhouse</div>` : ''}
          <div class="place-hours">${p.opening_hours}</div>
          ${mapLinks(p.lat, p.lon, true)}
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
    const items = (await res.json()).sort(byDistance);
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
        const pubTypeTag = p.pub_type
          ? `<span class="pub-type-tag">${p.pub_type}${p.pint_price ? ` · 🍺 ${p.pint_price}` : ''}</span>`
          : '';
        const item = document.createElement('div');
        item.className = 'place';
        const highlightsHtml = (p.menu_highlights || []).length
          ? `<div class="menu-highlights"><b>Menu picks:</b> ${p.menu_highlights.join(' · ')}</div>`
          : '';
        const priceHtml = p.price_per_head ? `<div class="place-meta">💷 ${p.price_per_head} per head</div>` : '';
        const dogHtml = p.dog_friendly ? `<div class="place-meta">🐕 ${dogFriendlyPill(p.dog_friendly)}</div>` : '';
        const actions = [];
        if (p.phone) actions.push(`<a href="tel:${p.phone.replace(/\s/g, '')}">📞 ${p.phone}</a>`);
        if (p.menu_url) actions.push(`<a href="${p.menu_url}" target="_blank" rel="noopener">📖 Menu</a>`);
        const actionsHtml = actions.length ? `<div class="map-links">${actions.join('')}</div>` : '';
        item.innerHTML = `
          <div>
            <div class="place-name">
              <span class="dot ${pillClass}"></span>${p.name} ${veganTag} ${pubTypeTag}
            </div>
            <div class="place-meta">${p.address}</div>
            ${p.from_base ? `<div class="place-meta">🚗 ${p.from_base} from the barnhouse</div>` : ''}
            ${priceHtml}
            ${dogHtml}
            ${p.notes ? `<div class="place-meta">${p.notes}</div>` : ''}
            ${highlightsHtml}
            <div class="place-hours">${p.opening_hours}</div>
            ${actionsHtml}
            ${mapLinks(p.lat, p.lon, true)}
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

async function loadHealth() {
  const el = document.getElementById('health-list');
  if (!el) return;
  try {
    const res = await fetch('data/health.json?t=' + Date.now());
    const items = (await res.json()).sort(byDistance);
    const grouped = items.reduce((acc, p) => {
      (acc[p.type] = acc[p.type] || []).push(p);
      return acc;
    }, {});
    const TYPE_LABELS = { pharmacy: 'Pharmacies', hospital: 'Hospitals' };
    el.innerHTML = '';
    for (const [type, list] of Object.entries(grouped)) {
      const group = document.createElement('div');
      group.className = 'place-group';
      group.innerHTML = `<h3>${TYPE_LABELS[type] || type}</h3>`;
      list.forEach(p => {
        const status = isOpen(p.opening_hours);
        const pillClass = status.open === true ? 'open' : status.open === false ? 'closed' : 'unknown';
        const item = document.createElement('div');
        item.className = 'place';
        item.innerHTML = `
          <div>
            <div class="place-name">
              <span class="dot ${pillClass}"></span>${p.name}
            </div>
            <div class="place-meta">${p.address}</div>
            <div class="place-meta">🚗 ${p.from_base} from the barnhouse</div>
            ${p.notes ? `<div class="place-meta">${p.notes}</div>` : ''}
            <div class="place-hours">${p.opening_hours}</div>
            <div class="map-links">
              ${p.phone ? `<a href="tel:${p.phone.replace(/\\s/g, '')}">📞 ${p.phone}</a>` : ''}
            </div>
            ${mapLinks(p.lat, p.lon, true)}
          </div>
          <span class="status-pill ${pillClass}">${status.label}</span>
        `;
        group.appendChild(item);
      });
      el.appendChild(group);
    }
  } catch (err) {
    el.innerHTML = `<p class="error">Couldn't load health info: ${err.message}</p>`;
  }
}

let walkFilter = 'all-walks';

function renderWalks() {
  const el = document.getElementById('walks-list');
  if (!el) return;
  renderWalkFilters();
  el.innerHTML = '';
  const items = [...WALKS].sort(byDistance).filter(w => {
    if (walkFilter === 'all-walks') return true;
    if (walkFilter === 'all') return w.min_age === 'all';
    if (walkFilter === '3+') return ['all', '3+'].includes(w.min_age);
    if (walkFilter === '5+') return ['all', '3+', '5+'].includes(w.min_age);
    return true;
  });
  if (!items.length) {
    el.innerHTML = `<p class="muted">No walks match this filter.</p>`;
    return;
  }
  items.forEach(w => {
    const accent = DIFF_ACCENT[w.difficulty] || '#888';
    const card = document.createElement('div');
    card.className = 'walk-card';
    card.id = `walk-${slug(w.name)}`;
    card.style.setProperty('--walk-accent', accent);
    card.innerHTML = `
      <div class="walk-top">
        <div class="walk-emoji">${w.emoji}</div>
        <div class="walk-title">
          <h4><a class="walk-link" href="${w.url}" target="_blank" rel="noopener">${w.name}</a></h4>
          <span class="walk-diff">${w.difficulty}${w.min_age ? ` · ${AGE_LABELS[w.min_age]}` : ''}</span>
        </div>
      </div>
      <div class="walk-stats">
        <div><span>📏</span><strong>${w.distance}</strong></div>
        <div><span>⏱</span><strong>${w.time}</strong></div>
      </div>
      <p class="walk-desc">${w.description}</p>
      <div class="walk-foot">
        <div>🚗 <strong>${w.from_base}</strong> from the barnhouse</div>
        <div>🅿️ ${w.parking}</div>
        ${w.dog_friendly ? `<div>🐕 ${dogFriendlyPill(w.dog_friendly)}</div>` : ''}
        ${mapLinks(w.lat, w.lon, true)}
      </div>
    `;
    el.appendChild(card);
  });
}

function renderWalkFilters() {
  const el = document.getElementById('walk-filters');
  if (!el || el.children.length) return;
  AGE_FILTERS.forEach(f => {
    const btn = document.createElement('button');
    btn.className = 'filter-chip' + (walkFilter === f.key ? ' active' : '');
    btn.textContent = f.label;
    btn.dataset.key = f.key;
    btn.addEventListener('click', () => {
      walkFilter = f.key;
      el.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c.dataset.key === walkFilter));
      renderWalks();
    });
    el.appendChild(btn);
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
  loadHealth();
  renderWalks();
  renderRecipes();
});
