import loginModel from "../model/loginModel.js";
import bcrypt from "bcrypt";

export const createRegister = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;

    const checkemail = await loginModel.findOne({ userEmail });

    if (checkemail) {
      return res.status(400).json({ msg: "Email already exists" });
    }

   const passwordHash = await bcrypt.hash(userPassword, 10);

    const registerData = await loginModel.create({userName,userEmail,userPassword: passwordHash});
    console.log(registerData);

    res.status(201).json({ msg: "data inserted", registerData });
  } catch (err) {
    res.status(500).json({ msg: "something error" });
  }
};




export const createLogin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const checkemail = await loginModel.findOne({ userEmail });

    if (!checkemail) {
      res.status(400).json({ msg: "wrong email id" });
      return;
    }

    const passwordCheck = await bcrypt.compare(userPassword,checkemail.userPassword);

    if (!passwordCheck) {
      res.status(401).json({ msg: "invalid password" });
      return;
    }

      console.log('checkemail',checkemail);


    res.status(200).json({ msg: "login sucessfull",user:checkemail});
  } catch (err) {
    res.status(500).json({ msg: "something error" });
  }
};
