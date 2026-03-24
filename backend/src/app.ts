import express from "express";
import cors from "cors";
import { swaggerUi, specs } from "./swagger";
import autoRoutes from "./routes/autoRoutes";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api/auth", autoRoutes);

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
  console.log(`API 명세서: http://localhost:${PORT}/api-docs`);
});