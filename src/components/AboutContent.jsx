import { useEffect, useState } from "react";
import '../styles/about.scss'; 
import axios from "axios";

export default function Aboutpage() {
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState("loading"); // 'loading', 'success', 'error'

  useEffect(() => {
    axios
      .get("http://localhost:8000/wp-json/wp/v2/pages?slug=about-us&_fields=title,content,id")
      .then((res) => {
        setPost(res.data[0]); // We're only expecting one page for slug=home
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="about-container d-flex justify-content-center and align-items-center flex-column">
      {post ? (
        <>
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div className="text-center" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <button className="btn btn-primary">Learn More</button>

        </>
      ) : (
        <p className="text-muted">No content available.</p>
      )}
    </div>
  );
}
