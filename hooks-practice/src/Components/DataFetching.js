import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  //   const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      //   .get("https://jsonplaceholder.typicode.com/posts") // to display all posts
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        // setPosts(res.data);
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch post</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
// DataFetching = 12, 13, 14 - data fetching with useeffect