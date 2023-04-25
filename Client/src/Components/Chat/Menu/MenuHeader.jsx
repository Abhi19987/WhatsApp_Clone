import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Chat as MessageIcon, MoreVert } from "@mui/icons-material";

const Component = styled(Box)`
  align-items: center;
  display: flex;
  background: #ededed;
  padding: 8px 16px;
  height: 44px;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  align-items: center;
  display: flex;
`;

const Account = styled(Box)`
  color: #00bfa5;
`;

const MenuHeader = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      <Account>{account}</Account>
      <Wrapper>
        <MessageIcon />
        <MoreVert />
      </Wrapper>
    </Component>
  );
};

export default MenuHeader;
