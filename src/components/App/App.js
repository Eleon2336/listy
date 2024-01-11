import { useTheme } from "@emotion/react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const { pathname } = location;

  let locText = '';
  switch (pathname) {
    case '/':
      locText = 'Select a Pokemon type';
      break;
    case '/normal':
      locText = 'Normal Types';
      break;
    case '/grass':
      locText = 'Grass Types';
      break;
    case '/fire':
      locText = 'Fire Types';
      break;
    case '/water':
      locText = 'Water Types';
      break;
    default:
      locText = 'Page not found';
  }

  return (
    <>
      <AppContainer>
        <SearchAppBar />
        <HeaderContainer>
          <HeaderText 
            variant="h5"
            color={theme.palette.primary.main}
          >
            {locText}
          </HeaderText>
        </HeaderContainer>
        <MainTables pathname={pathname} />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
