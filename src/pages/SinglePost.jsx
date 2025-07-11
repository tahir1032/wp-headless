import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../styles/post.scss';

function SinglePost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((res) => {
        if (res.data.length > 0) {
          setPost(res.data[0]);
        } else {
          setError("Post not found");
        }
      })
      .catch((err) => setError(err.message));
  }, [slug]);

  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Loading...</div>;

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const author = post._embedded?.['author']?.[0]?.name;
  const date = new Date(post.date).toLocaleDateString();
  const categories = post._embedded?.['wp:term']?.[0] || [];

  return (

    <div className="single-post">

<h1 className="single-post-heading text-center mb-15">{post.title.rendered}</h1>

      {featuredImage && (
        <img className="single-post-image" src={featuredImage} alt={post.title.rendered} />
      )}

      <h4 className="single-post-title">{post.title.rendered}</h4>
      <div className="single-post-meta">
        <span>🖊️ {author}</span>
        <span>📅 {date}</span>
        <span>🏷️ {categories.map(cat => cat.name).join(', ')}</span>
      </div>

      <div
        className="single-post-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}

export default SinglePost;