import { Link } from "react-router-dom";
import "./Header.css";

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
            src="../public/images/logo-row.png"
            width="220px"
            height="auto"
            alt="천월고등학교 로고(가로)"
          ></img>
        </Link>
      </div>
      <nav className="nav-div">
        <ul className="nav-nav">
          {/* 1. 학교안내 */}
          <li>
            <span className="gaid-school topmain">
              <Link to="/intro" className="menu-a">
                학교안내
              </Link>
            </span>
            <ul className="drop-down menu1">
              <li>
                <Link to="/intro" className="menu-a">
                  학교소개
                </Link>
              </li>
              <li>
                <Link to="#" className="menu-a">
                  교육목표
                </Link>
              </li>
              <li>
                <Link to="#" className="menu-a">
                  학교법인
                </Link>
              </li>
              <li>
                <Link to="#" className="menu-a">
                  학사일정
                </Link>
              </li>
            </ul>
          </li>

          {/* 2. 입학안내 */}
          <li>
            <span className="info-join topmain">
              <Link to="#" className="menu-a">
                입학안내
              </Link>
            </span>
            <ul className="drop-down menu2">
              <li>
                <Link to="#" className="menu-a">
                  신입학
                </Link>
              </li>
              <li>
                <Link to="#" className="menu-a">
                  전/편입학
                </Link>
              </li>
            </ul>
          </li>

          {/* 3. 학생마당 */}
          <li>
            <span className="info-student topmain">
              <Link to="#" onClick={handleRestrictedClick} className="menu-a">
                학생마당
              </Link>
            </span>
            <ul className="drop-down menu3">
              <li>
                <Link to="#" onClick={handleRestrictedClick} className="menu-a">
                  학생회
                </Link>
              </li>
              <li>
                <Link to="#" onClick={handleRestrictedClick} className="menu-a">
                  동아리활동
                </Link>
              </li>
              <li>
                <Link to="#" onClick={handleRestrictedClick} className="menu-a">
                  교과자료실
                </Link>
              </li>
            </ul>
          </li>

          {/* 4. 학교공지 */}
          <li>
            <span className="info-school topmain">
              <Link to="/notice" className="menu-a">
                학교공지
              </Link>
            </span>
            <ul className="drop-down menu4">
              <li>
                <Link to="/notice" className="menu-a">
                  공지사항
                </Link>
              </li>
              <li>
                <Link to="#" className="menu-a">
                  가정통신문
                </Link>
              </li>
              <li>
                <Link to="#" className="menu-a">
                  급식소식
                </Link>
              </li>
              <li>
                <Link to="#" className="menu-a">
                  각종양식
                </Link>
              </li>
              <li>
                <Link to="#" className="menu-a">
                  행정실소식
                </Link>
              </li>
            </ul>
          </li>

          {/* 5. 교육정보 */}
          <li>
            <span className="info-study topmain">
              <Link to="#" className="menu-a">
                교육정보
              </Link>
            </span>
            <ul className="drop-down menu5">
              <li>
                <Link to="#" className="menu-a">
                  진학자료
                </Link>
              </li>
              <li>
                <Link to="#" className="menu-a">
                  진학상담
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* 우측 검색창 */}
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
