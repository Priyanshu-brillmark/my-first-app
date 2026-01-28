import { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Load count from localStorage on mount
    const savedCount = localStorage.getItem("count");
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    saveCount(newCount);
    animateCounter();
  };

  const reset = () => {
    setCount(0);
    saveCount(0);
    animateCounter();
  };

  const saveCount = (value) => {
    try {
      localStorage.setItem("count", value.toString());
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }
  };

  const animateCounter = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section className="page">
      <div className="container">
        <header>
          <h1>🚀 Welcome to My App</h1>
          <p className="subtitle">A modern multi-page web application</p>
        </header>

        <div className="card">
          <h2>Interactive Counter</h2>
          <p>Try out our interactive counter feature!</p>

          <div className="counter-section">
            <div className={`counter-display ${isAnimating ? "animate" : ""}`}>
              {count}
            </div>
            <div className="button-group">
              <button className="btn btn-primary" onClick={increment}>
                Click Me!
              </button>
              <button className="btn btn-secondary" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
