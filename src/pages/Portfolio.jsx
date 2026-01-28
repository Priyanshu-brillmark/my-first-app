function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      image: "🛒",
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["React", "Firebase", "Material-UI"],
      image: "✅",
      link: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      tech: ["React", "API Integration", "Chart.js"],
      image: "🌤️",
      link: "#",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics",
      tech: ["React", "D3.js", "Express"],
      image: "📊",
      link: "#",
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Platform for online courses and student management",
      tech: ["React", "Django", "PostgreSQL"],
      image: "📚",
      link: "#",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking application",
      tech: ["React Native", "GraphQL", "AWS"],
      image: "💪",
      link: "#",
    },
  ];

  return (
    <section className="page">
      <div className="container">
        <header>
          <h1>💼 Portfolio</h1>
          <p className="subtitle">Showcase of our recent projects</p>
        </header>

        <div className="card">
          <h2>Our Work</h2>
          <div className="features-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="feature-card"
                style={{ cursor: "pointer" }}
              >
                <div className="feature-icon" style={{ fontSize: "4rem" }}>
                  {project.image}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        background: "#667eea",
                        color: "white",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "15px",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
