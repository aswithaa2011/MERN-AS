import userModel from "../models/model.js";

export const userController = async (req, res) => {
  try {
    const { userid, username } = req.body;

    const create = await userModel.create({ userid, username });

    res.status(201).json({ msg: "db created" });

  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ msg: "error" });
  }
};