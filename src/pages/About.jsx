import { motion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
  textReveal,
  slideUp,
  scaleIn,
} from "../animations/variants";
import AnimatedSection from "../components/AnimatedSection";

function About() {
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
              About This Travel Blog
            </motion.h2>
            <motion.div
              className="about-content"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🎯 Our Mission
                </motion.h3>
                <p>
                  Welcome to my Uttarakhand travel blog! I'm passionate about
                  exploring the beautiful state of Uttarakhand and sharing my
                  experiences with fellow travelers. This blog is dedicated to
                  helping you discover the hidden gems, popular destinations,
                  and unique experiences that Uttarakhand has to offer.
                </p>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🏔️ Why Uttarakhand?
                </motion.h3>
                <p>
                  Uttarakhand, also known as "Devbhumi" (Land of the Gods), is
                  one of India's most beautiful states. From the spiritual banks
                  of the Ganges to the snow-capped peaks of the Himalayas, from
                  ancient temples to modern adventure sports, Uttarakhand offers
                  something for every type of traveler.
                </p>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  ✨ What You'll Find Here
                </motion.h3>
                <motion.ul
                  className="feature-list"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[
                    "✅ Detailed travel guides for popular destinations",
                    "✅ Insider tips and local recommendations",
                    "✅ Best time to visit each place",
                    "✅ Budget-friendly travel options",
                    "✅ Adventure activity recommendations",
                    "✅ Spiritual and pilgrimage site guides",
                    "✅ Photography tips and scenic spots",
                    "✅ Local culture and traditions",
                  ].map((item, index) => (
                    <motion.li key={index} variants={staggerItem}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🛠️ Popular Destinations Covered
                </motion.h3>
                <motion.div
                  className="tech-grid"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[
                    "Rishikesh",
                    "Mussoorie",
                    "Nainital",
                    "Auli",
                    "Haridwar",
                    "Jim Corbett",
                    "Kedarnath",
                    "Valley of Flowers",
                    "Badrinath",
                    "Gangotri",
                    "Yamunotri",
                    "Joshimath",
                    "Chopta",
                    "Lansdowne",
                    "Almora",
                    "Ranikhet",
                    "Binsar",
                    "Mukteshwar",
                    "Dhanaulti",
                    "Kausani",
                    "Tehri",
                    "Pithoragarh",
                    "Dehradun",
                  ].map((destination, index) => (
                    <motion.div
                      key={destination}
                      className="tech-item"
                      variants={staggerItem}
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {destination}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3>🗺️ About Uttarakhand</h3>
                <p>
                  Uttarakhand, also known as "Devbhumi" (Land of the Gods), is a
                  state in northern India, established in 2000 as India's 27th
                  state. Nestled in the Himalayas, it shares borders with China
                  (Tibet) and Nepal. The state is divided into two regions:
                  Garhwal (western) and Kumaon (eastern), each with distinct
                  culture and traditions.
                </p>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🏔️ Geography & Climate
                </motion.h3>
                <p>
                  Uttarakhand is characterized by dramatic mountainous terrain
                  with high-altitude peaks, valleys, and dense forests. The
                  Himalayas dominate the landscape, with numerous rivers
                  including the Ganges and Yamuna originating here. The state
                  experiences diverse climate zones:
                </p>
                <ul className="feature-list" style={{ marginTop: "0.5rem" }}>
                  <li>
                    <strong>Summer (March-June):</strong> Pleasant weather,
                    15-30°C in hills, ideal for travel
                  </li>
                  <li>
                    <strong>Monsoon (July-August):</strong> Heavy rainfall, some
                    areas inaccessible, off-season
                  </li>
                  <li>
                    <strong>Autumn (September-November):</strong> Clear skies,
                    pleasant weather, peak tourist season
                  </li>
                  <li>
                    <strong>Winter (December-February):</strong> Cold, 0-15°C in
                    hills, snow in higher altitudes, perfect for winter sports
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  📜 History & Culture
                </motion.h3>
                <p>
                  Uttarakhand has a rich history dating back to ancient times.
                  The region was part of the Kuru Kingdom in the Mahabharata
                  era. Adi Shankaracharya established the Char Dham circuit in
                  the 8th century. The state was part of the Garhwal and Kumaon
                  kingdoms before British rule. The culture is deeply rooted in
                  Hindu traditions, with Garhwali and Kumaoni being the main
                  languages. The state celebrates vibrant festivals including
                  Harela, Phool Dei, Ghee Sankranti, and the grand Kumbh Mela.
                </p>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🚗 How to Reach Uttarakhand
                </motion.h3>
                <p>
                  <strong>By Air:</strong> Jolly Grant Airport (Dehradun) and
                  Pantnagar Airport are the main airports. Regular flights from
                  Delhi, Mumbai, and other major cities.
                </p>
                <p>
                  <strong>By Train:</strong> Major railway stations include
                  Haridwar, Dehradun, Rishikesh, and Kathgodam. Well-connected
                  to Delhi, Mumbai, Kolkata, and other cities.
                </p>
                <p>
                  <strong>By Road:</strong> Excellent road connectivity from
                  Delhi (250-300km), with NH 58 and NH 74 being the main
                  highways. Regular bus services and taxis available.
                </p>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🚌 Transportation Within State
                </motion.h3>
                <p>
                  Uttarakhand has a well-developed road network connecting major
                  destinations. State transport buses, private buses, shared
                  taxis, and private cabs are available. For remote areas like
                  Char Dham, helicopters are available. Local transport includes
                  auto-rickshaws and taxis in cities.
                </p>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🍽️ Cuisine
                </motion.h3>
                <p>
                  Uttarakhand offers delicious local cuisine reflecting its
                  mountain culture:
                </p>
                <ul className="feature-list" style={{ marginTop: "0.5rem" }}>
                  <li>
                    <strong>Garhwali Cuisine:</strong> Chainsoo, Kafuli, Phaanu,
                    Aloo ke Gutke, Mandua ki Roti
                  </li>
                  <li>
                    <strong>Kumaoni Cuisine:</strong> Bhatt ki Churkani, Aloo
                    Tamatar ka Jhol, Singal, Bal Mithai
                  </li>
                  <li>
                    <strong>Popular Dishes:</strong> Kachori, Jalebi, Momos,
                    Thukpa, Local Thali
                  </li>
                  <li>
                    <strong>Beverages:</strong> Buransh Juice, Local Tea, Chaas
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🎉 Festivals & Events
                </motion.h3>
                <p>
                  Uttarakhand celebrates numerous festivals throughout the year:
                </p>
                <ul className="feature-list" style={{ marginTop: "0.5rem" }}>
                  <li>
                    <strong>Kumbh Mela:</strong> Held every 12 years in
                    Haridwar, one of the largest religious gatherings
                  </li>
                  <li>
                    <strong>Kanwar Yatra:</strong> Annual pilgrimage in
                    July-August
                  </li>
                  <li>
                    <strong>Char Dham Yatra:</strong> May to October, pilgrimage
                    to four sacred sites
                  </li>
                  <li>
                    <strong>Nanda Devi Raj Jat:</strong> Held every 12 years, a
                    grand festival
                  </li>
                  <li>
                    <strong>Local Festivals:</strong> Harela, Phool Dei, Ghee
                    Sankranti, Basant Panchami
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🏕️ Adventure Activities
                </motion.h3>
                <p>Uttarakhand is a paradise for adventure enthusiasts:</p>
                <ul className="feature-list" style={{ marginTop: "0.5rem" }}>
                  <li>
                    <strong>Trekking:</strong> Valley of Flowers, Roopkund, Har
                    Ki Dun, Dayara Bugyal, numerous routes
                  </li>
                  <li>
                    <strong>River Rafting:</strong> Ganges in Rishikesh (Grade
                    3-4 rapids)
                  </li>
                  <li>
                    <strong>Skiing:</strong> Auli, Munsiyari (December to March)
                  </li>
                  <li>
                    <strong>Other Activities:</strong> Bungee jumping,
                    paragliding, rock climbing, camping, wildlife safaris
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🦌 Wildlife & Nature
                </motion.h3>
                <p>Uttarakhand is home to rich biodiversity:</p>
                <ul className="feature-list" style={{ marginTop: "0.5rem" }}>
                  <li>
                    <strong>National Parks:</strong> Jim Corbett, Valley of
                    Flowers, Nanda Devi, Rajaji
                  </li>
                  <li>
                    <strong>Wildlife Sanctuaries:</strong> Binsar, Govind Pashu
                    Vihar, Askot, Kedarnath
                  </li>
                  <li>
                    <strong>Wildlife:</strong> Tigers, elephants, leopards, snow
                    leopards, musk deer, over 600 bird species
                  </li>
                  <li>
                    <strong>Flora:</strong> Alpine flowers, rhododendrons,
                    deodar, oak forests
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🕉️ Pilgrimage Routes
                </motion.h3>
                <p>
                  Uttarakhand is home to some of India's most sacred pilgrimage
                  sites:
                </p>
                <ul className="feature-list" style={{ marginTop: "0.5rem" }}>
                  <li>
                    <strong>Char Dham:</strong> Yamunotri, Gangotri, Kedarnath,
                    Badrinath (May-October)
                  </li>
                  <li>
                    <strong>Panch Kedar:</strong> Kedarnath, Tungnath,
                    Rudranath, Madhyamaheshwar, Kalpeshwar
                  </li>
                  <li>
                    <strong>Panch Badri:</strong> Badrinath, Yogadhyan Badri,
                    Bhavishya Badri, Vriddha Badri, Adi Badri
                  </li>
                  <li>
                    <strong>Other Sites:</strong> Haridwar, Rishikesh, Hemkund
                    Sahib, numerous temples
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  💡 Travel Tips
                </motion.h3>
                <ul className="feature-list">
                  <li>Carry warm clothes even in summer (evenings are cold)</li>
                  <li>
                    Book accommodation in advance during peak season (May-June,
                    September-November)
                  </li>
                  <li>Carry cash as many places don't accept cards</li>
                  <li>Respect local customs and dress modestly near temples</li>
                  <li>Acclimatize properly if visiting high-altitude areas</li>
                  <li>Carry necessary permits for restricted areas</li>
                  <li>Stay hydrated and carry water bottles</li>
                  <li>Respect the environment - avoid littering</li>
                  <li>Carry first aid kit and necessary medications</li>
                  <li>Check weather conditions before planning treks </li>
                </ul>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  💰 Budget Planning
                </motion.h3>
                <p>
                  <strong>Budget Traveler:</strong> ₹1,500-3,000/day (hostels,
                  local food, public transport)
                  <br />
                  <strong>Mid-Range:</strong> ₹3,000-6,000/day (hotels,
                  restaurants, activities)
                  <br />
                  <strong>Luxury:</strong> ₹8,000+/day (resorts, fine dining,
                  private tours)
                  <br />
                  <em>
                    Note: Costs vary by destination and season. Peak season
                    (May-June, September-November) sees higher prices.
                  </em>
                </p>
              </motion.div>

              <motion.div
                className="about-section"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  📸 Follow the Journey
                </motion.h3>
                <p>
                  Join me as I explore the mountains, valleys, rivers, and
                  forests of Uttarakhand. Whether you're planning your first
                  trip or looking for new places to discover, this blog will be
                  your guide to experiencing the best of Uttarakhand.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Have questions or want to share your own Uttarakhand travel
                  stories? Feel free to reach out through the contact page!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default About;
