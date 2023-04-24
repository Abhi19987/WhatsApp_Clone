import { Dialog, Box, Typography, List, ListItem } from "@mui/material";
import { styled } from "@mui/system";
import { useContext } from "react";
import { qrCodeImage } from "../../Constatnts/data";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";




const Component = styled(Box)`
  display: flex;
  padding: 64px 60px 60px;
  justify-content: space-between;
`;

const QRCode = styled("img")({
  height: 300,
  width: 300,
});

const Title = styled(Typography)`
  font-size: 28px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 20px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const Container = styled(Box)``;
const dialogStyle = {
  height: "96%",
  marginTop: "13%",
  width: "52%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialouge = () => {

  const { setAccount } = useContext(AccountContext);
  
  const onLoginSuccess = async() => {
    let abc = prompt("Name:");
    setAccount(abc);
    await addUser({name:abc});
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>Use WhatsApp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select WhatsApp web</ListItem>
            <ListItem>3. Tap on Link a Device</ListItem>
            <ListItem>
              4. Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box>
          <QRCode src={qrCodeImage} alt="qr code" onClick={onLoginSuccess} />
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialouge;
