import { AppContainer, FooterContainer, HeaderContainer, HeaderText } from "./styles-app";
import SearchAppBar from "../SearchAppBar/SearchAppBar";
import MainTables from "../MainTables/MainTables";

function App() {
  return (
    <>
      <AppContainer>
        <SearchAppBar />
        <HeaderContainer>
          <HeaderText variant="h5">Normal Types</HeaderText>
        </HeaderContainer>
        <MainTables />

        <FooterContainer>
          <h1>Footer</h1>
        </FooterContainer> 
      </AppContainer>
    </>
  );
}

export default App;
