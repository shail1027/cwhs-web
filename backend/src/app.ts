import express from "express";
import cors from "cors";
import { signup } from "./controllers/authController";
import { swaggerUi, specs } from "./swagger";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.post("/api/auth/signup", signup);

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
  console.log(`API 명세서: http://localhost:${PORT}/api-docs`);
});