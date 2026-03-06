import React from "react";
import styles from "./QuickMenu.module.css";
import { Link } from "react-router-dom";

import { FaSchool } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

interface QuickMenuList {
  id: number;
  name: string;
  icon: React.ElementType;
  linkto: string;
}

const QML: QuickMenuList[] = [
  {
    id: 1,
    name: "학교소개",
    icon: FaSchool,
    linkto: "introduce",
  },
  {
    id: 2,
    name: "각종양식",
    icon: IoDocumentTextSharp,
    linkto: "#",
  },
  {
    id: 3,
    name: "학사일정",
    icon: FaCalendarAlt,
    linkto: "#",
  },
  {
    id: 4,
    name: "오시는 길",
    icon: FaMapMarkedAlt,
    linkto: "#",
  },
];

const QuickMenu = () => {
  return (
    <div className={styles["container"]}>
      <ul className={styles["list"]}>
        {QML.map((props) => {
          const Icon = props.icon;
          return (
            <li key={props.id}>
              {" "}
              <Link to={props.linkto}>
                <div className={styles["list-item"]}>
                  <Icon />
                  <p>{props.name}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuickMenu;
