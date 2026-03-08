import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

interface FooterLink {
  id: number;
  linkto: string;
  name: string;
}

const FL: FooterLink[] = [
  {
    id: 1,
    linkto: "#",
    name: "개인정보처리방침",
  },
  {
    id: 2,
    linkto: "#",
    name: "저작권보호정책",
  },
  {
    id: 3,
    linkto: "#",
    name: "이메일주소무단수집거부",
  },
  {
    id: 4,
    linkto: "#",
    name: "영상기기운영 및 관리방침",
  },
];

function Footer() {
  return (
    <footer>
      <div className={styles["links"]}>
        {FL.map((item) => (
          <Link key={item.id} to={item.linkto} className={styles["linkto"]}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className={styles["content"]}>
        <div className={styles["content-img"]}>
          <img src="../images/logo-bottom.png"></img>
        </div>
        <div className={styles["info"]}>
          <div className={styles["info-group"]}>
            <p>
              <strong>서울특별시 화각구 백양로 472</strong>
            </p>
            <p>교무실 : TEL 08-5481-5471 | FAX 00-5929-9177</p>
            <p>행정실 : TEL 08-8143-1905 | FAX 00-4204-4009</p>
          </div>
          <div className={styles["copyright"]}>
            <p>
              본 페이지는 개인 포토폴리오용으로 제작되었으며 모든 상표명, 지명
              등은 허구입니다.
            </p>
            <p>Copyright 2023 © shail1027 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
