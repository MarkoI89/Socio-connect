import express from "express";
import {login, register} from "../controllers/auth.js";
import verifyToken from "../middleware/auth.js"

const router = express.Router();

router.post("/register", register)
router.post("/login", login );
router.get('/verify', verifyToken, (req, res) => {
    console.log(`req.payload`, req.payload);
    res.status(200).json(req.payload);
});

export default router;