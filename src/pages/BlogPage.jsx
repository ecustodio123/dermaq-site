import { blogPosts } from "../data/siteContent";

function BlogPage() {
  return (
    <main className="page-main">
      <div className="page-hero">
        <div className="wrap">
          <h1>Blog</h1>
          <p>
            Ciencia, innovación y últimas tendencias en salud cutánea y capilar.
          </p>
        </div>
      </div>

      <div className="page-section dot-section">
        <div className="wrap blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.title}>
              <img src={post.image} alt={post.title} />
              <div className="blog-card__body">
                <span>{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-card__footer">
                  <small>{post.date}</small>
                  <button className="btn btn--light" type="button">
                    Leer más
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default BlogPage;
