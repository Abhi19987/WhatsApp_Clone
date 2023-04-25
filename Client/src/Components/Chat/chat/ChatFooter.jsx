import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 15px;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  height: 20px;
  font-size: 14px;
`;

const ChatFooter = () => {
  return (
    <Container>
      <EmojiEmotionsOutlined />
      <AttachFile />
      <Search>
        <InputField placeholder="Type a Message" />
      </Search>
      <Mic />
    </Container>
  );
};

export default ChatFooter;
