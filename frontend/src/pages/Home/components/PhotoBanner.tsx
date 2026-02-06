import { Link } from "react-router-dom";
import type { Post } from "../../../types";
import "./PhotoBanner.css"

interface PhotoBannerProps {
  section_category: string;
  section_link: string;
  posts: Post[];
}

const PhotoBannerLeft = ({
  section_category,
  section_link,
  posts,
}: PhotoBannerProps) => {
  return (
    <div className="photo-section">
      <div className="section-header">
        <h3>
          <Link to={section_link}>{section_category}</Link>
        </h3>
        <span className="accent-line"></span>
      </div>
      <div className="gallery-grid">
        {posts.map((props) => (
          <div className="gallery-item" key={props.id}>
            <Link to={props.link}>
              <img src={props.image}></img>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoBannerLeft;
