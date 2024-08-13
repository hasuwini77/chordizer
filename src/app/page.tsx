import ChordGenerator from "./components/ChordGenerator";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box
      sx={{
        background: "#7A89C2",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <main>
        <div>
          <ChordGenerator />
        </div>
      </main>
    </Box>
  );
}
