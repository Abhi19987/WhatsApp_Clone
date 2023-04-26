import { useEffect, useState } from "react";
import { getUsers } from "../../../service/api";
import Conversation from "./Conversation";
import { Box, styled, Divider } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  margin: 0 15px;
  height: 81vh;
  overflow: overlay;
`;

const Conversations = ({ text }) => {
  const { account } = useContext(AccountContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let resp = await getUsers();
      const filteredUser = resp.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredUser);
    };

    fetchData();
  }, [text]);

  return (
    <Component>
      {users.map(
        (item) =>
          item.name !== account && (
            <>
              <Conversation user={item} />
              <Divider />
            </>
          )
      )}
    </Component>
  );
};

export default Conversations;
