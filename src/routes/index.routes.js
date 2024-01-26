import express from 'express';
import { createUser, login } from '../controllers/users.controller.js';
import { verifyTokenMiddleware } from './authMiddleware.js';
import { createPost, getPosts } from '../controllers/posts.controller.js';
const router = express.Router();

router.post('/user', createUser);
router.post('/login', login);

router.get('/posts', verifyTokenMiddleware, getPosts);
router.post('/posts', verifyTokenMiddleware, createPost);

export default router;
