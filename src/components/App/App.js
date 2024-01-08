import { Paper } from "@mui/material";
import SearchAppBar from "../SearchAppBar/SearchAppBar";

function App() {
  return (
    <>
      <SearchAppBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ padding: "1rem" }}>Normal Types</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", height: "22rem", padding: "0 1.5rem 1.5rem", gap: "1rem"  }}>
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
    </>
  );
}

export default App;
