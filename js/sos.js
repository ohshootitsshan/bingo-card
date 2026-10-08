// ==========================================
// TOOLKIT ITEMS DATABASE
// ==========================================
const toolkitItems = [
    // ==========================================
    // AUDIO & SOUNDS
    // ==========================================
    {
        id: "soundbath",
        categories: ["audio"],
        badge: "Audio & Sounds",
        title: "Soundbath Meditation",
        desc: "Put on headphones and let ambient tones or singing bowls soothe a racing mind.",
        linkText: "Listen on Headspace",
        linkUrl: "https://hdsp.co/share/69a710145e41966c0fc731ce",
        details: "Settle somewhere comfortable, choose a gentle volume, and let the sound be background rather than something you need to concentrate on.",
    },
    {
        id: "breathwork",
        categories: ["audio"],
        badge: "Audio & Sounds",
        title: "5 Minute Reenergise Breathwork",
        desc: "Reconnect with your energy through deep, nourishing breaths. This speedy breathwork is designed to lift your mood and help you reset, leaving you feeling refreshed and ready to embrace the rest of your day.",
        linkText: "Listen on Deliciously Ella",
        linkUrl: "https://www.deliciouslyella.com/wellness/meditation/5-minute-reenergise-breathwork",
        details: "Reconnect with your energy through deep, nourishing breaths. This speedy breathwork is designed to lift your mood and help you reset, leaving you feeling refreshed and ready to embrace the rest of your day.",
    },
    {
        id: "playlist",
        categories: ["audio", "calm"],
        badge: "Audio & Sounds",
        title: "Comfort Playlist",
        desc: "Put on your comfort playlist.",
        linkText: "Open Spotify playlist",
        linkUrl: "https://open.spotify.com/playlist/4ZnbdLJiAMVwxMs3R2XRH8?si=1f55c2dba90640be",
        details: "Listen to your comfort playlist.",
        embedUrl: "https://open.spotify.com/embed/playlist/4ZnbdLJiAMVwxMs3R2XRH8?utm_source=generator&si=4f1917aeb4f147ca",
        embedTitle: "Deep Breaths Playlist",
        embedType: "spotify"
    },
    {
        id: "sleepnoise",
        categories: ["audio"],
        badge: "Audio & Sounds",
        title: "Sleep Noise",
        desc: "Create a calming soundscape for better sleep.",
        linkText: "Listen on Headspace",
        linkUrl: "https://hdsp.co/share/69aa90a5f907407f30e01da4",
        details: "Settle somewhere comfortable, choose a gentle volume, and let the sound be background rather than something you need to concentrate on.",
    },
    {
        id: "affirmations",
        categories: ["audio"],
        badge: "Audio & Sounds",
        title: "Resilience Affirmations",
        desc: "Shift your mindset with this 5-minute affirmation track which will leave you feeling empowered and resilient.",
        linkText: "Listen on Deliciously Ella",
        linkUrl: "https://www.deliciouslyella.com/wellness/meditation/resilience-affirmations",
        details: "Shift your mindset with this 5-minute affirmation track which will leave you feeling empowered and resilient.",
    },
    // ==========================================
    // DBT SKILLS
    // ==========================================
    {
        id: "please",
        categories: ["DBT Skills"],
        badge: "DBT Skills",
        title: "PLEASE",
        desc: "When you're physically run down, emotions can feel bigger and harder to manage. PLEASE skills remind you to care for your body, creating a stable foundation for emotional",
        linkText: "PLEASE",
        linkUrl: "https://i.pinimg.com/736x/1c/c2/c9/1cc2c907c46c807a74f80ae3d9281598.jpg",
        details: "Take care of your body first.",
        imageUrl: "https://i.pinimg.com/736x/1c/c2/c9/1cc2c907c46c807a74f80ae3d9281598.jpg",
        imageAlt: "P.L.E.A.S.E. skills",
    },
    {
        id: "improve",
        categories: ["DBT Skills"],
        badge: "DBT Skills",
        title: "IMPROVE the Moment",
        desc: "When you're in distress, it can feel like you're stuck in the moment, unable to see a way forward.",
        linkText: "IMPROVE the Moment",
        linkUrl: "https://i.pinimg.com/1200x/af/77/b3/af77b36b902e3cb49721491788300c05.jpg",
        details: "IMPROVE helps you take small, intentional steps to manage discomfort and regain calm and control.",
        imageUrl: "https://i.pinimg.com/1200x/af/77/b3/af77b36b902e3cb49721491788300c05.jpg",
        imageAlt: "IMPROVE the Moment",
    },
    {
        id: "tipp",
        categories: ["DBT Skills"],
        badge: "DBT Skills",
        title: "TIPP",
        desc: "TIPP is for the moments when you feel too distressed to use other skills.",
        linkText: "TIPP",
        linkUrl: "https://i.pinimg.com/736x/92/6c/cc/926ccce9fa44771f60c5eea44474cd71.jpg",
        details: "They will bring your distress down just enough to be able to determine which skills to use next.",
        imageUrl: "https://i.pinimg.com/736x/92/6c/cc/926ccce9fa44771f60c5eea44474cd71.jpg",
        imageAlt: "T.I.P.P. Skills",
    },
    {
        id: "stop",
        categories: ["DBT Skills"],
        badge: "DBT Skills",
        title: "STOP",
        desc: "STOP helps you resist acting impulsively on your emotions, allowing you to avoid escalating an already difficult situation.",
        linkText: "STOP",
        linkUrl: "https://i.pinimg.com/736x/0c/2a/cb/0c2acbffd76198175415bf19d6220651.jpg",
        details: "They will bring your distress down just enough to be able to determine which skills to use next.",
        imageUrl: "https://i.pinimg.com/736x/0c/2a/cb/0c2acbffd76198175415bf19d6220651.jpg",
        imageAlt: "STOP Skills",
    },
    {
        id: "dear_man",
        categories: ["DBT Skills"],
        badge: "DBT Skills",
        title: "DEAR MAN",
        desc: "DEAR MAN helps you ask for what you want or say no while respecting both yourself and others.",
        linkText: "DEAR MAN",
        linkUrl: "https://i.pinimg.com/736x/8e/c5/e1/8ec5e1c70dd9bc3769b1db96fb0dbe0c.jpg",
        imageUrl: "https://i.pinimg.com/736x/8e/c5/e1/8ec5e1c70dd9bc3769b1db96fb0dbe0c.jpg",
        imageAlt: "DEAR MAN Skills",
    },
    {
        id: "accepts",
        categories: ["DBT Skills"],
        badge: "DBT Skills",
        title: "ACCEPTS",
        desc: "ACCEPTS skills help you tolerate distress and accept the situation as it is, rather than trying to change it.",
        linkText: "ACCEPTS",
        linkUrl: "https://i.pinimg.com/1200x/81/5d/a3/815da316fcfaf0fdc730951e14878c08.jpg",
        imageUrl: "https://i.pinimg.com/1200x/81/5d/a3/815da316fcfaf0fdc730951e14878c08.jpg",
        imageAlt: "ACCEPTS Skills",
    },
    {
        id: "wise_mind",
        categories: ["DBT Skills"],
        badge: "DBT Skills",
        title: "WISE MIND & Willingness",
        desc: "WISE MIND helps you balance your emotional and rational minds to make better decisions.",
        linkText: "WISE MIND",
        linkUrl: "https://i.pinimg.com/736x/dc/5b/89/dc5b8956caf323d153ea75de067b068c.jpg",
        details: "Willingness is being flexible. It's accepting the world as it is, and being willing to fully engage even when things are not the way you want them to be.",
        imageUrl: "https://i.pinimg.com/736x/dc/5b/89/dc5b8956caf323d153ea75de067b068c.jpg",
        imageAlt: "WISE MIND Skills",
        steps: ["Notice your resistance", "Radically accept it", "Turn your mind toward acceptance and willingness (you might have to do this several times)","Use half smile and willing hands","Participate in reality"]
    },
    // ==========================================
    // PHYSICAL & SENSORY
    // ==========================================
    {
        id: "tea",
        categories: ["physical"],
        badge: "Physical Refresh",
        title: "Make a Warm Cup of Tea",
        desc: "Focus on the ritual of boiling water, steeping tea bags, and wrapping hands around a warm mug.",
        linkText: "Brew time",
        linkUrl: "#",
        details: "Let making a warm drink be the whole task.",
        steps: ["Choose a tea.", "Notice one small part of the process: the sound of water, the scent, or the warmth of the cup.", "Take a seat and enjoy a few slow sips."]
    },
    {
        id: "objects",
        categories: ["physical"],
        badge: "Physical Objects",
        title: "Comfort Objects Reminder",
        desc: "Go grab some cozy items to help you feel grounded and safe.",
        linkText: "Grab cozy item",
        linkUrl: "#",
        details: "Choose a familiar object that feels soothing or grounding.",
        steps: ["Pink blankie", "Martin", "Dan hoodie","Fairy catalogue", "Green scarf", "Coral jersey", "Dad's jacket",]
    },
    {
        id: "water",
        categories: ["physical"],
        badge: "Physical Refresh",
        title: "Glass of Ice Water",
        desc: "Step away and get a cold glass of water. Focus completely on the temperature and sensation of swallowing.",
        linkText: "Done ✓",
        linkUrl: "#",
        details: "Take a brief sensory pause with a cold drink.",
        steps: ["Fill a glass with cold water and notice its temperature in your hands.", "Take one slow sip and notice the sensation as you swallow.", "Continue at a comfortable pace. You do not need to finish the glass." ]
    },
    {
        id: "chocolate",
        categories: ["physical"],
        badge: "Physical Refresh",
        title: "A Piece of Chocolate",
        desc: "Savor a small piece of dark or milk chocolate slowly without distractions.",
        linkText: "Treat time",
        linkUrl: "#",
        details: "Use one small bite as a grounding exercise. Skip this if chocolate is not right for you.",
        steps: ["Notice the color and shape before you take a bite.", "Let it rest in your mouth and notice the texture and flavor.", "Take a breath before deciding whether you want another bite."]
    },
    {
        id: "shower",
        categories: ["physical"],
        badge: "Physical Refresh",
        title: "Take a Warm Shower",
        desc: "Let warm water reset your nervous system and wash away physical tension.",
        linkText: "Step in",
        linkUrl: "#",
        details: "A short, comfortable shower can give you a change of temperature and surroundings.",
        steps: ["Set the water to a comfortable temperature.", "Notice the feeling of the water on your shoulders or hands.", "Stay only as long as feels helpful; a quick rinse counts."]
    },
    {
        id: "walk",
        categories: ["physical"],
        badge: "Physical Refresh",
        title: "Short Fresh Air Walk",
        desc: "Step outside for 5-10 minutes just to change your environment and stretch your legs.",
        linkText: "Let's go",
        linkUrl: "#",
        details: "Keep the goal small: a few minutes outside or by an open window is enough.",
        steps: ["Choose a comfortable route, even if it is just to the end of the street.", "Let your attention rest on one thing you can see, hear, or feel.", "Turn back whenever you are ready. This is not a workout."]
    },
    // ==========================================
    // VISUAL & TIPS
    // ==========================================
    {
        id: "overthinking_checklist",
        categories: ["visual"],
        badge: "Tips & Tricks",
        title: "Overthinking Checklist",
        desc: "Is something actually wrong, or do you just need to take care of yourself?",
        linkText: "View Checklist",
        linkUrl: "https://i.pinimg.com/1200x/1b/fe/c1/1bfec17835c917fdb4523b395b029515.jpg",
        details: "Is something actually wrong, or do you just need to take care of yourself?",
        imageUrl: "https://i.pinimg.com/1200x/1b/fe/c1/1bfec17835c917fdb4523b395b029515.jpg",
        imageAlt: "Overthinking checklist",
    },
    {
        id: "visualisation",
        categories: ["visual"],
        badge: "Tips & Tricks",
        title: "Pull out the thoughts visualisation",
        desc: "A visualisation to help you let go of racing thoughts.",
        linkText: "Pull out the thoughts",
        linkUrl: "https://za.pinterest.com/pin/558376053812661716/",
        details: "Settle somewhere comfortable, choose a gentle volume, and let the sound be background rather than something you need to concentrate on.",
        embedUrl: "https://assets.pinterest.com/ext/embed.html?id=558376053812661716",
        embedType: "pinterest"
    },
    {
        id: "feelings_wheel",
        categories: ["visual"],
        badge: "Tips & Tricks",
        title: "Feelings Wheel Reference",
        desc: "A visual reference to help pinpoint what emotion is present.",
        linkText: "View Feelings Wheel",
        linkUrl: "https://za.pinterest.com/pin/448741550400858137/",
        details: "Use this feelings wheel as a visual reference to help pinpoint what emotion is present.",
        imageUrl: "https://i.pinimg.com/1200x/4f/91/83/4f91838a04f73ccf356129670ca6e164.jpg",
        imageAlt: "Feelings Wheel Reference"
    },
    {
        id: "growth_franks",
        categories: ["visual", "advice"],
        badge: "Tips & Tricks",
        title: "The correct environment for growth",
        desc: "You were designed to grow",
        linkText: "Listen to Franks",
        linkUrl: "https://za.pinterest.com/pin/558376053820176133/",
        details: "You were designed to grow",
        embedUrl: "https://assets.pinterest.com/ext/embed.html?id=558376053820176133",
        embedType: "pinterest"
    },
    {
        id: "feelings_franks",
        categories: ["visual", "advice"],
        badge: "Tips & Tricks",
        title: "Feelings are not facts",
        desc: "My feelings make requests, not declarations",
        linkText: "Listen to Franks",
        linkUrl: "https://za.pinterest.com/pin/558376053820176136/",
        details: "My feelings make requests, not declarations",
        embedUrl: "https://assets.pinterest.com/ext/embed.html?id=558376053820176136",
        embedType: "pinterest"
    },
    // ==========================================
    // FOCUS FRANKS!
    // ==========================================
    {
        id: "focus_timer",
        categories: ["focus"],
        badge: "Focus Franks!",
        title: "Pomodoro / Timer Reset",
        desc: "Set a tiny 10-minute timer if you need to focus or tackle one micro-task.",
        linkText: "Set a timer",
        linkUrl: "https://tomato-timer.com",
        details: "Choose one small task and give yourself permission to stop when the timer ends.",
        steps: ["Name one task that can be started in under a minute.", "Set a 10-minute timer, or choose a shorter time if that feels better.", "Work on only that task until the timer ends, then take a break."]
    },
    // ==========================================
    // CALM & COZY
    // ==========================================
    {
        id: "game",
        categories: ["calm"],
        badge: "Just relax my friend",
        title: "Low-Stakes Video Game",
        desc: "Engage your hands and distract your brain with a cozy game.",
        linkText: "Play a game",
        linkUrl: "#",
        details: "Stardew, Terranil or Sims are all good!",
        steps: ["Choose a game that feels comfortable rather than demanding.", "Set a short timer to make stopping easier.", "Pause or stop whenever you have had enough."]
    },
    // ==========================================
    // NERVOUS SYSTEM REGULATION
    // ==========================================
    {
        id: "nervous_system_regulation_techniques",
        categories: ["NSR", "visual"],
        badge: "Nervous System Regulation",
        title: "Nervous System Regulation Techniques",
        desc: "Learn techniques to regulate your nervous system and manage stress.",
        linkText: "Regulate your nervous system",
        linkUrl: "https://za.pinterest.com/pin/558376053822987782/",
        embedUrl: "https://assets.pinterest.com/ext/embed.html?id=558376053822987782",
        embedType: "pinterest",
        steps: ["Armpit hug", "Butterfly taps", "The Octopus"]
    },
    {
        id: "movement_feelings_wheel",
        categories: ["NSR", "visual"],
        badge: "Movement Feelings Wheel",
        title: "Movement Feelings Wheel",
        desc: "Move to release your feelings and regulate your nervous system.",
        linkText: "Regulate your nervous system",
        linkUrl: "https://za.pinterest.com/pin/558376053821078848/",
        details: "Move to release your feelings and regulate your nervous system.",
        imageUrl: "https://i.pinimg.com/1200x/c4/a8/92/c4a892c9a4b87c3c33f1409451936575.jpg",
        imageAlt: "Movement Feelings Wheel",
    },
];

// ==========================================
// YES/NO DECISION TREE STRUCTURE
// ==========================================
const decisionTreeNodes = {
    start: {
        question: "Are you feeling funky?",
        yes: "is_funky",
        no: "thrive",
    },
    is_funky: {
        question: "Are you in distress?",
        yes: "is_distressed",
        no: "recommend_please"
    },
    is_distressed: {
        question: "Is it extreme distress or crisis?",
        yes: "is_extreme",
        no: "recommend_improve"
    },
    is_extreme: {
        question: "Are you safe right now?",
        yes: "is_safe",
        no: "recommend_stop"
    },
    is_safe: {
        question: "Do you feel overwhelmed?",
        yes: "recommend_tipp",
        no: "is_whelmed"
    },
    is_whelmed: {
        question: "Can this problem be solved?",
        yes: "recommend_dear_man",
        no: "is_unsolveable"
    },
    is_unsolveable: {
        question: "Could distraction help?",
        yes: "recommend_accepts",
        no: "is_undistractable"
    },
    is_undistractable: {
        question: "Do you want to deal with what you're feeling?",
        yes: "recommend_wise_mind",
        no: "is_avoidant"
    },
    is_avoidant: {
        question: "Do you want to continue feeling bad?",
        yes: "recommend_work_with_me",
        no: "recommend_pick_1"
    },
    thrive: {
        isTerminal: true,
        title: "Thrive, Baby! ✨",
        desc: "You're in a good baseline spot right now! Feel free to browse your kit or check out the feelings wheel below.",
        linkText: "Browse Kit",
        linkUrl: "#browse"
    },
    recommend_please: {
        isTerminal: true,
        title: "P.L.E.A.S.E.",
        desc: "When you're physically run down, emotions can feel bigger and harder to manage. PLEASE skills remind you to care for your body, creating a stable foundation for emotional",
        linkText: "P.L.E.A.S.E.",
        linkUrl: "#",
        itemId: "please"
    },
    recommend_improve: {
        isTerminal: true,
        title: "Improve the moment",
        desc: "When you're in distress, it can feel like you're stuck in the moment, unable to see a way forward. IMPROVE helps you take small, intentional steps to manage discomfort and regain calm and control.",
        linkText: "IMPROVE the Moment",
        linkUrl: "#",
        itemId: "improve"
    },
    recommend_tipp: {
        isTerminal: true,
        title: "T.I.P.P.",
        desc: "TIPP is for the moments when you feel too distressed to use other skills. They will bring your distress down just enough to be able to determine which skills to use next.",
        linkText: "T.I.P.P. the Moment",
        linkUrl: "#",
        itemId: "tipp"
    },
    recommend_stop: {
        isTerminal: true,
        title: "STOP",
        desc: "STOP <br> Use your crisis plan <br> Get care <br> If needed call emergency services or a crisis line.",
        linkText: "STOP",
        linkUrl: "#",
        itemId: "stop"
    },
    recommend_dear_man: {
        isTerminal: true,
        title: "DEAR MAN",
        desc: "DEAR MAN helps you ask for what you want or say no while respecting both yourself and others.",
        linkText: "DEAR MAN",
        linkUrl: "#",
        itemId: "dear_man"
    },
    recommend_accepts: {
        isTerminal: true,
        title: "ACCEPTS",
        desc: "ACCEPTS skills help you tolerate distress and accept the situation as it is, rather than trying to change it.",
        linkText: "ACCEPTS",
        linkUrl: "#",
        itemId: "accepts"
    },
    recommend_wise_mind: {
        isTerminal: true,
        title: "WISE MIND",
        desc: "WISE MIND helps you balance your emotional and rational minds to make better decisions.",
        linkText: "WISE MIND",
        linkUrl: "#",
        itemId: "wise_mind"
    },
    recommend_work_with_me: {
        isTerminal: true,
        title: "Work With Me",
        desc: "Okay, take a moment. This feeling probably won't change until you change how you work with it. <br> When you're ready, try one of the skills below.",
        linkText: "Work With Me",
        linkText: "Browse Kit",
        linkUrl: "#browse"
    },
    recommend_pick_1: {
        isTerminal: true,
        title: "Pick one part of one skill",
        desc: "Or start again from the beginning.",
        linkText: "Browse Kit",
        linkUrl: "#browse"
    }
};
{/* ========================================== */}
{/* 🧠 COMPACT MOOD CHECK-IN WIDGET (4x4 GRID) */}
{/* ========================================== */}
function MoodTracker() {
  const [latestMoodEntry, setLatestMoodEntry] = React.useState(() => {
    const saved = localStorage.getItem('sosMoodTrackerEntry') || localStorage.getItem('latest_mood');
    if (!saved) return null;
    if (!localStorage.getItem('sosMoodTrackerEntry')) {
      localStorage.setItem('sosMoodTrackerEntry', saved);
    }
    return JSON.parse(saved);
  });

  const [moodNote, setMoodNote] = React.useState('');

  // Updated to accept summary directly or build it from energy/pleasantness
  const logMood = (energyDetail, pleasantDetail) => {
    const summaryText = `${energyDetail} & ${pleasantDetail}`;
    
    const moodEntry = {
      id: Date.now(),
      summary: summaryText,
      note: moodNote.trim(),
      timestamp: new Date().toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })
    };
    // Save to general health logs so it syncs with your weekly email report!
    const existingLogs = JSON.parse(localStorage.getItem('health_logs') || '[]');
    localStorage.setItem('health_logs', JSON.stringify([
      { id: moodEntry.id, type: 'symptom', name: `🧠 Mood: ${moodEntry.summary}`, notes: moodEntry.note, timestamp: moodEntry.timestamp },
      ...existingLogs
    ]));

    localStorage.setItem('sosMoodTrackerEntry', JSON.stringify(moodEntry));
    setLatestMoodEntry(moodEntry);
    setMoodNote('');
  };

  return (
      <div className="sos-mood-tracker" style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--heading-color)', marginBottom: '0.2rem' }}>How are you feeling</h3>

        {latestMoodEntry ? (
          <div style={{ background: 'var(--card)', padding: '12px', borderRadius: '10px', textAlign: 'center', border: '1px solid var(--free-border)' }}>
            <div style={{ fontSize: '12px', color: 'var(--heading-color)' }}>Latest Check-in ({latestMoodEntry.timestamp}):</div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--accent-color)', margin: '4px 0' }}>
              ✨ {latestMoodEntry.summary}
            </div>
          {latestMoodEntry.note && <div style={{ fontSize: '13px', fontStyle: 'italic' }}>"{latestMoodEntry.note}"</div>}
            <button 
            onClick={() => setLatestMoodEntry(null)}
            style={{ background: 'none', border: 'none', color: 'var(--accent-color)', fontSize: '12px', cursor: 'pointer', textDecoration: 'underline', marginTop: '8px' }}
            >
            Log a new mood
            </button>
          </div>
        ) : (
          <div>
            {/* Top Axis Label: High Energy */}
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-muted)', marginBottom: '4px' }}>
              ▲ High Energy
            </div>

            {/* Grid Container with Left/Right Axis Labels */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
              
              {/* Left Axis Label: Unpleasant */}
              <div style={{ fontSize: '10px', fontWeight: 'bold', color: 'var(--text-muted)', writingMode: 'vertical-rl', transform: 'rotate(180deg)', textAlign: 'center' }}>
                Unpleasant
              </div>

              {/* 4x4 Interactive Grid (16 smaller squares) */}
              <div style={{ 
                position: 'relative', 
                width: '260px', 
                height: '260px', 
                background: 'var(--panel-bg)', 
                border: '2px solid var(--card-border)', 
                borderRadius: '12px', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                gridTemplateRows: 'repeat(4, 1fr)', 
                overflow: 'hidden',
                boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.05)'
              }}>
                {/* Generating a 4x4 grid (16 cells) programmatically */}
                {Array.from({ length: 16 }).map((_, index) => {
                  const row = Math.floor(index / 4); // 0 (top) to 3 (bottom)
                  const col = index % 4;             // 0 (left) to 3 (right)

                  // Determine energy and pleasantness based on position
                  const energyDetail = row === 0 ? 'Very High Energy' : row === 1 ? 'Slightly High Energy' : row === 2 ? 'Slightly Low Energy' : 'Very Low Energy';
                  
                  const pleasantDetail = col === 3 ? 'Very Pleasant' : col === 2 ? 'Slightly Pleasant' : col === 1 ? 'Slightly Unpleasant' : 'Very Unpleasant';
                  return (
                    <div 
                      key={index}
                      onClick={() => logMood(`${energyDetail} & ${pleasantDetail}`)}
                      style={{ 
                        borderRight: col < 3 ? '1px dashed var(--card-border)' : 'none',
                        borderBottom: row < 3 ? '1px dashed var(--card-border)' : 'none',
                        cursor: 'pointer', 
                        transition: 'background 0.2s' 
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.08)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      title={`${energyDetail}, ${pleasantDetail}`}
                    />
                  );
                })}
              </div>

              {/* Right Axis Label: Pleasant */}
              <div style={{ fontSize: '10px', fontWeight: 'bold', color: 'var(--text-muted)', writingMode: 'vertical-rl', textAlign: 'center' }}>
                Pleasant
              </div>

            </div>

            {/* Bottom Axis Label: Low Energy */}
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-muted)', marginBottom: '12px' }}>
              ▼ Low Energy
            </div>

          {/* Optional Quick Note Input */}
          {/* <input
            type="text"
            placeholder="Optional note (e.g., after morning coffee)"
            value={moodNote}
            onChange={(e) => setMoodNote(e.target.value)}
            style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--free-border)', background: 'var(--card)', color: 'var(--ink)', fontSize: '13px', marginBottom: '10px' }}
          /> */}

        </div>
      )} 
    </div>
  );
}


function SOSToolkitApp() {
    // 🧭 TAB STATE: Tracks whether 'toolkit' or 'dopa' is currently active
    const [activeTab, setActiveTab] = React.useState('toolkit');

    const [currentNodeKey, setCurrentNodeKey] = React.useState('start');
    const [filterCategory, setFilterCategory] = React.useState('audio');
    const [selectedItem, setSelectedItem] = React.useState(null);
    const previousFocusRef = React.useRef(null);

    const currentNode = decisionTreeNodes[currentNodeKey];
    const pinterestUnavailableLocally = selectedItem?.embedType === 'pinterest' && window.location.protocol === 'file:';

    const handleAnswer = (answer) => {
        const nextKey = currentNode[answer];
        if (nextKey) {
            setCurrentNodeKey(nextKey);
        }
    };

    const resetTree = () => {
        setCurrentNodeKey('start');
    };

    const openItem = (item) => {
        previousFocusRef.current = document.activeElement;
        setSelectedItem(item);
    };

    React.useEffect(() => {
        if (!selectedItem) return undefined;
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setSelectedItem(null);
        };
        document.addEventListener('keydown', closeOnEscape);
        document.querySelector('.item-detail-close')?.focus();
        return () => {
            document.removeEventListener('keydown', closeOnEscape);
            previousFocusRef.current?.focus();
        };
    }, [selectedItem]);

    const displayedItems = filterCategory === 'all' 
        ? toolkitItems 
        : toolkitItems.filter(item => item.categories.includes(filterCategory));

    return (
        <div className={`sos-container${activeTab === 'dopa' ? ' has-dopa-menu' : ''}`}>
            {/* Header */}
            <div className="sos-header">
                <h1>SOS Toolkit</h1>
                <p>Gentle tools, sounds, and reminders when brain power is running low.</p>
            </div>

            {/* ========================================== */}
            {/* 🧭 TAB NAVIGATION BAR (Add future tabs here) */}
            {/* ========================================== */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
                <button 
                    className={`action-btn ${activeTab === 'toolkit' ? 'is-active' : ''}`}
                    style={{ 
                        background: activeTab === 'toolkit' ? 'var(--ink)' : 'var(--btn-bg)', 
                        color: activeTab === 'toolkit' ? 'var(--card-bg)' : 'var(--text-color)',
                        flex: 1, maxWidth: '220px', cursor: 'pointer'
                    }}
                    onClick={() => setActiveTab('toolkit')}
                >
                    🛠️ SOS Toolkit
                </button>

                <button 
                    className={`action-btn ${activeTab === 'dopa' ? 'is-active' : ''}`}
                    style={{ 
                        background: activeTab === 'dopa' ? 'var(--ink)' : 'var(--btn-bg)', 
                        color: activeTab === 'dopa' ? 'var(--card-bg)' : 'var(--text-color)',
                        flex: 1, maxWidth: '220px', cursor: 'pointer'
                    }}
                    onClick={() => setActiveTab('dopa')}
                >
                    ✨ Dopamine Menu
                </button>
            </div>

            {/* ========================================== */}
            {/* 🧭 TAB 1: SOS TOOLKIT CONTENT */}
            {/* ========================================== */}
            {activeTab === 'toolkit' && (
                <div>
                    <MoodTracker />

                    {/* Interactive Decision Tree Card */}
                    <div className="sos-card tree-container" id="decision-tree">
                        <h2>Zero-Energy Decision Helper</h2>

                        {!currentNode.isTerminal ? (
                            <div>
                                <p className="step-instruction">{currentNode.question}</p>
                                <div className="options-grid">
                                    <button className="choice-btn" onClick={() => handleAnswer('yes')}>Yes 👍</button>
                                    <button className="choice-btn" onClick={() => handleAnswer('no')}>No 👎</button>
                                </div>
                                {currentNodeKey !== 'start' && (
                                    <div className="btn-group" style={{ marginTop: '1rem' }}>
                                        <button className="secondary-btn" onClick={resetTree}>← Start Over</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="recommendation-box">
                                <h3>{currentNode.title}</h3>
                                <p>{currentNode.desc}</p>
                                <div className="btn-group">
                                    {currentNode.itemId ? (
                                        <button className="primary-link-btn" onClick={() => openItem(toolkitItems.find(item => item.id === currentNode.itemId))}>{currentNode.linkText}</button>
                                    ) : currentNode.linkUrl !== '#' && !currentNode.linkUrl.startsWith('#') ? (
                                        <a href={currentNode.linkUrl} target="_blank" rel="noopener noreferrer" className="primary-link-btn">{currentNode.linkText}</a>
                                    ) : (
                                        <button className="primary-link-btn" onClick={resetTree} style={{ border: 'none', cursor: 'pointer' }}>{currentNode.linkText}</button>
                                    )}
                                    <button className="secondary-btn" onClick={resetTree}>Start Over</button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Browse All Items Card */}
                    <div className="sos-card browse-section" id="browse">
                        <h2>Browse Entire Kit</h2>
                        <div className="category-filter">
                            <button className={`filter-btn ${filterCategory === 'audio' ? 'active' : ''}`} onClick={() => setFilterCategory('audio')}>Audio & Sounds</button>
                            <button className={`filter-btn ${filterCategory === 'focus' ? 'active' : ''}`} onClick={() => setFilterCategory('focus')}>Focus Franks!</button>
                            <button className={`filter-btn ${filterCategory === 'calm' ? 'active' : ''}`} onClick={() => setFilterCategory('calm')}>Just relax my friend</button>
                            <button className={`filter-btn ${filterCategory === 'NSR' ? 'active' : ''}`} onClick={() => setFilterCategory('NSR')}>Nervous System Regulation</button>
                            <button className={`filter-btn ${filterCategory === 'physical' ? 'active' : ''}`} onClick={() => setFilterCategory('physical')}>Physical & Sensory</button>
                            <button className={`filter-btn ${filterCategory === 'visual' ? 'active' : ''}`} onClick={() => setFilterCategory('visual')}>Tips & Tricks</button>
                            <button className={`filter-btn ${filterCategory === 'advice' ? 'active' : ''}`} onClick={() => setFilterCategory('advice')}>Advice</button>
                            <button className={`filter-btn ${filterCategory === 'DBT Skills' ? 'active' : ''}`} onClick={() => setFilterCategory('DBT Skills')}>DBT Skills</button>
                        </div>
                        <div className="toolkit-grid">
                            {displayedItems.map(item => (
                                <div className="toolkit-item" key={item.id}>
                                    <div>
                                        <div className="toolkit-badge">{item.badge}</div>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div>
                                        <button type="button" className="toolkit-open-btn" onClick={() => openItem(item)}>
                                            {item.linkText} &rarr;
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            )}

            {/* ========================================== */}
            {/* 🧭 TAB 2: DOPAMINE MENU CONTENT */}
            {/* ========================================== */}
            {activeTab === 'dopa' && (
                <div className="dopa-grid">
                    {/* LEFT COLUMN */}
                    <div className="dopa-column">
                        <div className="dopa-card">
                            <h2>Appetisers:</h2>
                            <div className="dopa-subtitle">Quick dopamine burst without sucking me in</div>
                            <ul className="dopa-list">
                                <li>do a riddle</li>
                                <li>5 mins on pinterest</li>
                                <li>5 mins timer clean 1 thing</li>
                                <li>stretches</li>
                                <li>5 mins legs up the wall</li>
                                <li>10 min journal</li>
                                <li>make bed</li>
                                <li>10 jumping jacks</li>
                                <li>have a little groove</li>
                            </ul>
                        </div>

                        <div className="dopa-card">
                            <h2>Mains:</h2>
                            <div className="dopa-subtitle">Activities that excite me and make me feel alive</div>
                            <ul className="dopa-list">
                                <li>go for a walk</li>
                                <li>do some yoga</li>
                                <li>play ukulele</li>
                                <li>play harmonica</li>
                                <li>read</li>
                                <li>write</li>
                                <li>draw</li>
                                <li>crochet dans jersey</li>
                                <li>knit scarf</li>
                                <li>knit hand warmers</li>
                                <li>do nails</li>
                                <li>mend some clothes</li>
                                <li>make a beaded keychain/bag charm</li>
                                <li>collage</li>
                                <li>meditation</li>
                                <li>do a crossword/sudoku</li>
                            </ul>
                        </div>

                        <div className="dopa-card">
                            <h2>Substitutions:</h2>
                            <div className="dopa-subtitle">Things I can substitute for other things that’ll give me the same kick (hopefully)</div>
                            <ul className="dopa-list">
                                <li>Scrolling - reading, read emails, listen to a podcast, message/call my people, go outside (no headphones)</li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="dopa-column">
                        <div className="dopa-card">
                            <h2>Side dishes:</h2>
                            <div className="dopa-subtitle">Things to add to other activities to make them more engaging</div>
                            <ul className="dopa-list">
                                <li>set a timer</li>
                                <li>light a candle</li>
                                <li>put on some perfume</li>
                                <li>put a nice scarf on</li>
                                <li>a cup of tea</li>
                                <li>put on some hand cream</li>
                                <li>play some music</li>
                                <li>listen to a podcast</li>
                                <li>do a face mask</li>
                                <li>have a little snack</li>
                                <li>play a youtube video in the background</li>
                                <li>put on some nail cream</li>
                                <li>watch series</li>
                            </ul>
                        </div>

                        <div className="dopa-card">
                            <h2>Dessert:</h2>
                            <div className="dopa-subtitle">Things that I could overdo it on</div>
                            <ul className="dopa-list">
                                <li>scroll on instagram</li>
                                <li>online window shopping</li>
                                <li>video games</li>
                            </ul>
                        </div>

                        <div className="dopa-card">
                            <h2>Specials:</h2>
                            <div className="dopa-subtitle">Things I can only do once in a while</div>
                            <ul className="dopa-list">
                                <li>take a fancy bath (bubble bath, candle, the works)</li>
                                <li>solo cafe date (bring a book and order something nice)</li>
                                <li>weekend creative block</li>
                                <li>outdoor adventure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for item details */}
            {selectedItem && (
                <div className="modal-backdrop" onMouseDown={(event) => {
                    if (event.target === event.currentTarget) setSelectedItem(null);
                }}>
                    <section className="modal-box item-detail" role="dialog" aria-modal="true" aria-labelledby="item-detail-title">
                        <button type="button" className="item-detail-close" onClick={() => setSelectedItem(null)} aria-label="Close details">&times;</button>
                        <div className="toolkit-badge">{selectedItem.badge}</div>
                        <h2 id="item-detail-title">{selectedItem.title}</h2>
                        <p className="item-detail-description">{selectedItem.details || selectedItem.desc}</p>
                        {selectedItem.steps && (
                            <ol className="item-detail-steps">
                                {selectedItem.steps.map((step, index) => <li key={index}>{step}</li>)}
                            </ol>
                        )}
                        {selectedItem.imageUrl && (
                            <div className="item-detail-image-wrap">
                                <img src={selectedItem.imageUrl} alt={selectedItem.imageAlt || selectedItem.title} />
                            </div>
                        )}
                        {selectedItem.embedUrl && !pinterestUnavailableLocally && (
                            <div className={`item-detail-embed ${selectedItem.embedType || ''}`}>
                                <iframe
                                    src={selectedItem.embedUrl}
                                    title={selectedItem.embedTitle || selectedItem.title}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        )}
                        {pinterestUnavailableLocally && (
                            <div className="item-detail-fallback">
                                <p>Pinterest embeds are unavailable when this page is opened directly from a file.</p>
                                <a className="primary-link-btn" href={selectedItem.linkUrl} target="_blank" rel="noopener noreferrer">
                                    Open on Pinterest
                                </a>
                            </div>
                        )}
                        {(selectedItem.embedFallbackText || selectedItem.embedFallbackImageUrl) && (
                            <div className="item-detail-fallback">
                                <p className="item-detail-fallback-label">If the embed is unavailable</p>
                                {selectedItem.embedFallbackText && <p>{selectedItem.embedFallbackText}</p>}
                                {selectedItem.embedFallbackImageUrl && (
                                    <img
                                        src={selectedItem.embedFallbackImageUrl}
                                        alt={selectedItem.embedFallbackImageAlt || `Visual fallback for ${selectedItem.title}`}
                                    />
                                )}
                            </div>
                        )}
                        <div className="item-detail-actions">
                            {selectedItem.linkUrl && selectedItem.linkUrl.startsWith('http') && (
                                <a className="primary-link-btn" href={selectedItem.linkUrl} target="_blank" rel="noopener noreferrer">
                                    {selectedItem.imageUrl ? 'Open link' : selectedItem.linkText}
                                </a>
                            )}
                            <button type="button" className="secondary-btn" onClick={() => setSelectedItem(null)}>Close</button>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}

ReactDOM.render(<SOSToolkitApp />, document.getElementById('sos-root'));