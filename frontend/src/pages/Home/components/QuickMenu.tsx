import React from "react";
import styles from "./QuickMenu.module.css";

import { FaSchool } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";


interface QuickMenuList {
    name: string;
    icon: string;
    id: number;
}

const QML: QuickMenuList = [
    {
        id: 1,
        name: "학교소개",
        icon: "FaSchool"
    },
    {
        id: 2,
        name: "각종양식",
        icon: "IoDocumentTextSharp"
    }
]

const QuickMenu = () => {
    return (
        <div className={styles["container"]}>

        </div>
    );
};

export default QuickMenu;