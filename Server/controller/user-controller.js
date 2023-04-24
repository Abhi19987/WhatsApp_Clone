import user from "../modal/user.js";

export const addUser = async (req, res) => {
  try {
    let exist = await user.find({ name: req.body.name });
    if (exist.length != 0) {
      res.status(200).json({ msg: "user already exist" });
      return;
    }

    const newUser = new user(req.body);
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const Users = await user.find({});
    return res.status(200).json(Users);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
