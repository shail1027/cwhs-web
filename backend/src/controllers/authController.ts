import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../prisma";
import jwt from "jsonwebtoken";
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

/**
 * @swagger
 *  /api/auth/login:
 *    post:
 *      summary: 로그인
 *      tags: [Auth]
 *      description: 아이디와 비밀번호로 로그인하고 JWT 토큰을 발급받습니다.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - username
 *                - password
 *              properties:
 *                username:
 *                  type: string
 *                  example: "student01"
 *                password:
 *                  type: string
 *                  example: "password123!"
 *      responses:
 *        200:
 *          description: 로그인 성공 및 토큰 발급
 *        401:
 *          description: 비밀번호 불일치
 *        404:
 *          description: 존재하지 않는 유저
 *        500:
 *          description: 서버 에러
 */

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({ where: { username } });

    if (!user)
      return res.status(404).json({ message: "존재하지 않는 아이디입니다." });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });

    const JWT_SECRET = process.env.JWT_SECRET || "cwhs-secret-key";

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "1h" },
    );

    return res.status(200).json({
      message: "로그인 성공",
      token,
    });
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
    return res
      .status(500)
      .json({ message: "서버 오류로 로그인에 실패했습니다." });
  }
};
