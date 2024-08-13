import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontSize: "1.6rem",
        p: 2,
        width: "100%",
        backgroundColor: "#EBE9FA",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='58' height='66.981' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M57.994 92.097l-14.498-8.37.002-16.745 14.5-8.373 14.498 8.37-.002 16.745zm-58 0l-14.498-8.37.002-16.745 14.5-8.374 14.498 8.37-.002 16.745zM29.002 8.372L14.504.002l.002-16.745 14.5-8.373 14.498 8.37-.002 16.744zm29 16.748l-14.498-8.37.002-16.745 14.5-8.373L72.504.002l-.002 16.744zm-58 0l-14.498-8.37.002-16.745 14.5-8.374L14.504.001l-.002 16.745zm57.996 33.489L43.5 50.239l.002-16.745 14.5-8.374L72.5 33.49l-.002 16.745zm-29.004 16.74l-14.498-8.37.002-16.744 14.5-8.374 14.498 8.37-.002 16.745zm.004-33.488L14.5 33.49l.002-16.745 14.5-8.374 14.498 8.37-.002 16.745zm-29 16.747l-14.498-8.37.002-16.744 14.5-8.374L14.5 33.49l-.002 16.745z'  stroke-width='1' stroke='none' fill='hsla(258.5,59.4%,59.4%,1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`,
        backgroundBlendMode: "color-burn",
        "& h1": {
          color: "#fff",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <h1>Chordizer</h1>
    </Box>
  );
};

export default Header;
