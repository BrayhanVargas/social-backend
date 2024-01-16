import express from 'express';
import { createUser, login } from '../controllers/users.controller.js';
import { verifyTokenMiddleware } from './authMiddleware.js';
import { createPost, getPosts } from '../controllers/posts.controller.js';
const router = express.Router();

router.post('/createUser', createUser);
router.post('/login', login);

router.get('/getPosts', verifyTokenMiddleware, getPosts);
router.post('/createPost', verifyTokenMiddleware, createPost);

export default router;
