import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
  cardHover3D,
  textReveal,
  iconBounce,
  slideUp,
} from "../animations/variants";
import AnimatedSection from "../components/AnimatedSection";

function Home() {
  const featuredDestinations = [
    {
      id: 1,
      name: "Rishikesh",
      emoji: "🧘",
      description:
        "The Yoga Capital of the World, nestled in the foothills of the Himalayas. Perfect blend of spirituality and adventure.",
      link: "/blog#rishikesh",
    },
    {
      id: 2,
      name: "Mussoorie",
      emoji: "🏔️",
      description:
        "Queen of the Hills - A charming colonial hill station with breathtaking views of the Doon Valley",
      link: "/blog#mussoorie",
    },
    {
      id: 3,
      name: "Char Dham",
      emoji: "🕉️",
      description:
        "Sacred pilgrimage circuit: Yamunotri, Gangotri, Kedarnath, and Badrinath - the holiest journey",
      link: "/blog#badrinath",
    },
    {
      id: 4,
      name: "Valley of Flowers",
      emoji: "🌸",
      description:
        "UNESCO World Heritage Site with hundreds of species of vibrant alpine flowers",
      link: "/blog#valley-of-flowers",
    },
    {
      id: 5,
      name: "Auli",
      emoji: "⛷️",
      description:
        "India's premier skiing destination with world-class slopes and panoramic Himalayan views",
      link: "/blog#auli",
    },
    {
      id: 6,
      name: "Jim Corbett",
      emoji: "🐅",
      description:
        "India's oldest national park, home to Royal Bengal Tigers and diverse wildlife",
      link: "/blog#jim-corbett",
    },
  ];

  return (
    <section className="page">
      <div className="container">
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 200,
            }}
          >
            🏔️ Explore Uttarakhand
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover the Land of Gods - Your Ultimate Travel Guide
          </motion.p>
        </motion.header>

        <AnimatedSection variant={slideUp} delay={0.2}>
          <div className="card">
            <motion.h2 variants={textReveal} initial="hidden" animate="visible">
              Welcome to Uttarakhand Travel Blog
            </motion.h2>
            <motion.p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "2rem",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join me on an incredible journey through Uttarakhand, India's most
              beautiful state - the "Land of the Gods" (Devbhumi). From the
              spiritual banks of the Ganges in Rishikesh to the snow-capped
              peaks of the Himalayas, from ancient Char Dham temples to pristine
              wildlife sanctuaries, discover hidden gems, local culture, and
              unforgettable experiences in this paradise for nature lovers,
              adventure seekers, and spiritual pilgrims.
            </motion.p>
            <motion.p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "2rem",
                color: "#666",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Explore 23+ destinations, comprehensive travel guides, insider
              tips, and practical information to help you plan the perfect
              Uttarakhand adventure. Whether you're seeking spiritual
              enlightenment, thrilling adventures, peaceful mountain retreats,
              or wildlife encounters, Uttarakhand has something extraordinary
              for every traveler.
            </motion.p>

            <motion.div
              className="features-grid"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {featuredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  className="feature-card"
                  variants={staggerItem}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  custom={index}
                >
                  <motion.div
                    className="feature-icon"
                    variants={iconBounce}
                    whileHover="hover"
                  >
                    {destination.emoji}
                  </motion.div>
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={destination.link}
                      style={{
                        display: "inline-block",
                        marginTop: "1rem",
                        color: "#667eea",
                        fontWeight: "600",
                        textDecoration: "none",
                      }}
                    >
                      Read More →
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection variant={slideUp} delay={0.3}>
          <div className="card" style={{ marginTop: "2rem" }}>
            <motion.h2
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Why Visit Uttarakhand?
            </motion.h2>
            <motion.div
              className="about-content"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  emoji: "🌲",
                  title: "Natural Beauty",
                  text: "Uttarakhand is blessed with diverse landscapes - from lush green valleys and dense forests to snow-clad mountains and pristine rivers. Every turn offers a picture-perfect view. Home to UNESCO World Heritage Sites like Valley of Flowers, the state showcases nature's finest creations.",
                },
                {
                  emoji: "⛰️",
                  title: "Adventure Activities",
                  text: "Whether you're into trekking, river rafting, skiing, or paragliding, Uttarakhand has it all. The state offers some of the best adventure sports in India. From world-class skiing in Auli to white-water rafting in Rishikesh, adventure awaits at every corner.",
                },
                {
                  emoji: "🕉️",
                  title: "Spiritual Retreats",
                  text: "Home to the Char Dham pilgrimage sites (Yamunotri, Gangotri, Kedarnath, Badrinath) and numerous ashrams, Uttarakhand is a spiritual haven. Experience peace and tranquility in places like Rishikesh and Haridwar, where ancient traditions meet modern spirituality.",
                },
                {
                  emoji: "🦌",
                  title: "Wildlife & Biodiversity",
                  text: "Discover India's oldest national park (Jim Corbett), spot Royal Bengal Tigers, elephants, and over 600 bird species. The state's diverse ecosystems support rich biodiversity, making it a paradise for wildlife enthusiasts and nature photographers.",
                },
                {
                  emoji: "🏔️",
                  title: "Hill Stations",
                  text: "Escape to charming hill stations like Mussoorie, Nainital, Almora, and Ranikhet. These colonial-era towns offer pleasant weather, stunning views, and a perfect blend of history, culture, and natural beauty.",
                },
                {
                  emoji: "🍽️",
                  title: "Rich Culture & Cuisine",
                  text: "Experience the vibrant Garhwali and Kumaoni cultures, traditional festivals, and delicious local cuisine. From Chainsoo and Kafuli to Singal and Bal Mithai, savor authentic mountain flavors that reflect the region's rich heritage.",
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  className="about-section"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.h3
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {section.emoji} {section.title}
                  </motion.h3>
                  <p>{section.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection variant={slideUp} delay={0.4}>
          <div className="card" style={{ marginTop: "2rem" }}>
            <motion.h2
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              📅 Best Time to Visit
            </motion.h2>
            <motion.div
              className="about-content"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  emoji: "🌞",
                  title: "Summer (March - June)",
                  text: "Perfect weather (15-30°C) for hill stations, trekking, and sightseeing. Peak tourist season with clear skies and pleasant temperatures. Ideal for Char Dham pilgrimage and adventure activities.",
                },
                {
                  emoji: "🍂",
                  title: "Autumn (September - November)",
                  text: "Post-monsoon clarity with pleasant weather (10-25°C). Excellent for photography, trekking, and outdoor activities. Another peak season with beautiful autumn colors and clear mountain views.",
                },
                {
                  emoji: "❄️",
                  title: "Winter (December - February)",
                  text: "Cold weather (0-15°C) with snow in higher altitudes. Perfect for winter sports, snow views, and peaceful retreats. Skiing season in Auli. Fewer crowds and lower prices.",
                },
                {
                  emoji: "🌧️",
                  title: "Monsoon (July - August)",
                  text: "Heavy rainfall, some areas inaccessible. Off-season with discounts, but Valley of Flowers blooms during this time. Not recommended for most destinations due to landslides and road closures.",
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  className="about-section"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.h3
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {section.emoji} {section.title}
                  </motion.h3>
                  <p>{section.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection variant={slideUp} delay={0.5}>
          <div className="card" style={{ marginTop: "2rem" }}>
            <motion.h2
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              🗺️ Explore by Category
            </motion.h2>
            <motion.div
              className="features-grid"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  emoji: "🕉️",
                  title: "Spiritual & Pilgrimage",
                  text: "Char Dham, Haridwar, Rishikesh, ancient temples, and sacred sites",
                },
                {
                  emoji: "🏔️",
                  title: "Hill Stations",
                  text: "Mussoorie, Nainital, Almora, Ranikhet, and more charming mountain towns",
                },
                {
                  emoji: "⛷️",
                  title: "Adventure",
                  text: "Trekking, rafting, skiing, paragliding, and thrilling outdoor activities",
                },
                {
                  emoji: "🐅",
                  title: "Wildlife",
                  text: "Jim Corbett, Rajaji, Binsar, and wildlife sanctuaries",
                },
                {
                  emoji: "🌸",
                  title: "Nature & Trekking",
                  text: "Valley of Flowers, Chopta, pristine forests, and alpine meadows",
                },
                {
                  emoji: "🏛️",
                  title: "Culture & Heritage",
                  text: "Almora, traditional handicrafts, local festivals, and cultural experiences",
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="feature-icon"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.emoji}
                  </motion.div>
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Home;
