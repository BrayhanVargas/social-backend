import express from 'express';
import { createUser, login } from '../controllers/users.controller.js';
import { verifyTokenMiddleware } from './authMiddleware.js';
import {
  createPost,
  getAllPosts,
  getPostsById
} from '../controllers/posts.controller.js';
const router = express.Router();

router.post('/user', createUser);
router.post('/login', login);

router.get('/posts/all', verifyTokenMiddleware, getAllPosts);
router.get('/posts', verifyTokenMiddleware, getPostsById);
router.post('/posts', verifyTokenMiddleware, createPost);

export default router;
