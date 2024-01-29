import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import authModel from "../model/authModel.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    //Validation
    if (!name) {
      return res.send({ message: "the name is required" });
    }
    if (!email) {
      return res.send({ message: "the email is required" });
    }
    if (!password) {
      return res.send({ message: "The password is required" });
    }

    //check user

    const existingAdmin = await authModel.findOne({ email });

    if (existingAdmin) {
      return res.status(200).send({
        success: false,
        messgae: "already registerd please login",
      });
    }

    //registration of admin

    const hashedPassword = await hashPassword(password);

    const admin = await new authModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "you are successfully registered",
      admin,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Error in registration",
      error,
    });
  }
};

// Method Post login

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "invalid email or password",
      });
    }
    // check user if he has registerd or not
    const admin = await authModel.findOne({ email });
    if (!admin) {
      return res.status(404).send({
        success: false,
        message: "email is not registered",
      });
    }

    const match = await comparePassword(password, admin.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    //token
    const token = await JWT.sign({ _id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      admin: {
        name: admin.name,
        email: admin.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "Error in login page",
      error,
    });
  }
};
