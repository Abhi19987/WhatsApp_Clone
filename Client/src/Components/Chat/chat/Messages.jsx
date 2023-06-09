import { Box, styled } from "@mui/material";
import ChatFooter from "./ChatFooter";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
    background-size: 20%;
`;

const Component=styled(Box)`
    height: 80vh;
`

const Messages = () => {
  return (
    <Wrapper>
        <Component>

        </Component>
        
      <ChatFooter/>
    </Wrapper>
  );
};

export default Messages;
