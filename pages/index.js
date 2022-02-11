import React, {useState, useEffect} from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com";

// main entry compponent with the url of "/"
const Home = () => {
  const [posts, setPosts] = useState([]); //grab posts from api

  // grab posts
  useEffect(() => {
    axios
      .get(`${apiUrl}/posts?_limit=5`)
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));

    // cleanup
    return () => {
      setPosts([]);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>This is a nextjs app</h1>
      <Link href="/about">Go to the About Page</Link>
      {/* map through posts */}
      <div className={styles.cardContainer}>
        {posts.map(p => (
          <div
            onClick={() => console.log(p.id)}
            key={p.id}
            className={styles.card}
          >
            <h3>{p.title}</h3>
            <p style={{fontStyle: "italic"}}>{p?.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
