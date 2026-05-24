// Buxton-area coordinates
const BUXTON = { lat: 53.2591, lon: -1.9111 };

const DAYS = [
  {
    date: '2026-05-27', title: 'Arrival',
    schedule: [
      { time: '09:00', text: 'Lewes party leaves (long drive — straight to the barnhouse)', ref: 'travel', party: 'lewes' },
      { time: '11:00', text: 'Newcastle party leaves', ref: 'travel', party: 'newcastle' },
      { time: '12:30', text: 'Huddersfield party (Mom) leaves', ref: 'travel', party: 'huddersfield' },
      { time: '14:00', text: 'Mom stops at Leek for the fresh shop', ref: 'arrival-meal', party: 'huddersfield' },
      { time: '16:00', text: 'Check in at The Barnhouse', ref: 'stay' },
      { time: '17:00', text: 'Unpack, short stretch in the garden, kids decompress' },
      { time: '18:30', text: 'Cook Ma Po Tofu', ref: 'recipe-sichuan' },
    ],
    meals: { breakfast: 'On the road', lunch: 'Pack', dinner: 'Cook in · Sichuan Ma Po 🌶️' }
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
      { time: '16:00', text: 'Start the lasagne ragu (simmers while the kids play)', ref: 'recipe-italian' },
      { time: '17:30', text: 'Assemble lasagne, into the oven', ref: 'recipe-italian' },
      { time: '18:30', text: 'Lasagne out · big salad · garlic bread' },
    ],
    meals: { breakfast: 'Barnhouse', lunch: 'Cook in · wraps / leftovers', dinner: 'Cook in · Italian Lasagne 🍝' }
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
    cuisine: 'Sichuan',
    emoji: '🌶️',
    day: 'Wed',
    accent: '#a83a2f',
    night: 'Wed · Sichuan Ma Po 🌶️',
    title: 'Vegan Ma Po Tofu + steamed rice',
    serves: '5 adults + 3 kids',
    time: '40 min',
    why: 'Big-flavour arrival-night cook. Numbing-but-mild adult version, plain kid portions taken out before the heat goes in.',
    ingredients: [
      '900g silken or firm tofu, cubed (2 × 400–450g blocks)',
      '250g chestnut mushrooms, finely chopped (vegan "mince")',
      '600g basmati or jasmine rice (uncooked)',
      '3 tbsp doubanjiang (Sichuan chili bean paste — bring from home)',
      '1 tbsp fermented black beans, rinsed (optional, bring from home)',
      '1 tbsp Sichuan peppercorns (bring from home)',
      '5 cloves garlic, minced',
      '40g ginger, minced',
      '6 spring onions, sliced (whites + greens kept separate)',
      '4 tbsp light soy sauce',
      '2 tbsp dark soy sauce',
      '1 tbsp shaoxing wine or dry sherry (optional)',
      '500 ml veg stock',
      '2 tbsp cornflour mixed with 4 tbsp cold water',
      '3 tbsp neutral oil + 1 tbsp toasted sesame oil',
      '1 tsp sugar',
      'For kids: portion plain tofu + rice + a splash of plain soy aside before adding chili paste',
    ],
    method: [
      'Cook rice (1.5 × volume water, lid on, simmer 12 min, rest 10 min).',
      'Drop tofu cubes into salted simmering water for 2 min; drain gently — keeps them silky.',
      'Toast Sichuan peppercorns in a dry pan 1 min until fragrant; crush coarsely.',
      'Heat oil in a wok / wide pan. Fry chopped mushrooms hard for 5 min until browned. Set aside.',
      'Reserve plain kid portions of rice + a few tofu cubes now.',
      'In the same pan, lower heat. Fry ginger, garlic, white spring onion 1 min. Stir in doubanjiang + black beans, fry 1 min until oil reddens.',
      'Add stock, soy sauces, shaoxing, sugar. Bring to a simmer. Slide in tofu carefully. Simmer 4 min.',
      'Stir in cornflour slurry, simmer 1 min to thicken.',
      'Finish off heat with sesame oil, crushed peppercorns and green spring onion. Serve over rice.',
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
    cuisine: 'Italian',
    emoji: '🍝',
    day: 'Sat',
    accent: '#b03a3a',
    night: 'Sat · Italian Lasagne 🍝',
    title: 'Vegan lentil & mushroom lasagne',
    serves: '5 adults + 3 kids',
    time: '~90 min (mostly hands-off)',
    why: 'Home-day comfort food. Make the ragu while the kids decompress; assemble and bake before dinner. Leftovers do Sun lunch.',
    ingredients: [
      '18–24 dried lasagne sheets (about 1.5 boxes)',
      '— Lentil & mushroom ragu —',
      '2 × 400g tins green or brown lentils, drained (or 250g dried, cooked)',
      '500g chestnut mushrooms, finely chopped',
      '2 onions, 4 carrots, 4 celery stalks — all finely diced (soffritto)',
      '6 cloves garlic, minced',
      '4 × 400g tins chopped tomatoes',
      '2 tbsp tomato purée',
      '200 ml red wine (optional)',
      '2 tsp dried oregano, 1 tsp dried thyme, 2 bay leaves',
      '4 tbsp olive oil, salt, pepper, pinch sugar',
      '— Vegan béchamel —',
      '100g vegan butter',
      '100g plain flour',
      '1.5 L unsweetened oat or soya milk, warmed',
      'Pinch nutmeg, salt, white pepper',
      '— Top —',
      '200g vegan mozzarella-style (Violife shreds or block)',
      'Optional: Violife vegan parm, fresh basil',
      'Big green salad on the side',
    ],
    method: [
      'Ragu: heat oil, sweat soffritto (onion + carrot + celery) 10 min until soft. Add garlic + mushrooms, fry 5 min until browned.',
      'Stir in tomato purée 1 min, deglaze with wine, reduce 2 min.',
      'Add lentils, chopped tomatoes, herbs, sugar, salt. Simmer uncovered 25–30 min until thick. Taste and season.',
      'Béchamel: melt butter, whisk in flour, cook 1 min. Whisk in warm milk in stages until smooth. Simmer 3 min until thick. Season with nutmeg, salt, pepper.',
      'Assemble in a big roasting tin: thin layer of béchamel → pasta → ragu → béchamel. Repeat 3–4 times, finishing with béchamel + vegan mozzarella on top.',
      'Bake 200°C / 180°C fan / 35–40 min until bubbling and golden on top. Rest 10 min before cutting.',
      'Serve with green salad and bread. Kids love it plain; adults add chilli + parm.',
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
      const partyAttr = s.party ? ` data-party="${s.party}"` : '';
      return `<li${partyAttr}><span class="schedule-time">${s.time}</span><span class="schedule-text">${body}</span></li>`;
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
const WHO_KEY = 'buxton-whoami-v1';
const PACK_KEY = 'buxton-packing-v1';

function getWho() {
  try { return localStorage.getItem(WHO_KEY) || 'all'; } catch (e) { return 'all'; }
}
function setWho(v) {
  try { localStorage.setItem(WHO_KEY, v); } catch (e) {}
}

const SHOPPING = [
  {
    section: '🥬 Fresh produce',
    items: [
      { id: 'sh-bananas', text: '12 bananas (breakfasts + snacks)' },
      { id: 'sh-apples', text: 'Bag of apples' },
      { id: 'sh-satsumas', text: 'Bag of satsumas (kid lunchboxes)' },
      { id: 'sh-berries', text: '2 punnets berries (porridge topping)' },
      { id: 'sh-tomatoes', text: '500g cherry tomatoes' },
      { id: 'sh-cucumber', text: '2 cucumbers' },
      { id: 'sh-carrots', text: '1 kg carrots' },
      { id: 'sh-red-peppers', text: '4 red peppers' },
      { id: 'sh-mushrooms', text: '500g mushrooms (fry-ups)' },
      { id: 'sh-spinach', text: '2 bags baby spinach' },
      { id: 'sh-salad', text: 'Mixed salad bag × 2' },
      { id: 'sh-avocados', text: '5 ripe avocados' },
      { id: 'sh-sweet-pot', text: '4 large sweet potatoes (Mexican)' },
      { id: 'sh-broccoli', text: '2 heads broccoli (Asian)' },
      { id: 'sh-spring-onion', text: 'Spring onions × 2 bunches' },
      { id: 'sh-red-onion', text: '4 red onions' },
      { id: 'sh-brown-onion', text: '4 brown onions' },
      { id: 'sh-ginger', text: 'Thumb of ginger (50g)' },
      { id: 'sh-limes', text: '6 limes' },
      { id: 'sh-lemons', text: '3 lemons' },
      { id: 'sh-coriander', text: 'Fresh coriander × 2 (Mexican + Sichuan garnish)' },
      { id: 'sh-ginger', text: '40g+ fresh ginger (Sichuan + Asian)' },
      { id: 'sh-mushrooms-chestnut', text: '750g chestnut mushrooms (250g Wed Sichuan + 500g Sat lasagne)' },
      { id: 'sh-celery', text: '1 bunch celery (Sat ragu)' },
      { id: 'sh-extra-carrots-onions', text: 'Extra carrots + onions (Sat ragu — quadruple)' },
      { id: 'sh-potatoes', text: '1.5 kg potatoes (roast / wedges option)' },
    ],
  },
  {
    section: '🍞 Bakery',
    items: [
      { id: 'sh-sourdough', text: '2 × sourdough or ciabatta (breakfast toast, lunches)' },
      { id: 'sh-bread-sliced', text: '2 × seeded sliced loaves (toast)' },
      { id: 'sh-wraps', text: '2 × big packs flour wraps (lunches + Sat home lunch)' },
      { id: 'sh-corn-tortillas', text: '24 corn or flour tortillas (Mexican)' },
      { id: 'sh-pita', text: '1 pack pita pockets (picnics)' },
      { id: 'sh-rolls', text: '1 pack rolls (sausage roll style)' },
      { id: 'sh-croissants', text: 'Pack vegan croissants (Sunday morning)' },
    ],
  },
  {
    section: '🥛 Dairy alternatives & fridge',
    items: [
      { id: 'sh-oat-milk', text: '4 L oat milk (Oatly) — kids drink it too' },
      { id: 'sh-vegan-butter', text: '2 × vegan butter (Flora Plant / Naturli)' },
      { id: 'sh-vegan-cheese', text: '2 × vegan cheese slices (Violife)' },
      { id: 'sh-vegan-parm', text: 'Violife vegan parm (Italian)' },
      { id: 'sh-hummus', text: '3 × hummus tubs (lunches)' },
      { id: 'sh-yogurt', text: '6 × oat yogurts (kids breakfasts)' },
      { id: 'sh-tofu', text: '900g tofu (Wed Ma Po — 2 × silken or firm blocks)' },
      { id: 'sh-vegan-mozz', text: 'Vegan mozzarella shreds 200g (Sat lasagne top)' },
      { id: 'sh-vegan-sausages', text: '2 packs vegan sausages (fry-ups)' },
      { id: 'sh-vegan-bacon', text: '2 packs vegan bacon rashers' },
      { id: 'sh-vegan-cream-cheese', text: 'Vegan cream cheese (bagels)' },
    ],
  },
  {
    section: '🥫 Pantry & dry',
    items: [
      { id: 'sh-cereal', text: '2 × big boxes muesli / granola' },
      { id: 'sh-porridge', text: '1 kg porridge oats' },
      { id: 'sh-rice', text: '600g basmati or jasmine rice (Wed)' },
      { id: 'sh-lasagne', text: '2 boxes dried lasagne sheets (Sat)' },
      { id: 'sh-lentils', text: '2 × tins green/brown lentils (Sat ragu)' },
      { id: 'sh-tomatoes-tin', text: '4 × tins chopped tomatoes (Sat ragu)' },
      { id: 'sh-tomato-puree', text: 'Tube tomato purée' },
      { id: 'sh-red-wine', text: '1 bottle red wine for cooking + drinking' },
      { id: 'sh-flour', text: 'Plain flour 500g (Sat béchamel)' },
      { id: 'sh-black-beans', text: '3 × tins black beans (Mexican)' },
      { id: 'sh-baked-beans', text: '4 × tins baked beans (breakfasts)' },
      { id: 'sh-salsa', text: '2 × jars salsa (1 mild for kids)' },
      { id: 'sh-soy', text: 'Soy sauce (200ml)' },
      { id: 'sh-rice-vinegar', text: 'Rice vinegar (small bottle)' },
      { id: 'sh-sesame-oil', text: 'Toasted sesame oil' },
      { id: 'sh-maple', text: 'Small bottle maple syrup' },
      { id: 'sh-chipotle', text: 'Tube/jar chipotle paste' },
      { id: 'sh-cornflour', text: 'Cornflour' },
      { id: 'sh-peanut-butter', text: 'Peanut butter (kids lunches)' },
      { id: 'sh-jam', text: 'Jam' },
      { id: 'sh-marmite', text: 'Marmite (small)' },
      { id: 'sh-crisps', text: 'Multipack crisps × 2 (picnics)' },
      { id: 'sh-flapjacks', text: 'Box flapjacks / cereal bars' },
      { id: 'sh-dried-fruit', text: 'Dried fruit + nuts mix' },
      { id: 'sh-veggie-pies', text: '2 packs Linda McCartney sausage rolls (frozen — heat for picnics)' },
    ],
  },
  {
    section: '🍷 Drinks',
    items: [
      { id: 'sh-water', text: '2 × 6-pack still water (driving + walks)' },
      { id: 'sh-juice', text: '2 × kids juice cartons multipack' },
      { id: 'sh-squash', text: 'Bottle squash' },
      { id: 'sh-tea', text: 'Box tea bags' },
      { id: 'sh-coffee-grinds', text: 'Ground coffee 500g (if barnhouse has cafetiere)' },
      { id: 'sh-beer', text: '12-pack craft beer / IPA' },
      { id: 'sh-wine', text: 'Red + white (2 bottles each)' },
      { id: 'sh-cordial', text: 'Elderflower cordial' },
    ],
  },
  {
    section: '🧻 Household',
    items: [
      { id: 'sh-toilet-roll', text: '9-pack toilet roll (just in case)' },
      { id: 'sh-kitchen-roll', text: 'Kitchen roll × 2' },
      { id: 'sh-foil', text: 'Foil + cling film (for picnic wraps)' },
      { id: 'sh-bin-bags', text: 'Bin bags' },
      { id: 'sh-washing-up', text: 'Washing-up liquid' },
      { id: 'sh-wipes', text: 'Wet wipes (kid hands at picnics)' },
    ],
  },
];

const PACKING = [
  {
    section: 'Everyone',
    party: 'all',
    items: [
      { id: 'first-aid', text: 'First aid kit (kid plasters, antihistamine, Calpol, Piriton)' },
      { id: 'sun-cream', text: 'Sun cream (kid-safe)' },
      { id: 'rain-jackets', text: 'Waterproofs for everyone' },
      { id: 'walking-boots', text: 'Walking boots' },
      { id: 'wellies-kids', text: 'Wellies for the kids' },
      { id: 'picnic-blanket', text: 'Picnic blanket' },
      { id: 'flask', text: 'Thermos flask' },
      { id: 'binoculars', text: 'Binoculars' },
      { id: 'board-games', text: 'Board games / card games for the home day' },
      { id: 'speaker', text: 'Bluetooth speaker' },
      { id: 'multicharger', text: 'Multi-USB / extension lead' },
      { id: 'mapo-paste', text: 'Doubanjiang (Sichuan chili bean paste) — Wed night key ingredient' },
      { id: 'mapo-peppercorns', text: 'Sichuan peppercorns + fermented black beans (optional)' },
      { id: 'mapo-soy', text: 'Light + dark soy sauce, cornflour, toasted sesame oil, shaoxing wine' },
      { id: 'rice', text: '600g basmati or jasmine rice (Wed)' },
      { id: 'oils-spices', text: 'Olive oil, salt, sugar, oregano, thyme, bay, chilli flakes, smoked paprika, cumin, nutmeg' },
      { id: 'garlic', text: 'Garlic bulbs (lots — Wed Sichuan + Thu Mexican + Sat Italian)' },
      { id: 'coffee', text: 'Coffee + filters / cafetiere' },
      { id: 'snacks', text: 'Kid snacks for the drive (oat bars, dried fruit)' },
    ]
  },
  {
    section: 'Lewes party',
    party: 'lewes',
    items: [
      { id: 'l-adult-clothes', text: 'Adult clothes (warm layers, 5 days)' },
      { id: 'l-kid-clothes', text: 'Jasper + Clover clothes (warmer than you think)' },
      { id: 'l-baby-formula', text: 'Baby formula / feeding kit' },
      { id: 'l-nappies', text: 'Nappies (pack 50% extra)' },
      { id: 'l-baby-clothes', text: 'Baby clothes + sleep bags' },
      { id: 'l-baby-carrier', text: 'Baby carrier for walks' },
      { id: 'l-buggy', text: 'All-terrain buggy' },
      { id: 'l-travel-cot', text: 'Travel cot (check if barnhouse has one)' },
      { id: 'l-dusty-bed', text: "Dusty's bed + blanket" },
      { id: 'l-dusty-food', text: "Dusty's food + bowls" },
      { id: 'l-dusty-coat', text: 'Italian greyhound coat (Dusty gets cold)' },
      { id: 'l-dusty-lead', text: 'Lead + harness for Dusty' },
      { id: 'l-dusty-poobags', text: 'Poo bags' },
    ]
  },
  {
    section: 'Huddersfield (Mom)',
    party: 'huddersfield',
    items: [
      { id: 'h-clothes', text: 'Clothes' },
      { id: 'h-leek-shop', text: 'Shopping list for the Leek arrival shop' },
      { id: 'h-ev-cable', text: 'EV charging cable + Type 2 adapter' },
      { id: 'h-ev-rfid', text: 'Charging cards/app logins (BP Pulse, GeniePoint, InstaVolt)' },
      { id: 'h-zap-map', text: 'Zap-Map app installed + planned route' },
      { id: 'h-amber-bed', text: "Amber's bed" },
      { id: 'h-amber-food', text: "Amber's food + bowls" },
      { id: 'h-amber-lead', text: 'Lead + harness for Amber' },
      { id: 'h-amber-coat', text: 'Greyhound coat (Amber gets cold)' },
      { id: 'h-amber-poobags', text: 'Poo bags' },
    ]
  },
  {
    section: 'Newcastle party',
    party: 'newcastle',
    items: [
      { id: 'n-adult-clothes', text: 'Adult clothes' },
      { id: 'n-bee-lulu-clothes', text: 'Bee + Lulu clothes' },
      { id: 'n-bobbi-food', text: "Bobbi's food + bowls" },
      { id: 'n-bobbi-bed', text: "Bobbi's bed" },
      { id: 'n-bobbi-coat', text: 'Chihuahua coat (warm layer)' },
      { id: 'n-bobbi-lead', text: 'Lead + harness for Bobbi' },
      { id: 'n-bobbi-carrier', text: 'Carry sling for tired chihuahua moments' },
      { id: 'n-bobbi-poobags', text: 'Poo bags' },
    ]
  },
];

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

let cachedActivities = [];
let activityAgeFilter = 'all-activities';
let activityGradeFilter = 'all-grades';

const ACTIVITY_AGE_FILTERS = [
  { key: 'all-activities', label: 'All activities' },
  { key: 'all', label: 'All ages (toddler ok)' },
  { key: '3+', label: '3-year-old friendly' },
  { key: '5+', label: '5+ friendly' },
];

const GRADE_FILTERS = [
  { key: 'all-grades', label: 'All grades' },
  { key: 'beginner', label: 'Beginner (V0–V2)' },
  { key: 'intermediate', label: 'Intermediate (V3–V5)' },
  { key: 'advanced', label: 'Advanced (V6+)' },
];

function isClimbing(a) {
  return (a.tags || []).some(t => ['climbing', 'bouldering'].includes(t));
}

function activityMatches(a) {
  // Age filter
  if (activityAgeFilter !== 'all-activities') {
    const ageOk = activityAgeFilter === 'all' ? a.min_age === 'all'
      : activityAgeFilter === '3+' ? ['all', '3+'].includes(a.min_age)
      : activityAgeFilter === '5+' ? ['all', '3+', '5+', '4+'].includes(a.min_age)
      : true;
    if (!ageOk) return false;
  }
  // Grade filter: only affects climbing/bouldering tiles
  if (activityGradeFilter !== 'all-grades' && isClimbing(a)) {
    const levels = a.levels || [];
    if (!levels.includes(activityGradeFilter)) return false;
  }
  return true;
}

function renderActivityFilters() {
  const ageEl = document.getElementById('activity-age-filters');
  const gradeEl = document.getElementById('activity-grade-filters');
  if (ageEl && !ageEl.children.length) {
    ACTIVITY_AGE_FILTERS.forEach(f => {
      const btn = document.createElement('button');
      btn.className = 'filter-chip' + (activityAgeFilter === f.key ? ' active' : '');
      btn.textContent = f.label;
      btn.dataset.key = f.key;
      btn.addEventListener('click', () => {
        activityAgeFilter = f.key;
        ageEl.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c.dataset.key === activityAgeFilter));
        renderActivities(cachedActivities);
      });
      ageEl.appendChild(btn);
    });
  }
  if (gradeEl && !gradeEl.children.length) {
    GRADE_FILTERS.forEach(f => {
      const btn = document.createElement('button');
      btn.className = 'filter-chip' + (activityGradeFilter === f.key ? ' active' : '');
      btn.textContent = f.label;
      btn.dataset.key = f.key;
      btn.addEventListener('click', () => {
        activityGradeFilter = f.key;
        gradeEl.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c.dataset.key === activityGradeFilter));
        renderActivities(cachedActivities);
      });
      gradeEl.appendChild(btn);
    });
  }
}

function renderActivities(activities) {
  const el = document.getElementById('activities-list');
  if (!el) return;
  cachedActivities = activities;
  renderActivityFilters();
  const filtered = [...activities].filter(activityMatches).sort(byDistance);
  const grouped = filtered.reduce((acc, a) => {
    const g = a.group || 'Other';
    (acc[g] = acc[g] || []).push(a);
    return acc;
  }, {});
  if (!Object.keys(grouped).length) {
    el.innerHTML = `<p class="muted">No activities match these filters.</p>`;
    return;
  }
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
      const ageBadge = a.min_age ? `<span class="activity-age">${a.min_age === 'all' ? 'All ages' : `Age ${a.min_age}`}</span>` : '';
      tile.innerHTML = `
        <h4>${a.name} ${ageBadge}</h4>
        <p class="muted">${a.description}</p>
        <div class="activity-meta">
          ${a.from_base ? `<div>🚗 ${a.from_base}</div>` : ''}
          ${a.hours ? `<div>🕐 ${a.hours}</div>` : ''}
          ${a.price ? `<div>💷 ${a.price}</div>` : ''}
          ${a.grades ? `<div>🧗 ${a.grades}</div>` : ''}
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

async function loadStops() {
  const containers = document.querySelectorAll('.travel-stops[data-stops-for]');
  if (!containers.length) return;
  try {
    const res = await fetch('data/stops.json?t=' + Date.now());
    const items = await res.json();
    containers.forEach(c => {
      const group = c.dataset.stopsFor;
      const list = items.filter(s => s.group === group);
      if (!list.length) return;
      const heading = group.includes('EV') ? '⚡ EV chargers' : '🛣️ Suggested stops';
      c.innerHTML = `
        <h5 class="stops-heading">${heading}</h5>
        <ul class="stops-list">
          ${list.map(s => `
            <li>
              <div class="stop-name">${s.type === 'ev' ? '⚡' : s.type === 'scenic' ? '🌳' : '🛣️'} ${s.name}</div>
              <div class="stop-desc">${s.description}</div>
              ${s.from ? `<div class="stop-from">${s.from}</div>` : ''}
              ${mapLinks(s.lat, s.lon, false)}
            </li>
          `).join('')}
        </ul>
      `;
    });
  } catch (err) {
    containers.forEach(c => { c.innerHTML = `<p class="error">Couldn't load stops: ${err.message}</p>`; });
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

function applyWhoFilter() {
  const who = getWho();
  document.body.dataset.whoami = who;
  // Travel cards
  document.querySelectorAll('.travel-card').forEach(card => {
    const route = card.dataset.route || '';
    const matches = who === 'all'
      || (who === 'lewes' && route === 'Lewes route')
      || (who === 'huddersfield' && route === 'Huddersfield route')
      || (who === 'newcastle' && route === 'Newcastle route');
    card.style.display = matches ? '' : 'none';
  });
  renderPacking();
  // Wed schedule items: re-render days to apply party filter
  // (renderDays is called from loadWeather; just trigger filter on existing items)
  document.querySelectorAll('.day-schedule li').forEach(li => {
    const party = li.dataset.party;
    if (!party || party === 'all') { li.style.display = ''; return; }
    li.style.display = (who === 'all' || who === party) ? '' : 'none';
  });
}

function packKey(id) { return `${PACK_KEY}:${id}`; }
function isPacked(id) {
  try { return localStorage.getItem(packKey(id)) === '1'; } catch (e) { return false; }
}
function setPacked(id, v) {
  try { localStorage.setItem(packKey(id), v ? '1' : '0'); } catch (e) {}
}

function renderShopping() {
  const el = document.getElementById('shopping-list');
  if (!el) return;
  el.innerHTML = '';
  SHOPPING.forEach(section => {
    const total = section.items.length;
    const done = section.items.filter(i => isPacked(i.id)).length;
    const wrap = document.createElement('div');
    wrap.className = 'pack-section';
    wrap.innerHTML = `
      <div class="pack-head">
        <h3>${section.section}</h3>
        <span class="pack-count">${done} / ${total}</span>
      </div>
      <ul class="pack-list">
        ${section.items.map(i => `
          <li class="${isPacked(i.id) ? 'done' : ''}">
            <label>
              <input type="checkbox" data-pack-id="${i.id}" ${isPacked(i.id) ? 'checked' : ''} />
              <span>${i.text}</span>
            </label>
          </li>
        `).join('')}
      </ul>
    `;
    el.appendChild(wrap);
  });
}

function renderPacking() {
  const el = document.getElementById('packing-list');
  if (!el) return;
  const who = getWho();
  const visible = PACKING.filter(s => s.party === 'all' || who === 'all' || who === s.party);
  el.innerHTML = '';
  visible.forEach(section => {
    const total = section.items.length;
    const done = section.items.filter(i => isPacked(i.id)).length;
    const wrap = document.createElement('div');
    wrap.className = 'pack-section';
    wrap.innerHTML = `
      <div class="pack-head">
        <h3>${section.section}</h3>
        <span class="pack-count">${done} / ${total}</span>
      </div>
      <ul class="pack-list">
        ${section.items.map(i => `
          <li class="${isPacked(i.id) ? 'done' : ''}">
            <label>
              <input type="checkbox" data-pack-id="${i.id}" ${isPacked(i.id) ? 'checked' : ''} />
              <span>${i.text}</span>
            </label>
          </li>
        `).join('')}
      </ul>
    `;
    el.appendChild(wrap);
  });
}

document.addEventListener('change', e => {
  const cb = e.target.closest('input[data-pack-id]');
  if (!cb) return;
  setPacked(cb.dataset.packId, cb.checked);
  cb.closest('li').classList.toggle('done', cb.checked);
  // Update count for this section
  const section = cb.closest('.pack-section');
  if (section) {
    const inputs = section.querySelectorAll('input[data-pack-id]');
    const done = Array.from(inputs).filter(i => i.checked).length;
    section.querySelector('.pack-count').textContent = `${done} / ${inputs.length}`;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('whoami-select');
  if (sel) {
    sel.value = getWho();
    sel.addEventListener('change', () => {
      setWho(sel.value);
      applyWhoFilter();
    });
  }
  loadWeather();
  loadPlacesAndMap();
  loadRestaurants();
  loadHealth();
  loadStops().then(applyWhoFilter);
  renderWalks();
  renderRecipes();
  renderShopping();
  renderPacking();
  // Initial filter pass after a tick so day cards exist
  setTimeout(applyWhoFilter, 100);
});
