import { Router } from "express";
import diagnostics from "./diagnostics";

const router = Router();

router.use("/diagnostics", diagnostics);

export default router;
