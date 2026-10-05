// ==========================================
// MASTER PRESET DATABASE (Edit your defaults here!)
// ==========================================
const MASTER_DEFAULT_FOODS = [
  { name: "Oats (Standard Recipe)", ingredients: "1/2 cup rolled oats, almond milk, cinnamon, 1/2 banana", notes: "Standard morning baseline" },
  { name: "Oats (Protein Peanut Butter)", ingredients: "1/2 cup rolled oats, almond milk, 1 scoop protein powder, 1 tbsp peanut butter", notes: "Higher protein variation" },
  { name: "Eggs & Toast", ingredients: "2 eggs, 1 slice sourdough toast, butter, salt & pepper", notes: "Savory breakfast" },
  { name: "Chicken Salad", ingredients: "Grilled chicken breast, mixed greens, olive oil, lemon juice", notes: "Light lunch" },
  { name: "Rice & Veggies", ingredients: "1 cup jasmine rice, steamed broccoli, carrots, soy sauce", notes: "Easy dinner" }
];

const MASTER_DEFAULT_SYMPTOMS = [
  "Bloating", 
  "Headache", 
  "Brain Fog", 
  "Fatigue", 
  "Nausea", 
  "Stomach Cramps"
];


function FoodTrackerApp() {
  // 1. Initial Default Options (Loaded from Master Database or localStorage)
  const [foods, setFoods] = React.useState(() => {
    const saved = localStorage.getItem('custom_foods');
    return saved ? JSON.parse(saved) : MASTER_DEFAULT_FOODS;
  });

  const [symptoms, setSymptoms] = React.useState(() => {
    const saved = localStorage.getItem('custom_symptoms');
    return saved ? JSON.parse(saved) : MASTER_DEFAULT_SYMPTOMS;
  });

  // 2. Log History State
  const [logs, setLogs] = React.useState(() => {
    const saved = localStorage.getItem('health_logs');
    return saved ? JSON.parse(saved) : [];
  });

  // Helper to format current date/time for datetime-local input (YYYY-MM-DDTHH:mm)
  const getCurrentLocalDateTime = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const localDate = new Date(now.getTime() - (offset*60*1000));
    return localDate.toISOString().slice(0, 16);
  };

  // Form States
  const [entryType, setEntryType] = React.useState('meal'); // 'meal' or 'symptom'
  const [selectedFoodIndex, setSelectedFoodIndex] = React.useState(0);
  const [selectedSymptom, setSelectedSymptom] = React.useState(symptoms[0]);
  
  const [customInput, setCustomInput] = React.useState('');
  const [saveToDropdown, setSaveToDropdown] = React.useState(false);
  
  const [mealIngredients, setMealIngredients] = React.useState(foods[0]?.ingredients || '');
  const [generalNotes, setGeneralNotes] = React.useState(foods[0]?.notes || '');
  const [entryTimestamp, setEntryTimestamp] = React.useState(getCurrentLocalDateTime());

  // Save changes to localStorage
  React.useEffect(() => {
    localStorage.setItem('custom_foods', JSON.stringify(foods));
  }, [foods]);

  React.useEffect(() => {
    localStorage.setItem('custom_symptoms', JSON.stringify(symptoms));
  }, [symptoms]);

  React.useEffect(() => {
    localStorage.setItem('health_logs', JSON.stringify(logs));
  }, [logs]);

  // When a preset food is selected from dropdown, auto-fill its ingredients & notes!
  const handleFoodSelectChange = (index) => {
    setSelectedFoodIndex(index);
    const chosenFood = foods[index];
    if (chosenFood) {
      setMealIngredients(chosenFood.ingredients || '');
      setGeneralNotes(chosenFood.notes || '');
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Determine what item was logged
    let itemToLog = '';
    let loggedIngredients = '';
    let loggedNotes = generalNotes;

    if (entryType === 'meal') {
      itemToLog = customInput.trim() !== '' ? customInput.trim() : foods[selectedFoodIndex]?.name;
      loggedIngredients = mealIngredients;
    } else {
      itemToLog = customInput.trim() !== '' ? customInput.trim() : selectedSymptom;
    }

    if (!itemToLog) return;

    // If it's a custom item and user wants to save it to dropdown
    if (customInput.trim() !== '' && saveToDropdown) {
      if (entryType === 'meal') {
        const newMealObj = { name: itemToLog, ingredients: mealIngredients, notes: generalNotes };
        if (!foods.some(f => f.name === itemToLog)) {
          setFoods([...foods, newMealObj]);
        }
      } else if (entryType === 'symptom') {
        if (!symptoms.includes(itemToLog)) {
          setSymptoms([...symptoms, itemToLog]);
        }
      }
    }

    // Format the chosen date/time nicely
    const formattedDate = entryTimestamp 
      ? new Date(entryTimestamp).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })
      : new Date().toLocaleString();

    // Create time-stamped entry
    const newEntry = {
      id: Date.now(),
      type: entryType,
      name: itemToLog,
      ingredients: loggedIngredients,
      notes: loggedNotes,
      timestamp: formattedDate
    };

    setLogs([newEntry, ...logs]);

    // Reset custom input fields
    setCustomInput('');
    setSaveToDropdown(false);
    setEntryTimestamp(getCurrentLocalDateTime());
  };

  // Delete single log item
  const deleteLog = (id) => {
    setLogs(logs.filter(log => log.id !== id));
  };

  return (
    <div>
      {/* LOGGING FORM CARD */}
      <div className="panel active" style={{ marginBottom: '2rem' }}>
        <h2>Add New Entry</h2>
        <p className="lede">Record what you ate or a symptom you experienced.</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* Type Selector (Meal vs Symptom) */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              type="button" 
              className={`theme-toggle-btn entry-type-button ${entryType === 'meal' ? 'is-active' : ''}`} 
              style={{ position: 'static', flex: 1, background: entryType === 'meal' ? 'var(--ink)' : 'var(--card-soft)', color: entryType === 'meal' ? 'var(--card)' : 'var(--ink)' }}
              onClick={() => { setEntryType('meal'); }}
            >
              🥗 Log Meal
            </button>
            <button 
              type="button" 
              className={`theme-toggle-btn entry-type-button ${entryType === 'symptom' ? 'is-active' : ''}`} 
              style={{ position: 'static', flex: 1, background: entryType === 'symptom' ? 'var(--ink)' : 'var(--card-soft)', color: entryType === 'symptom' ? 'var(--card)' : 'var(--ink)' }}
              onClick={() => { setEntryType('symptom'); }}
            >
              ⚠️ Log Symptom
            </button>
          </div>

          {/* DATE & TIME INPUT */}
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.4rem' }}>
              📅 Date & Time of Log:
            </label>
            <input 
              type="datetime-local" 
              value={entryTimestamp}
              onChange={(e) => setEntryTimestamp(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius)', border: '2px solid var(--line)', background: 'var(--card-soft)', color: 'var(--ink)', fontFamily: 'var(--font-body)', fontSize: '16px' }}
            />
          </div>

          {/* Dropdown Selection */}
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.4rem' }}>
              Select {entryType === 'meal' ? 'Meal / Food' : 'Symptom'}:
            </label>
            {entryType === 'meal' ? (
              <select 
                value={selectedFoodIndex} 
                onChange={(e) => handleFoodSelectChange(Number(e.target.value))}
                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius)', border: '2px solid var(--line)', background: 'var(--card-soft)', color: 'var(--ink)', fontFamily: 'var(--font-body)', fontSize: '16px' }}
              >
                {foods.map((food, index) => (
                  <option key={index} value={index}>{food.name}</option>
                ))}
              </select>
            ) : (
              <select 
                value={selectedSymptom} 
                onChange={(e) => setSelectedSymptom(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius)', border: '2px solid var(--line)', background: 'var(--card-soft)', color: 'var(--ink)', fontFamily: 'var(--font-body)', fontSize: '16px' }}
              >
                {symptoms.map((sym, index) => (
                  <option key={index} value={sym}>{sym}</option>
                ))}
              </select>
            )}
          </div>

          {/* Custom Input for variations or new symptoms */}
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.4rem' }}>
              Or type a custom {entryType} (optional):
            </label>
            <input 
              type="text" 
              placeholder={entryType === 'meal' ? `e.g., Modified Oat Bowl` : `e.g., Mild dizziness`}
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius)', border: '2px solid var(--line)', background: 'var(--card-soft)', color: 'var(--ink)', fontFamily: 'var(--font-body)', fontSize: '16px' }}
            />
          </div>

          {/* Save to dropdown checkbox (Only shows if typing a custom item) */}
          {customInput.trim() !== '' && (
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '15px' }}>
              <input 
                type="checkbox" 
                checked={saveToDropdown} 
                onChange={(e) => setSaveToDropdown(e.target.checked)}
                style={{ width: '18px', height: '18px' }}
              />
              Save this to my permanent dropdown list for future use?
            </label>
          )}

          {/* MEAL INGREDIENTS / DESCRIPTION SECTION (Only shows when logging a meal) */}
          {entryType === 'meal' && (
            <div className="food-ingredients" style={{ background: 'var(--card-soft)', padding: '14px', borderRadius: 'var(--radius)', border: '1px dashed var(--line)' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.4rem' }}>
                📝 Ingredients & Recipe Notes (Auto-filled or editable):
              </label>
              <textarea 
                rows="3"
                value={mealIngredients}
                onChange={(e) => setMealIngredients(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius)', border: '2px solid var(--line)', background: 'var(--card)', color: 'var(--ink)', fontFamily: 'var(--font-body)', fontSize: '15px', resize: 'vertical' }}
              ></textarea>
            </div>
          )}

          {/* General Notes / Severity */}
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.4rem' }}>
              {entryType === 'meal' ? 'Additional Notes (Timing, Digestion, etc.):' : 'Severity / Details:'}
            </label>
            <input 
              type="text" 
              value={generalNotes}
              onChange={(e) => setGeneralNotes(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius)', border: '2px solid var(--line)', background: 'var(--card-soft)', color: 'var(--ink)', fontFamily: 'var(--font-body)', fontSize: '16px' }}
            />
          </div>

          <button 
            type="submit" 
            className="theme-toggle-btn" 
            style={{ position: 'static', padding: '12px', background: 'var(--ink)', color: 'var(--card)', fontWeight: 'bold', fontSize: '16px', marginTop: '10px', width: '100%' }}
          >
            Save Time-Stamped Entry ✓
          </button>
        </form>
      </div>

      {/* HISTORY FEED PANEL */}
      <div className="panel active">
        <div>
          <h2 style={{ margin: 0 }}>Recent Log History</h2>
          <p className="lede" style={{ margin: 0 }}>Review your past meals and symptoms to spot patterns.</p>
        </div>

        {logs.length === 0 ? (
          <p style={{ color: 'var(--ink-soft)', fontStyle: 'italic', marginTop: '1rem' }}>No entries logged yet. Add your first meal or symptom above!</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '1rem' }}>
            {logs.map((log) => (
              <div 
                key={log.id} 
                className="food-log-entry"
                style={{ 
                  background: log.type === 'meal' ? 'var(--card-soft)' : 'rgba(187, 68, 48, 0.1)', 
                  border: `2px solid ${log.type === 'meal' ? 'var(--line)' : 'var(--card)'}`, 
                  borderRadius: 'var(--radius)', 
                  padding: '14px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  boxShadow: '3px 3px 1px #00000020'
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--ink-soft)', marginBottom: '2px' }}>
                    {log.type === 'meal' ? '🥗 MEAL' : '⚠️ SYMPTOM'} • 🕒 {log.timestamp}
                  </div>
                  <div style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>
                    {log.name}
                  </div>
                  
                  {log.ingredients && (
                    <div style={{ fontSize: '14px', color: 'var(--ink)', background: 'var(--card)', padding: '6px 10px', borderRadius: '6px', margin: '6px 0', border: '1px solid var(--line)' }}>
                      <strong>Ingredients:</strong> {log.ingredients}
                    </div>
                  )}

                  {log.notes && (
                    <div style={{ fontSize: '15px', color: 'var(--ink-soft)', marginTop: '4px' }}>
                      {log.notes}
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => deleteLog(log.id)}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px', color: 'var(--ink-soft)', marginLeft: '10px', padding: '4px' }}
                  title="Delete this entry"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<FoodTrackerApp />, document.getElementById('tracker-root'));