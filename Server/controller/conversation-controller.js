import conversation from "../modal/conversation.js";

export const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const exist = await conversation.find({
      members: [senderId, receiverId],
    });
    if (exist.length != 0) {
      return res.status(200).json("conversation already exist");
    }

    const newConversation = new conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();
    return res.status(200).json("Conversation saved successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
