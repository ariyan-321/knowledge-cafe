import { useEffect, useState } from "react";
import Blog from "./blog";

export default function Blogs({handleAddToBookmarks,handleMarkAsRead}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./public/data.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      {
        blogs.map((blog,i)=> <Blog key={i} blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blog>)
      }
      
    </div>
  );
}
