import React from "react";
import { useRouter } from "next/router";

// this component has a catchall route
const BlogPostsPage = () => {
  const router = useRouter() 
  //we can use this to grab all the params of the url to do query to the api
  // console.log(router.query.slug)
  return <div>Blog Posts Page</div>;
};

export default BlogPostsPage;
