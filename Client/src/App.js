import Messenger from "./Components/Messenger";
import AccountProvider from "./context/AccountProvider";

const App = () => {
  return (
    <AccountProvider>
      <Messenger />
    </AccountProvider>
  );
};

export default App;
