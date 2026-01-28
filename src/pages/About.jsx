function About() {
  return (
    <section className="page">
      <div className="container">
        <div className="card">
          <h2>About This App</h2>
          <div className="about-content">
            <div className="about-section">
              <h3>🎯 Our Mission</h3>
              <p>
                This is a modern, responsive web application built with React.
                It demonstrates best practices in web development including
                client-side routing, local storage, and responsive design.
              </p>
            </div>

            <div className="about-section">
              <h3>✨ Features</h3>
              <ul className="feature-list">
                <li>✅ Multi-page navigation</li>
                <li>✅ Responsive design</li>
                <li>✅ Interactive components</li>
                <li>✅ Local storage persistence</li>
                <li>✅ Modern UI/UX</li>
                <li>✅ GitHub Pages deployment</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>🛠️ Technologies</h3>
              <div className="tech-grid">
                <div className="tech-item">React</div>
                <div className="tech-item">React Router</div>
                <div className="tech-item">Vite</div>
                <div className="tech-item">GitHub Pages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
