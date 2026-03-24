import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "천월고등학교 API 명세서",
      version: "1.0.0",
      description: "천월고 백엔드 API (Node.js + Express + Prisma)",
    },
    servers: [
      {
        url: "http://localhost:4000", 
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/controllers/*.ts", "./src/routes/*.ts"], 
};

export const specs = swaggerJsdoc(options);
export { swaggerUi };