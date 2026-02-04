import React from "react";
import MainBanner from "./components/Mainbanner";
import PostBanner from "./components/PostBanner";
import "./Home.css";

const Home = () => {
  const noticeData = [
    {
      id: 1,
      title: "2026학년도 신입생 모집 안내",
      date: "2026-03-02",
      link: "#",
    },
    { id: 2, title: "중간고사 시간표 안내", date: "2026-04-10", link: "#" },
    { id: 3, title: "도서관 이용 수칙 변경", date: "2026-04-11", link: "#" },
  ];
  const newsletterData = [
    { id: 1, title: "10월 급식 신청 안내", date: "2026-09-20", link: "#" },
    { id: 2, title: "현장체험학습 동의서", date: "2026-09-21", link: "#" },
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
        <PostBanner title="가정통신문" toLink="/newsletter" posts={newsletterData} />
        <PostBanner title="진학자료" toLink="/college" posts={collegeData} />
      </div>
    </div>
  );
};

export default Home;
