import { useTheme } from "@emotion/react";
import SearchAppBar from "../SearchAppBar/SearchAppBar";
import MainTables from "../MainTables/MainTables";
import Footer from "../Footer/Footer";
import { 
  AppContainer, 
  HeaderContainer, 
  HeaderText 
} from "./styles-app";

function App() {
  const theme = useTheme();

  return (
    <>
      <AppContainer>
        <SearchAppBar />
        <HeaderContainer>
          <HeaderText 
            variant="h5"
            color={theme.palette.primary.main}
          >
            Normal Types
          </HeaderText>
        </HeaderContainer>
        <MainTables />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
