import React, { useState } from "react";
import styles from "./VideoForm.module.css";
function VideoForm() {
  const [post, setPost] = useState({ title: "", body: "" });
  return (
    <form>
      <div className="text-center mt-3">
        <input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Title"
          className={styles.MyInput}
        />
        <textarea
          className={styles.MyInput}
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Description"
        />
      </div>
      <div className="text-center mt-3">
        <button>Create post</button>
      </div>
    </form>
  );
}

export default VideoForm;
