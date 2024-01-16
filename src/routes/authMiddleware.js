import { verifyToken } from '../utils/jwt.js';

export const verifyTokenMiddleware = (req, res, next) => {
  const bearerHeader = req.header('Authorization');
  const token = bearerHeader.split(' ')[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Unauthorized access: Token not provided' });
  }

  const decodedToken = verifyToken(token);

  if (!decodedToken) {
    return res
      .status(401)
      .json({ message: 'Unauthorized access: Invalid token' });
  }

  next();
};
