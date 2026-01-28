function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the fundamentals of React and build your first component",
      date: "January 15, 2026",
      author: "John Doe",
      category: "Tutorial",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Modern Web Development Trends",
      excerpt: "Exploring the latest trends in web development for 2026",
      date: "January 10, 2026",
      author: "Jane Smith",
      category: "News",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Deploying to GitHub Pages",
      excerpt: "A complete guide to deploying React apps on GitHub Pages",
      date: "January 5, 2026",
      author: "John Doe",
      category: "Guide",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Best Practices for React Hooks",
      excerpt: "Master React Hooks with these essential best practices",
      date: "December 28, 2025",
      author: "Jane Smith",
      category: "Tutorial",
      readTime: "7 min read",
    },
  ];

  return (
    <section className="page">
      <div className="container">
        <header>
          <h1>📝 Blog</h1>
          <p className="subtitle">Latest articles and tutorials</p>
        </header>

        <div className="card">
          <h2>Recent Posts</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            {blogPosts.map((post) => (
              <article
                key={post.id}
                style={{
                  padding: "2rem",
                  background: "#f8f9fa",
                  borderRadius: "15px",
                  border: "1px solid #e9ecef",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <span
                      style={{
                        background: "#667eea",
                        color: "white",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "20px",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        marginRight: "1rem",
                      }}
                    >
                      {post.category}
                    </span>
                    <h3
                      style={{
                        color: "#333",
                        marginTop: "0.5rem",
                        fontSize: "1.5rem",
                      }}
                    >
                      {post.title}
                    </h3>
                  </div>
                </div>
                <p
                  style={{
                    color: "#666",
                    lineHeight: "1.6",
                    marginBottom: "1rem",
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    fontSize: "0.875rem",
                    color: "#999",
                    flexWrap: "wrap",
                  }}
                >
                  <span>📅 {post.date}</span>
                  <span>✍️ {post.author}</span>
                  <span>⏱️ {post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
