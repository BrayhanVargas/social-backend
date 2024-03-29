import { Post } from '../models/posts.model.js';

export const getPostsById = async (req, res) => {
  try {
    const { userId } = req.query;
    const posts = await Post.findAll({
      where: {
        userId
      }
    });
    if (posts) {
      res.json(posts);
    } else {
      res.status(401).json({ error: 'Invalid userId' });
    }
  } catch (error) {
    console.error('Error getting posts from db', error);
    res.status(500).json({ error: 'Error getting posts from db' });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error('Error getting all posts from db', error);
    res.status(500).json({ error: 'Error getting posts from db' });
  }
};

export const createPost = async (req, res) => {
  try {
    const { userId, title, content } = req.body;

    const newPost = await Post.create({
      userId,
      title,
      content
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating a new post:', error);
    res.status(500).json({ error: 'Error creating a new post' });
  }
};
