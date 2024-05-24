import { AuthenticateUser } from "../services/auth.services.js";

export const loginController = async (req, res) => {
  try {
    const userData = req.body;
    console.log(userData);
    const authenticatedUser = await AuthenticateUser(userData);
    const { userInfo, token } = authenticatedUser;

    return res.status(200).json({
      userInfo,
      token,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ error: err.message });
  }
};
