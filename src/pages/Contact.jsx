import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    setFormMessage("Thank you for your message! We'll get back to you soon.");
    setShowMessage(true);

    // Save to localStorage (in a real app, this would be sent to a server)
    try {
      const submissions = JSON.parse(
        localStorage.getItem("contactSubmissions") || "[]",
      );
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("contactSubmissions", JSON.stringify(submissions));
    } catch (e) {
      console.warn("Could not save form submission:", e);
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide message after 5 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <section className="page">
      <div className="container">
        <div className="card">
          <h2>Get In Touch</h2>
          <p className="contact-intro">
            Have questions or feedback? We'd love to hear from you!
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Send Message
            </button>
          </form>

          {showMessage && (
            <div
              className={`form-message success ${showMessage ? "show" : ""}`}
            >
              {formMessage}
            </div>
          )}

          <div className="contact-info">
            <h3>Other Ways to Reach Us</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <strong>📧 Email:</strong> contact@myapp.com
              </div>
              <div className="contact-method">
                <strong>🌐 Website:</strong> www.myapp.com
              </div>
              <div className="contact-method">
                <strong>📍 Location:</strong> Remote, Worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
