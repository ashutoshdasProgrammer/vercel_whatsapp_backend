import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
  updateMessageReaction,
  markMessagesAsSeen,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
router.put("/react/:messageId", protectRoute, updateMessageReaction);
router.put("/seen/:senderId", protectRoute, markMessagesAsSeen);

export default router;