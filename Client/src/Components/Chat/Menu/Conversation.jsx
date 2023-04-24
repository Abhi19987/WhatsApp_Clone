import { Box, Typography, styled } from "@mui/material";

const Text = styled(Typography)`
  margin: 10px 0;
`;

const Conversation = ({ user }) => {
  return (
    <Box>
      <Text>{user.name}</Text>
    </Box>
  );
};

export default Conversation;
