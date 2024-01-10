import { AppContainer, FooterContainer, HeaderContainer, HeaderText } from "./styles-app";
import SearchAppBar from "../SearchAppBar/SearchAppBar";
import MainTables from "../MainTables/MainTables";
import { useTheme } from "@emotion/react";

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

        <FooterContainer>
          <h1 style={{ color: "#0097a7" }}>Footer</h1>
        </FooterContainer> 
      </AppContainer>
    </>
  );
}

export default App;
