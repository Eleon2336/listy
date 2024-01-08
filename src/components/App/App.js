import { Paper } from "@mui/material";
import SearchAppBar from "../SearchAppBar/SearchAppBar";

function App() {
  return (
    <>
      <div className="mainContainer" style={{ display: "flex", margin: "0", padding: "0", minHeight: "100dvh", flexDirection: "column" }}>

        <SearchAppBar />

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "1.2rem" }}>
          <h1>Normal Types</h1>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", flex: "6", padding: "0 1.5rem 1.5rem", gap: "1rem"  }}>
          <div style={{ flex: "1" }}>
            <Paper sx={{ width: "100%", height: "100%", backgroundColor: "lightgray" }}>
              <ul style={{ listStyle: "none", padding: "1.5rem" }}>
                <li style={{ padding: "0 0 0.5rem" }}>Eevee</li>
                <li style={{ padding: "0 0 0.5rem" }}>Rattata</li>
                <li style={{ padding: "0 0 0.5rem" }}>Meowth</li>
                <li style={{ padding: "0 0 0.5rem" }}>Ditto</li>
                <li style={{ padding: "0 0 0.5rem" }}>Taillow</li>
              </ul>
            </Paper>
          </div>
          <div style={{ flex: "1" }}>
            <Paper sx={{ width: "100%", height: "100%", backgroundColor: "lightgray" }}>
              <ul style={{ listStyle: "none", padding: "1.5rem" }}>
                <li style={{ padding: "0 0 0.5rem" }}><strong>Name: </strong>Eevee</li>
                <li style={{ padding: "0 0 0.5rem" }}><strong>DexNo: </strong>133</li>
                <li style={{ padding: "0 0 0.5rem" }}><strong>Type: </strong>normal</li>
                <li style={{ padding: "0 0 0.5rem" }}><strong>Egg-Group: </strong>field</li>
                <li style={{ padding: "0 0 0.5rem" }}><strong>Base Stat: </strong>325</li>
                <li style={{ padding: "0 0 0.5rem" }}><strong>Abilities: </strong>Run Away</li>
              </ul>
            </Paper>
          </div>
       </div>

        <footer style={{ flex: "1", display: "flex", justifyContent: "center", backgroundColor: "gray" }}>
          <h1>Footer</h1>
        </footer> 

      </div>
      
    </>
  );
}

export default App;
