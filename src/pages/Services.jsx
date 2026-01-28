function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: "💻",
      price: "Starting at $999",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      icon: "📱",
      price: "Starting at $1,499",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface designs",
      icon: "🎨",
      price: "Starting at $799",
    },
    {
      title: "Consulting",
      description: "Expert advice on technology and development strategies",
      icon: "💡",
      price: "$150/hour",
    },
    {
      title: "Maintenance",
      description: "Ongoing support and updates for your applications",
      icon: "🔧",
      price: "Custom pricing",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
      icon: "☁️",
      price: "Starting at $499",
    },
  ];

  return (
    <section className="page">
      <div className="container">
        <header>
          <h1>🛠️ Our Services</h1>
          <p className="subtitle">
            Comprehensive solutions for your digital needs
          </p>
        </header>

        <div className="card">
          <h2>What We Offer</h2>
          <div className="features-grid">
            {services.map((service, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem",
                    background: "#667eea",
                    color: "white",
                    borderRadius: "5px",
                    fontWeight: "600",
                  }}
                >
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
