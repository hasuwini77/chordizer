import ChordGenerator from "./components/ChordGenerator";
import Box from "@mui/material/Box";
import Header from "./components/Header";

export default function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <ChordGenerator />
      </Box>
    </Box>
  );
}
