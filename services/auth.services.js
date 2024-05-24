import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const AuthenticateUser = async (userData) => {
  const user = await prisma.user.findUnique({
    where: {
      username: userData.username,
      password: userData.password,
    },
  });

  if (!user) {
    throw new Error("Invalid username or password");
  }

  const { token } = generateToken({
    id: user.id,
    username: user.username,
  });
  const userInfo = {
    id: user.id,
    name: user.name,
    username: user.username,
  };

  return {
    userInfo: { ...userInfo },
    token: token,
    expiresIn: null,
  };
};

const generateToken = ({ id, username, email, agency }) => {
  try {
    const token = jwt.sign(
      {
        id,
        username,
        email,
        agency,
        iat: Math.floor(Date.now() / 1000),
      },
      process.env.JWT_SECRET
    );

    return {
      token,
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
