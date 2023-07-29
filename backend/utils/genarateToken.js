import jwt from "jsonwebtoken";

export const generateToken = (res, userId) => {
  const token = jwt.sign({ userId: userId }, process.env.JWT_TOKEN, {
    expiresIn: "2d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 2 * 24 * 60 * 60,
  });
};
