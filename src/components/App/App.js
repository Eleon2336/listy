import Box from '@mui/system/Box';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Box sx={ { width: "100vw", height: "100vh", backgroundColor: "pink" } }>
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
