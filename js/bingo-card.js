const { useState } = React;

const WORDS = [
  "Read", "Gratitude", "Shower", "Brush teeth", "Go outside",
  "Move my body", "Draw", "Journal", "Craft", "Cute outfit",
  "Skincare", "Meds", "2 bottles of water", "Tidy one thing", "Talk to someone",
  "Meditate", "Eat a real meal", "Future you task", "Cook", "Game with Dan",
  "Make bed", "Series or movie", "Paint nails", "Before it gets worse task", "8ish hours of sleep"
];

// Set each theme's marker to its own image URL (PNG, SVG, etc.).
const MARK_IMAGE_URLS = {
  simple: "img/gold-star.png",
  medieval: "img/gold-star.png",
  purple: "img/none",
  literature: "img/gold-star.png"
};
const SIMPLE_MARK_COLORS = [
  "#6F7F5D", // Movement
  "#3E7C8C", // Hydration
  "#8C4A5B", // Protein
  "#B98A2E", // Fibre
  "#6B4C77", // Supplements
  "#47536B", // Sleep
  "#B9765F"  // Mindfulness
];
const STORAGE_KEY = "bingoCardState";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeGrid() {
  const shuffled = shuffle(WORDS).slice(0, 25);
  shuffled[12] = "FREE";
  return shuffled;
}

function randomAngle() {
  return Math.floor(Math.random() * 360);
}

function randomSimpleMarkColor() {
  return SIMPLE_MARK_COLORS[Math.floor(Math.random() * SIMPLE_MARK_COLORS.length)];
}

function todayKey() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${today.getFullYear()}-${month}-${day}`;
}

function makeCardState() {
  return {
    date: todayKey(),
    grid: makeGrid(),
    marked: new Set([12]),
    markRotations: new Map([[12, randomAngle()]]),
    markColors: new Map([[12, randomSimpleMarkColor()]])
  };
}

function loadCardState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved?.date === todayKey() && Array.isArray(saved.grid) && saved.grid.length === 25 &&
        Array.isArray(saved.marked) && Array.isArray(saved.markRotations)) {
      const marked = new Set(saved.marked);
      const markColors = new Map(
        Array.isArray(saved.markColors)
          ? saved.markColors
          : saved.marked.map(index => [index, randomSimpleMarkColor()])
      );
      marked.forEach(index => {
        if (!markColors.has(index)) markColors.set(index, randomSimpleMarkColor());
      });
      return {
        date: saved.date,
        grid: saved.grid,
        marked,
        markRotations: new Map(saved.markRotations),
        markColors
      };
    }
  } catch {}
  return makeCardState();
}

function checkBingo(marked) {
  const lines = [];
  for (let r = 0; r < 5; r++) lines.push([0,1,2,3,4].map(c => r * 5 + c));
  for (let c = 0; c < 5; c++) lines.push([0,1,2,3,4].map(r => r * 5 + c));
  lines.push([0,6,12,18,24]);
  lines.push([4,8,12,16,20]);
  return lines.some(line => line.every(i => marked.has(i)));
}

function BingoCard() {
  const [card, setCard] = useState(loadCardState);
  const [theme, setTheme] = useState(() => document.body.dataset.theme || "simple");
  const { grid, marked, markRotations, markColors } = card;
  const markImageUrl = MARK_IMAGE_URLS[theme] || MARK_IMAGE_URLS.simple;

  const hasBingo = checkBingo(marked);

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.body.dataset.theme || "simple");
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        date: card.date,
        grid: card.grid,
        marked: [...card.marked],
        markRotations: [...card.markRotations],
        markColors: [...card.markColors]
      }));
    } catch {}
  }, [card]);

  function toggle(i) {
    if (i === 12) return;
    setCard(prev => {
      const nextMarked = new Set(prev.marked);
      const nextRotations = new Map(prev.markRotations);
      const nextColors = new Map(prev.markColors);
      if (nextMarked.has(i)) {
        nextMarked.delete(i);
        nextRotations.delete(i);
        nextColors.delete(i);
      } else {
        nextMarked.add(i);
        nextRotations.set(i, randomAngle());
        nextColors.set(i, randomSimpleMarkColor());
      }
      return { ...prev, marked: nextMarked, markRotations: nextRotations, markColors: nextColors };
    });
  }

  function reset() {
    setCard(makeCardState());
  }

  return (
    <div className="bingo-page">
      <div className="bingo-wrapper">
        <div className="bingo-header">
          <h1 className={`bingo-title${hasBingo ? " is-bingo" : ""}`}>Bingo</h1>
        </div>

        <div className="bingo-grid">
          {"BINGO".split("").map((letter) => (
            <div
              key={letter}
              className="bingo-letter"
            >
              {letter}
            </div>
          ))}

          {grid.map((word, i) => {
            const isMarked = marked.has(i);
            const isFree = i === 12;
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className={`bingo-cell${isFree ? " is-free" : ""}`}
              >
                <span>{word}</span>
                {isMarked && theme === "simple" && (
                  <span
                    aria-label="marked"
                    className="bingo-cell-mark bingo-cell-mark-circle"
                    style={{ backgroundColor: markColors.get(i) }}
                  />
                )}
                {isMarked && theme !== "simple" && (
                  <img
                    src={markImageUrl}
                    alt="marked"
                    className="bingo-cell-mark"
                    style={{ transform: `rotate(${markRotations.get(i) ?? 0}deg)` }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="bingo-reset-row">
          {/*<label>
            <span className="visually-hidden">Choose theme</span>
            <select
              className="bingo-theme-select"
              value={theme}
              onChange={event => setTheme(event.target.value)}
            >
              <option value="default">Violet Lime</option>
              <option value="ocean">Ocean</option>
              <option value="sunset">Sunset</option>
              <option value="medieval">Medieval</option>
            </select>
          </label>*/}
          <button
            onClick={reset}
            className="bingo-reset-btn"
          >
            New Card
          </button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BingoCard />);
