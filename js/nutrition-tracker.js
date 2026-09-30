const { useState, useEffect } = React;

const GOALS = [
  { id: 'movement',     name: 'Movement ',     hint: '5,000 steps or other movement',       color: 'var(--c-movement)' },
  { id: 'hydration',    name: 'Hydration ',    hint: '2 bottles of water',                  color: 'var(--c-hydration)' },
  { id: 'protein',      name: 'Protein ',      hint: 'Protein at each meal',                color: 'var(--c-protein)' },
  { id: 'fibre',        name: 'Fibre ',        hint: 'High-fibre foods + psyllium',         color: 'var(--c-fibre)' },
  { id: 'supplements',  name: 'Supplements ',  hint: 'Vitamin D, Ferrovance, Creatine',     color: 'var(--c-supplements)' },
  { id: 'sleep',        name: 'Sleep ',        hint: 'Restful, consistent sleep',           color: 'var(--c-sleep)' },
  { id: 'mindfulness',  name: 'Mindfulness ',  hint: 'A moment for yourself',               color: 'var(--c-mindfulness)' }
];

const STORE_KEY = 'kbTrackerData_v2';
const THEME_KEY = 'kbTrackerTheme_v1';

function NutritionTracker() {
  const [activeTab, setActiveTab] = useState('tracker');
  const [data, setData] = useState({});
  const [theme, setTheme] = useState('theme-simple');

  useEffect(() => {
    try {
      const rawData = localStorage.getItem(STORE_KEY);
      if (rawData) setData(JSON.parse(rawData));

      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme) setTheme(savedTheme);
    } catch (e) {}
  }, []);

  const saveData = (newData) => {
    setData(newData);
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(newData));
    } catch (e) {}
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'theme-simple' ? 'theme-medieval' : 'theme-simple';
    setTheme(nextTheme);
    try {
      localStorage.setItem(THEME_KEY, nextTheme);
    } catch (e) {}
  };

  const pad = (n) => (n < 10 ? '0' + n : '' + n);
  const keyFor = (date) => date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());

  const today = new Date();
  const todayKey = keyFor(today);

  const dow = (today.getDay() + 6) % 7; // Mon = 0
  const monday = new Date(today); monday.setDate(today.getDate() - dow);
  const sunday = new Date(monday); sunday.setDate(monday.getDate() + 6);
  const fmt = { month: 'short', day: 'numeric' };
  const weekRangeStr = monday.toLocaleDateString(undefined, fmt) + ' – ' + sunday.toLocaleDateString(undefined, fmt);
  const todayHeadingStr = 'Today · ' + today.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' });

  const weekCountFor = (goalId) => {
    let count = 0;
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday); d.setDate(monday.getDate() + i);
      if (d > today) continue;
      const entry = data[keyFor(d)];
      if (entry && entry[goalId]) count++;
    }
    return count;
  };

  const toggleGoal = (goalId) => {
    const dayEntry = { ...(data[todayKey] || {}) };
    dayEntry[goalId] = !dayEntry[goalId];
    const newData = { ...data, [todayKey]: dayEntry };
    saveData(newData);
  };

  // Concentric Rings calculation
  const VB = 260, CENTER = 130, OUTER_R = 118, STEP = 15, STROKE = 11;

  return (
    <div className={theme} style={{ minHeight: '100vh', paddingBottom: '40px' }}>
      <div style={{ padding: '15px 20px 0', maxWidth: '720px', margin: '0 auto' }}>
        <a href="index.html" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Dashboard</a>
      </div>

      <header className="top" style={{ marginTop: '10px' }}>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'theme-simple' ? '🛡️ Medieval Theme' : '✨ Simple Theme'}
        </button>
        <h1>Your Plan</h1>
        <p className="sub">Small, steady habits — tick them off as you go. Your progress saves on this device.</p>
      </header>

      <nav className="tabs" role="tablist">
        {[
          { id: 'tracker', label: 'Tracker' },
          { id: 'protein', label: 'Protein' },
          { id: 'fibre', label: 'Fibre' },
          { id: 'reflux', label: 'Reflux' },
          { id: 'snacks', label: 'Snacks' },
          { id: 'supplements', label: 'Supplements' },
          { id: 'movement', label: 'Movement' }
        ].map((tab) => (
          <button
            key={tab.id}
            aria-selected={activeTab === tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="wrap">
        {/* ===== TRACKER ===== */}
        <section className={`panel ${activeTab === 'tracker' ? 'active' : ''}`}>
          <h2>This Week</h2>
          <p className="week-range">{weekRangeStr}</p>

          <div className="ring-card">
            <div className="ring-visual">
              <svg viewBox={`0 0 ${VB} ${VB}`}>
                {GOALS.map((g, i) => {
                  const r = OUTER_R - i * STEP;
                  const circumference = 2 * Math.PI * r;
                  const count = weekCountFor(g.id);
                  const frac = count / 7;
                  return (
                    <g key={g.id}>
                      <circle cx={CENTER} cy={CENTER} r={r} fill="none" stroke="var(--ring-track)" strokeWidth={STROKE} />
                      <circle
                        cx={CENTER}
                        cy={CENTER}
                        r={r}
                        fill="none"
                        stroke={g.color}
                        strokeWidth={STROKE}
                        strokeLinecap="round"
                        strokeDasharray={circumference.toFixed(1)}
                        strokeDashoffset={(circumference * (1 - frac)).toFixed(1)}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="legend">
              {GOALS.map((g) => {
                const count = weekCountFor(g.id);
                return (
                  <div className="row" key={g.id}>
                    <span className="dot" style={{ background: g.color }}></span>
                    <span className="name">{g.name}</span>
                    <span className="frac">{count}/7</span>
                  </div>
                );
              })}
            </div>
          </div>

          <h2>{todayHeadingStr}</h2>
          <ul className="checklist">
            {GOALS.map((g) => {
              const dayEntry = data[todayKey] || {};
              const isDone = !!dayEntry[g.id];
              return (
                <li key={g.id} className={isDone ? 'done' : ''} onClick={() => toggleGoal(g.id)}>
                  <span
                    className="box"
                    style={isDone ? { background: g.color, borderColor: g.color } : {}}
                  >
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5L6.2 12 13 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="txt">
                    <span className="name">{g.name}</span>
                    <span className="hint">{g.hint}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ===== PROTEIN ===== */}
        <section className={`panel ${activeTab === 'protein' ? 'active' : ''}`}>
          <h2>Protein Exchanges</h2>
          <p className="lede">Each item below gives roughly 7g protein. Aim for one at every meal, one with each snack.</p>

          <div className="exch-group">
            <span className="gname">Soya &amp; Meat Alternatives</span>
            <table className="exch">
              <tbody>
                <tr><td>100g</td><td>Tofu, firm</td></tr>
                <tr><td>60g</td><td>Tempeh</td></tr>
                <tr><td>½ cup (75g)</td><td>Edamame beans, shelled</td></tr>
                <tr><td>250ml</td><td>Soya milk, fortified</td></tr>
                <tr><td>25g (¾ scoop)</td><td>Plant protein powder</td></tr>
                <tr><td>1 patty (60g)</td><td>Soya or bean burger patty</td></tr>
              </tbody>
            </table>
          </div>

          <div className="exch-group">
            <span className="gname">Legumes</span>
            <table className="exch">
              <tbody>
                <tr><td>⅓ cup (70g)</td><td>Chickpeas / lentils / kidney or butter beans</td></tr>
                <tr><td>⅓ cup (90g)</td><td>Hummus</td></tr>
                <tr><td>⅓ cup (70g)</td><td>Baked beans in tomato sauce</td></tr>
                <tr><td>½ cup (100g)</td><td>Split peas or broad beans, cooked</td></tr>
              </tbody>
            </table>
          </div>

          <div className="exch-group">
            <span className="gname">Dairy &amp; Eggs</span>
            <table className="exch">
              <tbody>
                <tr><td>1 large (50g)</td><td>Egg, boiled / poached / scrambled</td></tr>
                <tr><td>½ cup (125ml)</td><td>Milk, low fat or fat free</td></tr>
                <tr><td>½ cup (125g)</td><td>Yoghurt, plain, fat free</td></tr>
                <tr><td>¼ cup (60g)</td><td>Cottage cheese, low fat</td></tr>
                <tr><td>Matchbox (30g)</td><td>Edam or mozzarella</td></tr>
              </tbody>
            </table>
          </div>

          <div className="exch-group">
            <span className="gname">Nuts, Seeds &amp; Grains</span>
            <table className="exch">
              <tbody>
                <tr><td>2 Tbs (30g)</td><td>Peanut butter or nut butter</td></tr>
                <tr><td>¼ cup (30g)</td><td>Almonds, peanuts or cashews</td></tr>
                <tr><td>3 Tbs (25g)</td><td>Pumpkin or hemp seeds</td></tr>
                <tr><td>3 Tbs (30g)</td><td>Chia seeds</td></tr>
                <tr><td>1 cup cooked</td><td>Quinoa</td></tr>
                <tr><td>1 cup cooked</td><td>Oats (½ cup dry)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="exch-note">Plant proteins are best combined across the day — legumes, grains, soya, nuts, seeds, dairy and eggs together give you everything you need.</p>
        </section>

        {/* ===== FIBRE ===== */}
        <section className={`panel ${activeTab === 'fibre' ? 'active' : ''}`}>
          <h2>Fibre</h2>
          <p className="lede">Building fibre up gradually, with enough fluid to help it do its job.</p>

          <div className="block">
            <h3>Choosing High-Fibre Foods</h3>
            <ul className="plain-list">
              <li>Check the label — look for more than 6g fibre per 100g</li>
              <li>Increase fibre gradually; a sudden jump can worsen bloating</li>
            </ul>
            <ul className="pill-list">
              <li>Oats</li><li>Seed loaf</li><li>Legumes</li><li>Chia &amp; flaxseed</li><li>Berries</li><li>Whole-wheat pasta</li><li>Barley</li>
            </ul>
          </div>

          <div className="block">
            <h3>Psyllium Husk — build up slowly</h3>
            <div className="step"><div className="n">Week 1</div><div className="d">1 teaspoon a day, with a full glass of water</div></div>
            <div className="step"><div className="n">Week 2</div><div className="d">2 teaspoons a day</div></div>
            <div className="step"><div className="n">Week 3+</div><div className="d">3 teaspoons a day, if tolerating comfortably</div></div>
            <p style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>If bloating increases, stay at the lower dose for longer rather than pushing through.</p>
          </div>

          <div className="block">
            <h3>Fluids</h3>
            <ul className="plain-list">
              <li>Fibre needs fluid to work well — aim for around 2 litres of water a day</li>
              <li>Keep coffee to 1 cup a day; rooibos and herbal teas are good fill-ins</li>
            </ul>
          </div>
        </section>

        {/* ===== REFLUX ===== */}
        <section className={`panel ${activeTab === 'reflux' ? 'active' : ''}`}>
          <h2>Reflux</h2>
          <p className="lede">What helps most, based on what you've noticed so far.</p>
          <ul className="plain-list">
            <li>Alcohol relaxes the valve at the top of the stomach — cutting back, or leaving it out on work nights, tends to settle things fastest</li>
            <li>Leave 2–3 hours between your last food or drink and lying down</li>
            <li>Raising the head of your bed slightly can help overnight symptoms</li>
            <li>Watch personal triggers — white starches, very fatty or spicy meals, fizzy drinks, large late suppers</li>
            <li>Smaller, more regular meals sit better than one big meal</li>
          </ul>
        </section>

        {/* ===== SNACKS ===== */}
        <section className={`panel ${activeTab === 'snacks' ? 'active' : ''}`}>
          <h2>Intentional Snacks</h2>
          <p className="lede">Two planned snacks a day, each with a protein element — this keeps your intake up without needing huge meals.</p>
          <ul className="plain-list">
            <li>¼–½ cup low-fat cottage cheese with fruit</li>
            <li>Pretzels or wholegrain crackers with cottage cheese</li>
            <li>Plain fat-free yoghurt with berries and a sprinkle of seeds</li>
            <li>A matchbox of edam or mozzarella with an apple or pear</li>
            <li>A boiled egg with cherry tomatoes</li>
            <li>Edamame, lightly salted, straight from the freezer bag</li>
            <li>A small handful of nuts with fruit</li>
            <li>Hummus with carrot, cucumber or pepper sticks</li>
          </ul>
          <div className="block" style={{ marginTop: '22px' }}>
            <h3>On Dairy</h3>
            <ul className="plain-list">
              <li>Aim for 2–3 dairy servings a day — an easy protein and calcium win</li>
              <li>Lower-fat cheeses that work well: edam, mozzarella, low-fat cottage cheese</li>
              <li>Fat-free or low-fat milk and plain yoghurt over flavoured versions</li>
              <li>Up to 6 eggs a week alongside this</li>
            </ul>
          </div>
        </section>

        {/* ===== SUPPLEMENTS ===== */}
        <section className={`panel ${activeTab === 'supplements' ? 'active' : ''}`}>
          <h2>Supplements</h2>
          <div className="supp">
            <div className="sname">Vitamin D</div>
            <div className="sline">Best absorbed alongside a meal that contains some fat — supports bone health and immune function.</div>
          </div>
          <div className="supp">
            <div className="sname">Ferrovance</div>
            <div className="sline">Pair with vitamin C — citrus, kiwi, peppers, or a squeeze of lemon — and keep tea, coffee and dairy at least an hour away, as they block absorption.</div>
          </div>
          <div className="supp">
            <div className="sname">Creatine</div>
            <div className="sline">One of the best-researched supplements for strength and muscle — a scoop in your morning oats or after training is the easiest way to use it.</div>
          </div>
        </section>

        {/* ===== MOVEMENT ===== */}
        <section className={`panel ${activeTab === 'movement' ? 'active' : ''}`}>
          <h2>Movement</h2>
          <p className="lede">The aim is consistency rather than intensity.</p>
          <ul className="plain-list">
            <li>Keep up your yoga — good for both body and stress levels</li>
            <li>Weight training 2–3 times a week, working toward slightly heavier loads over time</li>
            <li>5,000 steps a day, or another form of movement</li>
            <li>Walking after supper: steps in, and it helps digestion before bed</li>
          </ul>
          <div className="block" style={{ marginTop: '22px' }}>
            <h3>Around Your Training</h3>
            <p style={{ fontSize: '16px', color: 'var(--ink-soft)', margin: '0 0 8px', fontWeight: 'bold' }}>Eat within 30–60 minutes after training — include protein and carbohydrate.</p>
            <ul className="pill-list">
              <li>Smoothie: plant protein, banana, soya milk</li>
              <li>Eggs on toast</li>
              <li>Yoghurt with fruit and oats</li>
              <li>Cottage cheese on crackers with fruit</li>
            </ul>
          </div>
        </section>
      </div>

      <p className="footnote">Your daily progress is saved on this device only, in your browser's storage — nothing is sent to a server.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<NutritionTracker />);