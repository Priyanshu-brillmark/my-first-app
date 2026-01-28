function Features() {
  const features = [
    {
      icon: "🎨",
      title: "Modern Design",
      description:
        "Beautiful, clean interface with smooth animations and transitions",
    },
    {
      icon: "📱",
      title: "Responsive",
      description:
        "Works perfectly on all devices - desktop, tablet, and mobile",
    },
    {
      icon: "⚡",
      title: "Fast & Lightweight",
      description: "Optimized for performance with minimal dependencies",
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Built with security best practices in mind",
    },
    {
      icon: "💾",
      title: "Data Persistence",
      description: "Your data is saved locally using browser storage",
    },
    {
      icon: "🚀",
      title: "Easy Deployment",
      description: "Deployed automatically via GitHub Actions",
    },
  ];

  return (
    <section className="page">
      <div className="container">
        <div className="card">
          <h2>App Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
