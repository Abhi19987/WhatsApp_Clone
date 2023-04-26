import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation } from "../../../service/api";
const Text = styled(Typography)`
  margin: 10px 0;
`;

const Person = styled(Box)`
  cursor: pointer;
`;

const Conversation = ({ user }) => {
  const { setPerson, account } = useContext(AccountContext);

  const getUsers = async () => {
    setPerson(user);
    await setConversation({ senderId: account, receiverId: user.name });
  };

  return (
    <Person onClick={() => getUsers()}>
      <Text>{user.name}</Text>
    </Person>
  );
};

export default Conversation;
