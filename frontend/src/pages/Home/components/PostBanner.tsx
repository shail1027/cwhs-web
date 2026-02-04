import { Link } from "react-router-dom";
import type { Post } from "../../../types";

interface MiniBoardProps {
  title: string;
  toLink: string;
  posts: Post[];
}

const PostBanner = ({ title, toLink, posts }: MiniBoardProps) => {
  return (
    <div className="sub-menu1">
      <div className="sub-menu-header">
        <h3>
          <Link to={toLink}>{title}</Link>
        </h3>
        <span className="accent-line"></span>
        <div className="post-ul">
          <ul className="notice">
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={post.link}>{post.title}</Link>
                <span className="date">{post.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
