import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontSize: "1.5rem",
        borderBottom: "2px solid rgba(171, 71, 188, 0.6)",
        boxShadow:
          "0 4px 8px rgba(180, 82, 205, 0.5), 0 0 25px rgba(180, 82, 205, 0.4)",
        p: 0.5,
        width: "100%",
        height: { xs: "19vh", sm: "12vh" },
        backgroundColor: "#E0BBE4",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(3) rotate(175)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(351,80.6%,81.8%,1)'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'  stroke-width='7' stroke='hsla(338,24.4%,91.2%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`,
        backgroundSize: "200% 200%",
        animation: "moveBackground 50s ease infinite",
        backgroundBlendMode: "soft-light",
        "& h1": {
          color: "#fff",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
        },
        "@media (min-width: 800px)": {
          animation: "moveBackground 200s ease infinite",
        },
        "@keyframes moveBackground": {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "50%": {
            backgroundPosition: "100% 100%",
          },
          "100%": {
            backgroundPosition: "0% 0%",
          },
        },
      }}
    >
      <h1>Chordizer</h1>
    </Box>
  );
};

export default Header;
