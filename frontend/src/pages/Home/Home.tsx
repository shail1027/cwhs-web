import React from "react";
import MainBanner from "./components/Mainbanner";
import PostBanner from "./components/PostBanner";
import "./Home.css";

const Home = () => {
  const noticeData = [
    {
      id: 1,
      title: "20nn학년도 신입생(예비 고등학교 1학년) 입학준비금 신청 안내",
      date: "2026-03-02",
      link: "#",
    },
    {
      id: 2,
      title: "내진보강공사 및 외벽개선공사 안내",
      date: "2026-04-10",
      link: "#",
    },
    { id: 3, title: "도서관 이용 수칙 변경", date: "2026-04-11", link: "#" },
  ];
  const newsletterData = [
    {
      id: 1,
      title: "20nn학년도 제 3차 방과후학교 수강신청 안내",
      date: "2026-09-20",
      link: "#",
    },
    {
      id: 2,
      title: "20nn학년도 제2차(여름방학) 방과후학교 개강 및 수강료 안내",
      date: "2026-09-21",
      link: "#",
    },
    {
      id: 3,
      title: "20nn학년도 교육활동 침해행위 예방교육",
      date: "2026-09-21",
      link: "#",
    }
  ];
  const collegeData = [
    { id: 1, title: "수시 학교장 추천 전형", date: "2026-08-01", link: "#" },
    { id: 2, title: "서울 진로 박람회", date: "2026-08-05", link: "#" },
  ];

  return (
    <div className="home-container">
      <MainBanner />

      <div className="sub-menu">
        <PostBanner title="공지사항" toLink="/notice" posts={noticeData} />
        <PostBanner
          title="학사안내"
          toLink="/newsletter"
          posts={newsletterData}
        />
        <PostBanner title="진학자료" toLink="/college" posts={collegeData} />
      </div>
    </div>
  );
};

export default Home;
