import { Router } from "express";
import userRoutes from "./user-routes.js";

const appRouter = Router();
appRouter.use("/user", userRoutes);
appRouter.use("/user")
export default appRouter;