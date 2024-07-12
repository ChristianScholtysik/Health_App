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
            <img src="/public/Image.png" alt="" className="blog-image" />
            <p></p>
            <h5></h5>
            <p></p>
            <img
              src="/public/Sub Container.png"
              alt=""
              className="bottom-img"
            />
          </div>
          <div className="blog-img2">
            <img src="/public/Image (1).png" alt="" className="blog-image" />
            <p></p>
            <h5></h5>
            <p></p>
            <img
              src="/public/Sub Container (1).png"
              alt=""
              className="bottom-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
