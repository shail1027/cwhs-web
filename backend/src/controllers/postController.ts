import { Request, Response } from "express";
import { AuthRequest } from '../middlewares/authMiddleware';
import prisma from "../prisma";

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: 게시글 작성
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - category
 *               - title
 *               - content
 *             properties:
 *               category:
 *                 type: string
 *                 description: 게시판 종류 ("STUDENT_BOARD", "ADMIN_BOARD")
 *                 example: "STUDENT_BOARD"
 *               title:
 *                 type: string
 *                 example: "공지사항 제목"
 *               content:
 *                 type: string
 *                 example: "공지사항 내용"
 *  responses:
 *    201:
 *      description: 게시글 작성 성공
 *    403:
 *      description: 권한 없음 (학생이 공지사항에 쓰려고 시도함)
 */

export const createPost = async (req: AuthRequest, res: Response) => {
    try{
        const { category, title, content } = req.body;

        const userId = req.user.id;
        const userRole = req.user.role;

        if(userRole === "STUDENT" && category !== "STUDENT_BOARD"){
            return res.status(403).json({ message: "글을 작성할 수 없습니다." });
        }

        const newPost = await prisma.post.create({
            data: {
                category,
                title,
                content,
                author: {
                    connect: { id: userId }
                },
            },
        })
        return res.status(201).json(newPost);
    } catch (error) {
        return res.status(500).json({ message: "게시글 작성 중 오류가 발생했습니다." });
    }
}

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: 전체 게시글 목록 조회 (누구나 볼 수 있음)
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: 게시글 목록 반환
 */
export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { id: "desc" }, 
      include: {
        author: {
          select: { username: true }
        }
      }
    });

    return res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "서버 에러가 발생했습니다." });
  }
};