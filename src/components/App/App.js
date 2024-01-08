import { Container, Paper, Typography } from "@mui/material";
import SearchAppBar from "../SearchAppBar/SearchAppBar";
import Main from "../Main/Main";

function App() {
  return (
    <>
      <div className="mainContainer" style={{ display: "flex", margin: "0", padding: "0", minHeight: "100dvh", flexDirection: "column" }}>

        <SearchAppBar />
        <Container 
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Typography
            variant="h5"
            sx={{
              p: "1.2rem" 
            }}
          >
            Normal Types
          </Typography>
        </Container>
        <Main />

        <footer style={{ flex: "1", display: "flex", justifyContent: "center", backgroundColor: "gray" }}>
          <h1>Footer</h1>
        </footer> 

      </div>
      
    </>
  );
}

export default App;
