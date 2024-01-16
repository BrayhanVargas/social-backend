import jwt from 'jsonwebtoken';

const secretKey = 'secretKey';

const generateToken = userId => {
  const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
  return token;
};

const verifyToken = token => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};

export { generateToken, verifyToken };
