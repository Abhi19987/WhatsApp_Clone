import { Box, Dialog, styled } from "@mui/material";
import EmptyChat from "./chat/emptyChat";
import Menu from "./Menu/Menu";
import ChatBox from "./chat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const dialogStyle = {
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
  width: 76%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialog = () => {
  const { person } = useContext(AccountContext);

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          {!!person ? <ChatBox /> : <EmptyChat />}
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
