import express, { Response } from "express";
import { signup, login } from "../controllers/authController";
import { authenticateUser, AuthRequest } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

/**
 * @swagger
 *  /api/auth/me:
 *  get:
 *  summary: 내 정보 조회 (토큰 테스트용)
 *  tags: [Auth]
 *  security:
 *  - bearerAuth: [] 
 *  responses:
 *    200:
 *      description: 인증 성공 및 내 정보 반환
 *    401:
 *      description: 토큰 없음
 *    403:
 *      description: 토큰 만료/조작됨
 */
router.get('/me', authenticateUser, (req: AuthRequest, res: Response) => {
  return res.status(200).json({
    message: '인증된 사용자입니다!',
    userInfo: req.user,
  });
});

export default router;