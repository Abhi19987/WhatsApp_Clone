import { Box, Dialog, styled } from "@mui/material";
import EmptyChat from "./chat/emptyChat";
import Menu from "./Menu/Menu";
import ChatBox from "./chat/ChatBox";

const dialogStyle = {
  height: "96%",
  width: "100%",
  margin: "20px",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius: 0,
};

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 450px;
`;

const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialog = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          {/* <EmptyChat /> */}
          <ChatBox/>
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
