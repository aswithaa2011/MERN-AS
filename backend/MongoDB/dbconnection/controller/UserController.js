import userModel from "../models/model.js";

export const userController = async (req, res) => {
  try {
    const { userid, username } = req.body;


const create = await userModel.create({ userid, username });

    console.log(req.body)

    res.status(201).json({ msg: "db created" });

  } catch (error) 
  {
    console.log("error",error);
    res.status(500).json({ msg: "error" });
  }
};


