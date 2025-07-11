import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/home.scss";

export default function Homepage() {
  const [post, setPost] = useState(null);
  const [plainContent, setPlainContent] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/wp-json/wp/v2/pages?slug=home&_fields=title,content,id")
      // .get("https://eosisstg.wpenginepowered.com/wp-json/wp/v2/pages?slug=home&_fields=title,content,id")
      .then((res) => {
        const data = res.data[0];
        setPost(data);

        // Strip HTML from content
        const contentText = data.content.rendered.replace(/<[^>]+>/g, "");
        setPlainContent(contentText);
      })
      .catch((err) => console.error("Error fetching homepage:", err));
  }, []);

  return (
    <div className="home-container d-flex justify-content-center and align-items-center flex-column">
      {post ? (
        <>
          <h1>{post.title.rendered.replace(/<[^>]+>/g, "")}</h1>
          {/* <div className="text-center">{plainContent}</div> */}
          <div className="text-center">{post.content.rendered.replace(/<[^>]+>/g, "")}</div>
          <button className="btn btn-primary">Learn More</button>
        </>
      ) : (
        <p className="text-muted">No content available.</p>
      )}
    </div>
  );
}
