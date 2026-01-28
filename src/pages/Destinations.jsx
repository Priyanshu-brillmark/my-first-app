import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
  textReveal,
  slideUp,
  iconBounce,
} from "../animations/variants";
import AnimatedSection from "../components/AnimatedSection";

function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Rishikesh",
      emoji: "🧘",
      description:
        "The Yoga Capital of the World, nestled in the foothills of the Himalayas along the sacred Ganges River. A perfect blend of spirituality and adventure, offering yoga retreats, meditation centers, white-water rafting, bungee jumping, and serene ashrams. Experience the mesmerizing Ganga Aarti at Triveni Ghat and explore ancient temples.",
      bestTime: "Year Round (Peak: March-June, September-November)",
      category: "Spiritual & Adventure",
      link: "/blog#rishikesh",
    },
    {
      id: 2,
      name: "Mussoorie",
      emoji: "🏔️",
      description:
        "Queen of the Hills - A charming colonial hill station perched at 6,000 feet with breathtaking views of the Doon Valley and Shivalik ranges. Famous for its Mall Road, colonial architecture, cable car rides to Gun Hill, Kempty Falls, and pleasant weather. Perfect for honeymooners and families seeking a peaceful mountain retreat.",
      bestTime: "March to June (Summer), September to November (Post-monsoon)",
      category: "Hill Station",
      link: "/blog#mussoorie",
    },
    {
      id: 3,
      name: "Nainital",
      emoji: "🏞️",
      description:
        "The Lake District of India, centered around the beautiful Naini Lake surrounded by seven hills. A popular hill station offering boating, cable car rides, ancient temples, and colonial-era buildings. Explore Tiffin Top, Naina Devi Temple, Eco Cave Gardens, and enjoy the vibrant Mall Road with local handicrafts and cuisine.",
      bestTime: "March to June (Summer), September to November (Autumn)",
      category: "Hill Station",
      link: "/blog#nainital",
    },
    {
      id: 4,
      name: "Auli",
      emoji: "⛷️",
      description:
        "India's premier skiing destination at 9,500 feet with excellent slopes, snow-covered peaks, and Asia's longest cable car ride. Offers world-class skiing facilities, stunning views of Nanda Devi, Trishul, and other Himalayan peaks. Perfect for winter sports enthusiasts and nature lovers seeking pristine mountain beauty.",
      bestTime:
        "December to March (Winter for skiing), April to June (Summer for views)",
      category: "Adventure",
      link: "/blog#auli",
    },
    {
      id: 5,
      name: "Haridwar",
      emoji: "🕉️",
      description:
        "One of the seven holiest places in Hinduism and gateway to the Char Dham pilgrimage circuit. Famous for the sacred Ganga Aarti at Har Ki Pauri, where thousands gather daily. Home to ancient temples, ashrams, and the Kumbh Mela. Experience spiritual cleansing, temple visits, and the vibrant religious atmosphere.",
      bestTime: "Year Round (Peak: October-March, Avoid: Monsoon July-August)",
      category: "Spiritual",
      link: "/blog#haridwar",
    },
    {
      id: 6,
      name: "Jim Corbett",
      emoji: "🐅",
      description:
        "India's oldest national park, established in 1936, spread across 520 square kilometers. Home to the Royal Bengal Tiger, Asian elephants, leopards, and over 600 bird species. Offers jeep safaris, elephant rides, bird watching, and nature walks. A paradise for wildlife enthusiasts and photographers.",
      bestTime: "November to June (Closed: July-October during monsoon)",
      category: "Wildlife",
      link: "/blog#jim-corbett",
    },
    {
      id: 7,
      name: "Kedarnath",
      emoji: "⛰️",
      description:
        "Sacred temple dedicated to Lord Shiva, one of the four Char Dham pilgrimage sites, located at 11,755 feet. Surrounded by snow-capped peaks and glaciers, accessible via a challenging 16km trek from Gaurikund. The temple remains open from May to October, attracting millions of devotees seeking spiritual blessings.",
      bestTime:
        "May to June (Pre-monsoon), September to October (Post-monsoon)",
      category: "Pilgrimage",
      link: "/blog#kedarnath",
    },
    {
      id: 8,
      name: "Valley of Flowers",
      emoji: "🌸",
      description:
        "UNESCO World Heritage Site, a stunning alpine valley at 11,000-14,000 feet blanketed with over 500 species of wildflowers during monsoon. Accessible via a moderate 17km trek from Govindghat. Home to rare and endangered flora and fauna, offering breathtaking views of snow-capped peaks and pristine natural beauty.",
      bestTime: "July to September (Peak bloom: Mid-July to Mid-August)",
      category: "Trekking",
      link: "/blog#valley-of-flowers",
    },
    {
      id: 9,
      name: "Dehradun",
      emoji: "🌳",
      description:
        "Capital city of Uttarakhand, nestled in the Doon Valley at the foothills of the Himalayas. Gateway to popular hill stations and pilgrimage sites. Known for pleasant weather, educational institutions, Forest Research Institute, Robber's Cave, Tapkeshwar Temple, and as a base for exploring nearby destinations.",
      bestTime: "Year Round (Best: March-June, September-November)",
      category: "City",
      link: "/blog#dehradun",
    },
    {
      id: 10,
      name: "Badrinath",
      emoji: "🕉️",
      description:
        "One of the four Char Dham pilgrimage sites, dedicated to Lord Vishnu, situated at 10,170 feet below the Neelkanth peak. Part of the sacred Panch Badri circuit, accessible by road from Joshimath. The temple opens from May to October, attracting devotees seeking spiritual salvation and blessings.",
      bestTime:
        "May to June (Pre-monsoon), September to October (Post-monsoon)",
      category: "Pilgrimage",
      link: "/blog#badrinath",
    },
    {
      id: 11,
      name: "Gangotri",
      emoji: "🌊",
      description:
        "Sacred source of the Ganges River and one of the Char Dham sites, located at 10,200 feet in the Uttarkashi district. The Gangotri Temple dedicated to Goddess Ganga is surrounded by snow-capped peaks and glaciers. Visit Gaumukh (the actual source) via a 19km trek, experiencing pristine Himalayan beauty.",
      bestTime:
        "May to June (Pre-monsoon), September to October (Post-monsoon)",
      category: "Pilgrimage",
      link: "/blog#gangotri",
    },
    {
      id: 12,
      name: "Yamunotri",
      emoji: "🏔️",
      description:
        "Source of the Yamuna River and the first stop in the Char Dham circuit, located at 10,804 feet. The Yamunotri Temple dedicated to Goddess Yamuna is accessible via a 6km trek from Janki Chatti. Surrounded by thermal springs, glaciers, and majestic peaks, offering a spiritual and scenic experience.",
      bestTime:
        "May to June (Pre-monsoon), September to October (Post-monsoon)",
      category: "Pilgrimage",
      link: "/blog#yamunotri",
    },
    {
      id: 13,
      name: "Joshimath",
      emoji: "⛷️",
      description:
        "Gateway to Badrinath and Auli, located at 6,150 feet in the Chamoli district. A winter seat of Lord Badri and base for skiing adventures. Offers stunning views of Nanda Devi, Trishul peaks, and serves as a starting point for treks to Valley of Flowers and Hemkund Sahib.",
      bestTime:
        "Year Round (Best: March-June, September-November, December-February for skiing)",
      category: "Adventure & Pilgrimage",
      link: "/blog#joshimath",
    },
    {
      id: 14,
      name: "Chopta",
      emoji: "🌲",
      description:
        "Mini Switzerland of India, a pristine meadow at 8,800 feet surrounded by dense forests and snow-capped peaks. Base for treks to Tungnath (world's highest Shiva temple) and Chandrashila. Offers camping, bird watching, and breathtaking sunrise views. Perfect for nature lovers and adventure seekers.",
      bestTime:
        "March to June (Summer), September to November (Autumn), December to February (Snow)",
      category: "Trekking",
      link: "/blog#chopta",
    },
    {
      id: 15,
      name: "Lansdowne",
      emoji: "🏛️",
      description:
        "A quiet and serene hill station at 5,800 feet, known for its British colonial architecture and army cantonment. Surrounded by oak and pine forests, offering peaceful walks, bird watching, and panoramic views. Visit Tip-in-Top, St. Mary's Church, and enjoy the tranquil atmosphere away from crowds.",
      bestTime: "March to June (Summer), September to November (Autumn)",
      category: "Hill Station",
      link: "/blog#lansdowne",
    },
    {
      id: 16,
      name: "Almora",
      emoji: "🏛️",
      description:
        "Cultural capital of Kumaon region, perched on a ridge at 5,400 feet with panoramic views of the Himalayas. Known for ancient temples, traditional handicrafts, and rich cultural heritage. Visit Kasar Devi Temple, Bright End Corner for sunrise, and explore local markets for copperware and traditional items.",
      bestTime: "March to June (Summer), September to November (Autumn)",
      category: "Cultural & Hill Station",
      link: "/blog#almora",
    },
    {
      id: 17,
      name: "Ranikhet",
      emoji: "🌄",
      description:
        "Queen's Meadow, a charming hill station at 6,000 feet known for its army cantonment and apple orchards. Offers stunning views of Nanda Devi, Trishul, and Panchachuli peaks. Visit Jhula Devi Temple, Chaubatia Gardens, and enjoy peaceful walks through pine forests and meadows.",
      bestTime: "March to June (Summer), September to November (Autumn)",
      category: "Hill Station",
      link: "/blog#ranikhet",
    },
    {
      id: 18,
      name: "Binsar",
      emoji: "🌿",
      description:
        "A wildlife sanctuary and hill station at 7,600 feet, offering 300km panoramic views of Himalayan peaks including Nanda Devi, Trishul, and Panchachuli. Known for dense oak and rhododendron forests, bird watching, and Zero Point viewpoint. Perfect for nature enthusiasts and photographers.",
      bestTime: "March to June (Summer), September to November (Autumn)",
      category: "Wildlife & Hill Station",
      link: "/blog#binsar",
    },
    {
      id: 19,
      name: "Mukteshwar",
      emoji: "🍎",
      description:
        "A peaceful hill station at 7,500 feet known for fruit orchards, dense forests, and stunning views of the Himalayas. Home to the 350-year-old Mukteshwar Temple and Indian Veterinary Research Institute. Offers rock climbing, paragliding, and serene walks through apple and apricot orchards.",
      bestTime: "March to June (Summer), September to November (Autumn)",
      category: "Hill Station & Adventure",
      link: "/blog#mukteshwar",
    },
    {
      id: 20,
      name: "Dhanaulti",
      emoji: "🌲",
      description:
        "An eco-tourism destination at 7,200 feet, surrounded by dense deodar and oak forests. Known for adventure activities like camping, rappelling, and rock climbing. Offers peaceful atmosphere, Eco Park, Surkanda Devi Temple, and stunning views of snow-capped peaks. Perfect for nature lovers and adventure seekers.",
      bestTime:
        "March to June (Summer), September to November (Autumn), December to February (Snow)",
      category: "Eco-Tourism & Adventure",
      link: "/blog#dhanaulti",
    },
    {
      id: 21,
      name: "Kausani",
      emoji: "🌅",
      description:
        "Switzerland of India, a hill station at 6,200 feet offering spectacular 300km views of Nanda Devi, Trishul, and Panchachuli peaks. Famous for its sunrise and sunset views, Anasakti Ashram (where Gandhi stayed), and tea gardens. Perfect for meditation, photography, and peaceful mountain retreats.",
      bestTime: "March to June (Summer), September to November (Autumn)",
      category: "Hill Station & Spiritual",
      link: "/blog#kausani",
    },
    {
      id: 22,
      name: "Tehri",
      emoji: "🏞️",
      description:
        "Home to Asia's largest hydroelectric dam and the beautiful Tehri Lake, offering water sports like kayaking, jet skiing, and boating. Surrounded by mountains, the area provides adventure activities, scenic views, and opportunities for camping and fishing. A perfect blend of engineering marvel and natural beauty.",
      bestTime: "Year Round (Best: March-June, September-November)",
      category: "Adventure & Water Sports",
      link: "/blog#tehri",
    },
    {
      id: 23,
      name: "Pithoragarh",
      emoji: "🏔️",
      description:
        "A border town in the easternmost part of Uttarakhand, known as the 'Little Kashmir' for its scenic beauty. Gateway to the Soar Valley, Kailash Mansarovar Yatra, and numerous trekking routes. Offers stunning views of Panchachuli peaks, ancient temples, and serves as a base for high-altitude treks.",
      bestTime: "March to June (Summer), September to November (Autumn)",
      category: "Adventure & Border Town",
      link: "/blog#pithoragarh",
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
            🗺️ Destinations
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore the beautiful places of Uttarakhand
          </motion.p>
        </motion.header>

        <AnimatedSection variant={slideUp} delay={0.3}>
          <div className="card">
            <motion.h2
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Popular Destinations
            </motion.h2>
            <motion.p
              style={{
                marginBottom: "2rem",
                fontSize: "1.1rem",
                color: "#666",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Discover the diverse destinations that make Uttarakhand a
              traveler's paradise. From spiritual retreats to adventure hubs,
              from hill stations to wildlife sanctuaries - there's something for
              everyone.
            </motion.p>
            <motion.div
              className="features-grid"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {destinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  className="feature-card"
                  variants={staggerItem}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    rotateY: 5,
                    rotateX: -2,
                    transition: { duration: 0.3 },
                  }}
                  initial="rest"
                  animate="rest"
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
                  <motion.div
                    style={{
                      marginTop: "1rem",
                      padding: "0.75rem",
                      background: "#f8f9fa",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div style={{ marginBottom: "0.5rem" }}>
                      <strong>Best Time:</strong> {destination.bestTime}
                    </div>
                    <div>
                      <strong>Category:</strong> {destination.category}
                    </div>
                  </motion.div>
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
                      Read Travel Guide →
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Destinations;
