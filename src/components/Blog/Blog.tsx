import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <h2>Our Blogs</h2>
      <p>
        Our blog is a treasure trove of informative and engaging articles
        written by our team of nutritionists, dietitians, and wellness experts.
        Here's what you can expect from our blog.
      </p>
      <div className="blog-wrapper">
        <div className="img-wrapper">
          <div className="blog-img">
            <img src="/Image (2).svg" alt="" className="blog-image" />
            <p>Weight Loss</p>
            <h5>The Benefits of Hydration for Weight Loss</h5>
            <p>
              Discover how staying hydrated can support your weight loss goals
              and improve overall health.
            </p>
            <img src="/Sub Container (1).svg" alt="" className="bottom-img" />
          </div>
          <div className="blog-img2">
            <img src="/Image (1).svg" alt="" className="blog-image" />
            <p>Mindful Eating</p>
            <h5>Cultivating a Healthy Relationship with Food</h5>
            <p>
              Learn how practicing mindful eating can help you develop a
              healthier relationship with food and improve your overall
              well-being.
            </p>
            <img src="/Sub Container.svg" alt="" className="bottom-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
