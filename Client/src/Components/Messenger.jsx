import LoginDialouge from "./Account/LoginDialouge";
import { AppBar, styled, Toolbar, Box } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./Chat/ChatDialog";

const Component = styled(Box)`
  height: 100vh;
  background: #DCDCDC;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialouge />
        </>
      )}
    </Component>
  );
};

export default Messenger;
