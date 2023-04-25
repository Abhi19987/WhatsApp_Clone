import { Box, styled, Typography } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

const Component = styled(Box)`
  align-items: center;
  display: flex;
  background: #ededed;
  padding: 8px 16px;
  height: 44px;
`;

const Icons = styled(Box)`
  margin-left: auto;
  & > svg {
    font-size: 24px;
    padding: 8px;
  }
`;

const ChatHeader = ({person}) => {
  return (
    <Component>
      <Box>
        <Typography>{person.name}</Typography>
        <Typography style={{ fontSize: "12px" }}>Offline</Typography>
      </Box>
      <Icons>
        <Search />
        <MoreVert />
      </Icons>
    </Component>
  );
};

export default ChatHeader;
