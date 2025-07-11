import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/post.scss';
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/wp-json/wp/v2/posts?_embed") // embed media
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="posts-container">
      <h1>WordPress Posts</h1>
      <div className="posts-grid">
        {posts.map((post) => {
          const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

          return (
            <div key={post.id} className="post-card">
              {featuredImage && (
                <img className="post-image" src={featuredImage} alt={post.title.rendered} />
              )}
              <Link to={`/blog/${post.slug}`}>
                <h2 className="post-title">{post.title.rendered}</h2>
              </Link>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              // dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
