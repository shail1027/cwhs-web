import { Link } from "react-router-dom";
import "./Header.css";
import {
  INTRO_SCHOOL,
  INTRO_ENTER,
  SCHOOL_NOTICE,
  EDU_NOTICE,
  TO_STUDENT,
} from "./Header.data";

const Header = () => {
  const handleRestrictedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("접근 권한이 없습니다.");
  };

  return (
    <header id="header">
      <div className="logo">
        <Link to="/" className="menu-a">
          <img
            src="../images/logo-row.png"
            width="220px"
            height="auto"
            alt="천월고등학교 로고(가로)"
          ></img>
        </Link>
      </div>
      <nav className="nav-div">
        <ul className="nav-nav">
          <li>
            <span className="gaid-school topmain">
              <Link to="/intro" className="menu-a">
                학교안내
              </Link>
            </span>
            <ul className="drop-down menu1">
              {INTRO_SCHOOL.map((props) => (
                <li key={props.id}>
                  <Link to={props.toLink} className="menu-a">
                    {props.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <span className="info-join topmain">
              <Link to="#" className="menu-a">
                입학안내
              </Link>
            </span>
            <ul className="drop-down menu2">
              {INTRO_ENTER.map((props) => (
                <li key={props.id} className="menu-a">
                  <Link to={props.toLink}>{props.menu}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <span className="info-student topmain">
              <Link to="#" onClick={handleRestrictedClick} className="menu-a">
                학생마당
              </Link>
            </span>
            <ul className="drop-down menu3">
              {TO_STUDENT.map((props) => (
                <li key={props.id}>
                  <Link
                    to={props.toLink}
                    onClick={handleRestrictedClick}
                    className="menu-a"
                  >{props.menu}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <span className="info-school topmain">
              <Link to="/notice" className="menu-a">
                학교공지
              </Link>
            </span>
            <ul className="drop-down menu4">
              {SCHOOL_NOTICE.map((props) => (
                <li key={props.id}>
                  <Link to={props.toLink} className="menu-a">
                    {props.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <span className="info-study topmain">
              <Link to="#" className="menu-a">
                교육정보
              </Link>
            </span>
            <ul className="drop-down menu5">
              {EDU_NOTICE.map((props) => (
                <li key={props.id} className="menu-a">
                  <Link to={props.toLink}>{props.menu}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <div className="search-div">
          <div className="search">
            <input type="text" placeholder="검색어를 입력하세요." />
            <img src="/images/ic_search.png" alt="검색" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
