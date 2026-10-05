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
        linkUrl: "#",
        details: "Take a brief sensory pause with a cold drink.",
        steps: ["Fill a glass with cold water and notice its temperature in your hands.", "Take one slow sip and notice the sensation as you swallow.", "Continue at a comfortable pace. You do not need to finish the glass." ]
    },
    {
        id: "chocolate",
        category: "physical",
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
        category: "physical",
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
        category: "physical",
        badge: "Physical Refresh",
        title: "Short Fresh Air Walk",
        desc: "Step outside for 5-10 minutes just to change your environment and stretch your legs.",
        linkText: "Let's go",
        linkUrl: "#",
        details: "Keep the goal small: a few minutes outside or by an open window is enough.",
        steps: ["Choose a comfortable route, even if it is just to the end of the street.", "Let your attention rest on one thing you can see, hear, or feel.", "Turn back whenever you are ready. This is not a workout."]
    },
    {
        id: "soundbath",
        category: "audio",
        badge: "Audio & Sounds",
        title: "Soundbath Meditation",
        desc: "Put on headphones and let ambient tones or singing bowls soothe a racing mind.",
        linkText: "Listen on Headspace",
        linkUrl: "https://hdsp.co/share/69a710145e41966c0fc731ce",
        details: "Settle somewhere comfortable, choose a gentle volume, and let the sound be background rather than something you need to concentrate on.",
        imageUrl: "https://braveparenting.net/wp-content/uploads/2025/01/headspace-app-logo.png"
    },
    {
        id: "breathwork",
        category: "audio",
        badge: "Audio & Sounds",
        title: "Box Breathing Exercise",
        desc: "Follow a guided 4-4-4-4 breathing pace to lower your heart rate instantly.",
        linkText: "Try breathing guide",
        linkUrl: "https://www.youtube.com/watch?v=buqs05FDqAA",
        details: "Try a gentle four-part rhythm. Keep each count comfortable, breathe normally if you feel light-headed, and stop whenever you want.",
        steps: ["Breathe in gently for a count of four.", "Hold softly for four, without straining.", "Breathe out for four.", "Pause for four, then repeat for a few rounds."],
        embedUrl: "https://www.youtube-nocookie.com/embed/buqs05FDqAA",
        embedTitle: "Guided Box Breathing: 4-4-4-4",
        embedType: "youtube"
    },
    {
        id: "playlist",
        category: "audio",
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
        id: "tea",
        category: "mind",
        badge: "Calm & Focus",
        title: "Make a Warm Cup of Tea",
        desc: "Focus on the ritual of boiling water, steeping tea bags, and wrapping hands around a warm mug.",
        linkText: "Brew time",
        linkUrl: "#",
        details: "Let making a warm drink be the whole task. Choose any drink that works for you.",
        steps: ["Choose a tea or another warm drink.", "Notice one small part of the process: the sound of water, the scent, or the warmth of the cup.", "Take a seat and enjoy a few slow sips."]
    },
    {
        id: "game",
        category: "mind",
        badge: "Calm & Focus",
        title: "Low-Stakes Video Game",
        desc: "Engage your hands and distract your brain with 15 minutes of a cozy game.",
        linkText: "Play",
        linkUrl: "#",
        details: "Pick something familiar and easy to pause. There is no goal to reach or score to beat.",
        steps: ["Choose a game that feels comfortable rather than demanding.", "Set a short timer only if that makes stopping easier.", "Pause or stop whenever you have had enough."]
    },
    {
        id: "objects",
        category: "physical",
        badge: "Physical Objects",
        title: "Comfort Objects Reminder",
        desc: "Wrap yourself in a weighted blanket, put on comfy socks, or hold a favorite fidget toy.",
        linkText: "Grab cozy item",
        linkUrl: "#",
        details: "Choose one familiar object that feels soothing or grounding.",
        steps: ["Find a soft layer, warm socks, a cushion, or a fidget object.", "Notice its texture, weight, or temperature.", "Keep it nearby while you take a short pause."]
    },
    {
        id: "focus_timer",
        category: "focus",
        badge: "Calm & Focus",
        title: "Pomodoro / Timer Reset",
        desc: "Set a tiny 10-minute timer if you need to focus or tackle one micro-task.",
        linkText: "Set a timer",
        linkUrl: "https://tomato-timer.com",
        details: "Choose one small task and give yourself permission to stop when the timer ends.",
        steps: ["Name one task that can be started in under a minute.", "Set a 10-minute timer, or choose a shorter time if that feels better.", "Work on only that task until the timer ends, then take a break."]
    },
    {
        id: "overthinking_checklist",
        category: "mind",
        badge: "Calm & Focus",
        title: "Overthinking Checklist",
        desc: "Is something actually wrong, or do you just need to take care of yourself?",
        linkText: "View Checklist",
        linkUrl: "https://i.pinimg.com/1200x/1b/fe/c1/1bfec17835c917fdb4523b395b029515.jpg",
        details: "Is something actually wrong, or do you just need to take care of yourself?",
        imageUrl: "https://i.pinimg.com/1200x/1b/fe/c1/1bfec17835c917fdb4523b395b029515.jpg",
        imageAlt: "Overthinking checklist",
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
        linkUrl: "#",
        itemId: "water"
    },
    recommend_calm: {
        isTerminal: true,
        title: "Soundbath or Box Breathing",
        desc: "Your nervous system needs a gentle pause. Put on headphones and try 5 minutes of soundbaths or breathing exercises.",
        linkText: "Try Breathing Guide",
        linkUrl: "https://www.youtube.com/results?search_query=box+breathing+guided",
        itemId: "breathwork"
    },
    recommend_movement: {
        isTerminal: true,
        title: "Short Fresh Air Walk or Shower",
        desc: "A quick change in temperature or environment will reset your physical energy.",
        linkText: "View Walk Item",
        linkUrl: "#",
        itemId: "walk"
    },
    recommend_cozy: {
        isTerminal: true,
        title: "Tea & Comfort Media",
        desc: "Wrap up in cozy items, put on a comfort album, and brew a warm cup of tea.",
        linkText: "Grab Cozy Item",
        linkUrl: "#",
        itemId: "tea"
    }
};

function SOSToolkitApp() {
    // 🧭 TAB STATE: Tracks whether 'toolkit' or 'dopa' is currently active
    const [activeTab, setActiveTab] = React.useState('toolkit');

    const [currentNodeKey, setCurrentNodeKey] = React.useState('start');
    const [filterCategory, setFilterCategory] = React.useState('all');
    const [selectedItem, setSelectedItem] = React.useState(null);
    const previousFocusRef = React.useRef(null);

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
        : toolkitItems.filter(item => item.category === filterCategory);

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
                    className="action-btn"
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
                    className="action-btn"
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
                                        <button type="button" className="toolkit-open-btn" onClick={() => openItem(item)}>
                                            {item.linkText} &rarr;
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feelings Wheel Image Section (At the bottom of Toolkit tab) */}
                    <div className="sos-card wheel-image-section" id="feelings-wheel">
                        <h2>Feelings Wheel Reference</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                            A visual reference to help pinpoint what emotion is present.
                        </p>
                        <div className="wheel-image-container">
                            <img src="img/feelings-wheel.jpg" alt="Feelings Wheel Reference"/>
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
                                <li>List item 1</li>
                                <li>List item 2</li>
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
                        {selectedItem.embedUrl && (
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