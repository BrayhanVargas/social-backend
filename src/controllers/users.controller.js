// import User from '../models/users.model.js';
import { User } from '../models/users.model.js';
import { generateToken } from '../utils/jwt.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
        password
      }
    });

    if (user) {
      const token = generateToken(user.id);
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error trying login', error);
    res.status(500).json({ error: 'Error trying login' });
  }
};

export const createUser = async (req, res) => {
  try {
    const { fullName, age, email, password } = req.body;

    // Check if the email already exists
    console.log('email', email);
    const existingUser = await User.findOne({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const newUser = await User.create({
      fullName,
      age,
      email,
      password
    });

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error('Error creating a new user:', error);
    res.status(500).json({ error: 'Error creating a new user' });
  }
};

export const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({
      where: {
        id: userId
      }
    });

    if (user) {
      res..json({ user });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error getting user from db', error);
    res.status(500).json({ error: 'Error getting user from db' });
  }
};