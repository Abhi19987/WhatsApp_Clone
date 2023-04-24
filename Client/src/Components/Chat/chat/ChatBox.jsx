import { Box, styled } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";



const ChatBox=()=>{
    return (
        <Box>
            <ChatHeader/>
            <Messages/>
            This is ChatBox
        </Box>
    )
}

export default ChatBox;