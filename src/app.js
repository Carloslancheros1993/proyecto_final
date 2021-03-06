import express from"express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import jwtValidate from "express-jwt";
import userRoutes from "./routes/users";
import rolesRoutes from "./routes/roles";
import authRoutes from "./routes/auth";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use('/api/v1/api/-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const optionsJWT = { secret: process.env.SECRET_KEY, algorithms: ["HS256"]};

app.use("/api/v1", jwtValidate(optionsJWT),userRoutes);
app.use("/api/v1", jwtValidate(optionsJWT),rolesRoutes);
app.use("/api/v1", authRoutes);

export default app;