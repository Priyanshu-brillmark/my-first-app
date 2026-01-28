import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  staggerContainer,
  staggerItem,
  textReveal,
  slideUp,
  shake,
  slideDown,
} from "../animations/variants";
import AnimatedSection from "../components/AnimatedSection";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormMessage("Thank you for your message! We'll get back to you soon.");
      setShowMessage(true);
      setIsSubmitting(false);

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
    }, 1000);
  };

  return (
    <section className="page">
      <div className="container">
        <AnimatedSection variant={slideUp} delay={0.2}>
          <div className="card">
            <motion.h2
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="contact-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Have questions about traveling in Uttarakhand? Want to share your
              travel stories? Or need recommendations for your trip? I'd love to
              hear from you!
            </motion.p>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div className="form-group" variants={staggerItem}>
                <motion.label
                  htmlFor="name"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Name
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  whileFocus={{ scale: 1.02, borderColor: "#667eea" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div className="form-group" variants={staggerItem}>
                <motion.label
                  htmlFor="email"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Email
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.02, borderColor: "#667eea" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div className="form-group" variants={staggerItem}>
                <motion.label
                  htmlFor="message"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Message
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  whileFocus={{ scale: 1.02, borderColor: "#667eea" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-block"
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>

            <AnimatePresence>
              {showMessage && (
                <motion.div
                  className={`form-message success ${showMessage ? "show" : ""}`}
                  variants={slideDown}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {formMessage}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="contact-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.h3
                variants={textReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Connect With Me
              </motion.h3>
              <motion.div
                className="contact-methods"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: "📧",
                    label: "Email:",
                    value: "travel@uttarakhandblog.com",
                  },
                  {
                    icon: "📍",
                    label: "Based in:",
                    value: "Uttarakhand, India",
                  },
                  {
                    icon: "✈️",
                    label: "Currently Exploring:",
                    value: "The beautiful destinations of Uttarakhand",
                  },
                ].map((method, index) => (
                  <motion.div
                    key={index}
                    className="contact-method"
                    variants={staggerItem}
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <strong>
                      {method.icon} {method.label}
                    </strong>{" "}
                    {method.value}
                  </motion.div>
                ))}
              </motion.div>
              <motion.p
                style={{
                  marginTop: "1.5rem",
                  color: "#666",
                  fontStyle: "italic",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Whether you're planning your first trip to Uttarakhand or
                looking for hidden gems, feel free to reach out. I'm always
                happy to help fellow travelers discover the magic of this
                incredible state!
              </motion.p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Contact;
