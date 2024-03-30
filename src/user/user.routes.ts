import { Router } from "express";
import * as uc from "./user.controller";
const router = Router();
router.get("/userInfo", uc.userInfo);
export default router;
