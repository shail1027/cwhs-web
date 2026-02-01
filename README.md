## cwhs-web

> 기존 HTML/CSS/JS로 제작되었던 정적 웹사이트를 **React**와 **Spring Boot** 기반의 모던 풀스택 애플리케이션으로 마이그레이션한 프로젝트입니다.

<br/>

## 🛠 Tech Stack

### Frontend
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">

### Backend
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white"> <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">

### Tools
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/IntelliJ IDEA-000000?style=for-the-badge&logo=IntelliJ IDEA&logoColor=white">

<br/>

## 📂 Project Structure
이 프로젝트는 **Monorepo** 구조를 따르며, 프론트엔드와 백엔드가 하나의 레포지토리에서 관리됩니다.

```bash
cwhs-web/
├── frontend/          # React Project (Vite + TypeScript)
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/           # Spring Boot Project
│   ├── src/
│   ├── build.gradle
│   └── ...
└── README.md