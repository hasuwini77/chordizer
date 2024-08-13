"use client";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";

const SaveButton = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <Box sx={{ fontSize: 100, cursor: "pointer" }}>
      <SaveIcon color="secondary" fontSize="medium" onClick={handleClick} />
    </Box>
  );
};

export default SaveButton;
