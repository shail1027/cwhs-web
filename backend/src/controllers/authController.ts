import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../prisma";

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: 회원가입 (학생)
 *     tags: [Auth]
 *     description: 아이디와 비밀번호를 받아 새로운 학생 계정을 생성합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: 로그인 아이디
 *                 example: "student01"
 *               password:
 *                 type: string
 *                 description: 비밀번호 (암호화되어 저장됨)
 *                 example: "password123!"
 *     responses:
 *       201:
 *         description: 회원가입 성공
 *       400:
 *         description: 필수 입력값 누락
 *       409:
 *         description: 이미 존재하는 아이디
 *       500:
 *         description: 서버 에러
 */

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "아이디와 비밀번호를 모두 입력해주세요." });
    }

    const existingUser = await prisma.user.findUnique({ where: { username } });

    if (existingUser)
      return res.status(400).json({ message: "이미 존재하는 아이디입니다." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        role: "STUDENT",
      },
    });

    return res.status(201).json({
      message: "회원가입 성공",
      userId: newUser.id,
      username: newUser.username,
      role: newUser.role,
    });
  } catch (error) {
    console.error("회원가입 중 오류 발생:", error);
    return res
      .status(500)
      .json({ message: "서버 오류로 회원가입에 실패했습니다." });
  }
};
