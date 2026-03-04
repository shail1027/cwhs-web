import React from "react";
import styles from "./QuickMenu.module.css";
import { Link } from "react-router-dom";

import { FaSchool } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";


interface QuickMenuList {
    id: number;
    name: string;
    icon: string;
}

const QML: QuickMenuList[] = [
    {
        id: 1,
        name: "학교소개",
        icon: "FaSchool"
    },
    {
        id: 2,
        name: "각종양식",
        icon: "IoDocumentTextSharp"
    },
    {
        id: 3,
        name: "각종양식",
        icon: "IoDocumentTextSharp"
    }
]

const QuickMenu = () => {
    return (
        <div className={styles["container"]}>
            <ul className={styles["list"]}>
                {}
            </ul>
        </div>
    );
};

export default QuickMenu;