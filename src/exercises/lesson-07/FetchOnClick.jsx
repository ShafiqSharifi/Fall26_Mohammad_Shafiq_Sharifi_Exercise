
import { useState } from "react";
import { getSinglePost } from "./api";
import "./Lesson07Styles.css";

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleClick() {
    setLoading(true);
    setError("");

    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (error) {
      setPost(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>

      <button
        className="button"
        type="button"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get post"}
      </button>

      <div className="content">
        {error && <p role="alert">{error}</p>}

        {post && (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}
