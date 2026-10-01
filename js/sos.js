// ==========================================
// TOOLKIT ITEMS DATABASE
// ==========================================
const toolkitItems = [
    {
        id: "water",
        category: "physical",
        badge: "Physical Refresh",
        title: "Glass of Ice Water",
        desc: "Step away and get a cold glass of water. Focus completely on the temperature and sensation of swallowing.",
        linkText: "Done ✓",
        linkUrl: "#"
    },
    {
        id: "chocolate",
        category: "physical",
        badge: "Physical Refresh",
        title: "A Piece of Chocolate",
        desc: "Savor a small piece of dark or milk chocolate slowly without distractions.",
        linkText: "Treat time",
        linkUrl: "#"
    },
    {
        id: "shower",
        category: "physical",
        badge: "Physical Refresh",
        title: "Take a Warm Shower",
        desc: "Let warm water reset your nervous system and wash away physical tension.",
        linkText: "Step in",
        linkUrl: "#"
    },
    {
        id: "walk",
        category: "physical",
        badge: "Physical Refresh",
        title: "Short Fresh Air Walk",
        desc: "Step outside for 5-10 minutes just to change your environment and stretch your legs.",
        linkText: "Let's go",
        linkUrl: "#"
    },
    {
        id: "soundbath",
        category: "audio",
        badge: "Audio & Sounds",
        title: "Soundbath Meditation",
        desc: "Put on headphones and let ambient tones or singing bowls soothe a racing mind.",
        linkText: "Listen on YouTube",
        linkUrl: "https://www.youtube.com/results?search_query=soundbath+meditation"
    },
    {
        id: "breathwork",
        category: "audio",
        badge: "Audio & Sounds",
        title: "Box Breathing Exercise",
        desc: "Follow a guided 4-4-4-4 breathing pace to lower your heart rate instantly.",
        linkText: "Try breathing guide",
        linkUrl: "https://www.youtube.com/results?search_query=box+breathing+guided"
    },
    {
        id: "album",
        category: "audio",
        badge: "Audio & Sounds",
        title: "Comfort Album / Lo-Fi",
        desc: "Put on your safe, familiar comfort album or instrumental background music.",
        linkText: "Open Spotify / YouTube",
        linkUrl: "https://open.spotify.com"
    },
    {
        id: "tea",
        category: "mind",
        badge: "Calm & Focus",
        title: "Make a Warm Cup of Tea",
        desc: "Focus on the ritual of boiling water, steeping tea bags, and wrapping hands around a warm mug.",
        linkText: "Brew time",
        linkUrl: "#"
    },
    {
        id: "game",
        category: "mind",
        badge: "Calm & Focus",
        title: "Low-Stakes Video Game",
        desc: "Engage your hands and distract your brain with 15 minutes of a cozy game.",
        linkText: "Play",
        linkUrl: "#"
    },
    {
        id: "objects",
        category: "physical",
        badge: "Physical Objects",
        title: "Comfort Objects Reminder",
        desc: "Wrap yourself in a weighted blanket, put on comfy socks, or hold a favorite fidget toy.",
        linkText: "Grab cozy item",
        linkUrl: "#"
    },
    {
        id: "focus_timer",
        category: "mind",
        badge: "Calm & Focus",
        title: "Pomodoro / Timer Reset",
        desc: "Set a tiny 10-minute timer if you need to focus or tackle one micro-task.",
        linkText: "Set a timer",
        linkUrl: "https://tomato-timer.com"
    },
    {
        id: "overthinking_checklist",
        category: "mind",
        badge: "Calm & Focus",
        title: "Overthinking Checklist",
        desc: "Is something actually wrong, or do you just need to take care of yourself?",
        linkText: "View Checklist",
        linkUrl: "https://i.pinimg.com/1200x/1b/fe/c1/1bfec17835c917fdb4523b395b029515.jpg",
    }
];

// ==========================================
// YES/NO DECISION TREE STRUCTURE
// ==========================================
const decisionTreeNodes = {
    start: {
        question: "Are you feeling funky?",
        yes: "is_thirsty",
        no: "thrive"
    },
    is_thirsty: {
        question: "Are you thirsty or hungry right now?",
        yes: "recommend_water_food",
        no: "is_overwhelmed"
    },
    is_overwhelmed: {
        question: "Does your brain feel overwhelmed or racing?",
        yes: "recommend_calm",
        no: "is_stuck"
    },
    is_stuck: {
        question: "Do you want to move your body or change your scene?",
        yes: "recommend_movement",
        no: "recommend_cozy"
    },
    thrive: {
        isTerminal: true,
        title: "Thrive, Baby! ✨",
        desc: "You're in a good baseline spot right now! Feel free to browse your kit or check out the feelings wheel below.",
        linkText: "Browse Kit",
        linkUrl: "#browse"
    },
    recommend_water_food: {
        isTerminal: true,
        title: "Glass of Ice Water & Snack",
        desc: "Let's take care of the physical basics first. Grab a cold glass of water and a piece of chocolate or a quick snack.",
        linkText: "Glass of Water",
        linkUrl: "#"
    },
    recommend_calm: {
        isTerminal: true,
        title: "Soundbath or Box Breathing",
        desc: "Your nervous system needs a gentle pause. Put on headphones and try 5 minutes of soundbaths or breathing exercises.",
        linkText: "Try Breathing Guide",
        linkUrl: "https://www.youtube.com/results?search_query=box+breathing+guided"
    },
    recommend_movement: {
        isTerminal: true,
        title: "Short Fresh Air Walk or Shower",
        desc: "A quick change in temperature or environment will reset your physical energy.",
        linkText: "View Walk Item",
        linkUrl: "#"
    },
    recommend_cozy: {
        isTerminal: true,
        title: "Tea & Comfort Media",
        desc: "Wrap up in cozy items, put on a comfort album, and brew a warm cup of tea.",
        linkText: "Grab Cozy Item",
        linkUrl: "#"
    }
};

function SOSToolkitApp() {
    const [currentNodeKey, setCurrentNodeKey] = React.useState('start');
    const [filterCategory, setFilterCategory] = React.useState('all');

    const currentNode = decisionTreeNodes[currentNodeKey];

    const handleAnswer = (answer) => {
        const nextKey = currentNode[answer];
        if (nextKey) {
            setCurrentNodeKey(nextKey);
        }
    };

    const resetTree = () => {
        setCurrentNodeKey('start');
    };

    const displayedItems = filterCategory === 'all' 
        ? toolkitItems 
        : toolkitItems.filter(item => item.category === filterCategory);

    return (
        <div className="sos-container">
            {/* Header */}
            <div className="sos-header">
                <h1>SOS Toolkit</h1>
                <p>Gentle tools, sounds, and reminders when brain power is running low.</p>
            </div>

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
                        <span className="toolkit-badge" style={{ background: 'var(--heading-color)', color: 'var(--card-bg)', padding: '3px 8px', borderRadius: '4px' }}>Recommended for you</span>
                        <h3>{currentNode.title}</h3>
                        <p>{currentNode.desc}</p>
                        <div className="btn-group">
                            {currentNode.linkUrl !== '#' && !currentNode.linkUrl.startsWith('#') ? (
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
                    <button className={`filter-btn ${filterCategory === 'all' ? 'active' : ''}`} onClick={() => setFilterCategory('all')}>All Items</button>
                    <button className={`filter-btn ${filterCategory === 'audio' ? 'active' : ''}`} onClick={() => setFilterCategory('audio')}>Audio & Sounds</button>
                    <button className={`filter-btn ${filterCategory === 'mind' ? 'active' : ''}`} onClick={() => setFilterCategory('mind')}>Calm & Focus</button>
                    <button className={`filter-btn ${filterCategory === 'physical' ? 'active' : ''}`} onClick={() => setFilterCategory('physical')}>Physical & Sensory</button>
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
                                <a href={item.linkUrl} target={item.linkUrl.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                                    {item.linkText} &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Feelings Wheel Image Section (At the bottom) */}
            <div className="sos-card wheel-image-section" id="feelings-wheel">
                <h2>Feelings Wheel Reference</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                    A visual reference to help pinpoint what emotion is present.
                </p>
                <div className="wheel-image-container">
                    {/** 
                      TO ADD YOUR IMAGE: 
                      Save your feelings wheel image into your project's 'img/' folder 
                      (e.g., img/feelings-wheel.png) and update the src below!
                    */}
                    <img src="img/feelings-wheel.jpg" alt="Feelings Wheel Reference"/>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<SOSToolkitApp />, document.getElementById('sos-root'));