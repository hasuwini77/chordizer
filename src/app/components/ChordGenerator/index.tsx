"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

type Chord = {
  name: string;
  type: "major" | "minor";
  image: string;
};

const chordsInKeyC: Chord[] = [
  { name: "C", type: "major", image: "/chords/CMaj.png" },
  { name: "Dm", type: "minor", image: "/chords/Dmin.png" },
  { name: "Em", type: "minor", image: "/chords/Emin.png" },
  { name: "F", type: "major", image: "/chords/FMaj.png" },
  { name: "G", type: "major", image: "/chords/GMaj.png" },
  { name: "Am", type: "minor", image: "/chords/Amin.png" },
];

const chordsInKeyG: Chord[] = [
  { name: "G", type: "major", image: "/chords/GMaj.png" },
  { name: "Am", type: "minor", image: "/chords/Amin.png" },
  { name: "Bm", type: "minor", image: "/chords/Bmin.png" },
  { name: "C", type: "major", image: "/chords/CMaj.png" },
  { name: "D", type: "major", image: "/chords/DMaj.png" },
  { name: "Em", type: "minor", image: "/chords/Emin.png" },
];

const chordsInKeyD: Chord[] = [
  { name: "D", type: "major", image: "/chords/DMaj.png" },
  { name: "Em", type: "minor", image: "/chords/Emin.png" },
  { name: "F#m", type: "minor", image: "/chords/F-sharpmin.png" },
  { name: "G", type: "major", image: "/chords/GMaj.png" },
  { name: "A", type: "major", image: "/chords/AMaj.png" },
  { name: "Bm", type: "minor", image: "/chords/Bmin.png" },
];

const chordGroups = [chordsInKeyC, chordsInKeyG, chordsInKeyD];

// Generate a random chord progression of 4 unique chords from the same key
function generateChordProgression(): Chord[] {
  const numChords = 4;
  const selectedGroup =
    chordGroups[Math.floor(Math.random() * chordGroups.length)];
  const shuffledChords = [...selectedGroup].sort(() => 0.5 - Math.random());

  return shuffledChords.slice(0, numChords);
}

export default function ChordGenerator() {
  const [progression, setProgression] = useState<Chord[]>([]);

  useEffect(() => {
    const savedProgression = localStorage.getItem("chordProgression");
    if (savedProgression) {
      setProgression(JSON.parse(savedProgression));
    }
  }, []);

  const handleClick = () => {
    const newProgression = generateChordProgression();
    setProgression(newProgression);
  };

  const handleSave = () => {
    localStorage.setItem("chordProgression", JSON.stringify(progression));
    console.log("Progression saved!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClick}
        sx={{
          fontSize: { xs: "0.9rem", sm: "1.2rem" },
          px: { xs: 2, sm: 3 },
          py: { xs: 1, sm: 2 },
          minWidth: { xs: "150px", sm: "200px" },
          borderRadius: "10px",
          boxShadow: `
                      0 4px 2px rgba(255, 105, 180, 0.1),  
                      0 0 4px rgba(255, 105, 180, 0.2),  
                      0 0 11px rgba(138, 43, 226, 0.2),   
                      0 0 7px rgba(138, 43, 226, 0.4)  
                    `,
        }}
      >
        Generate My Song
      </Button>

      {progression.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            maxHeight: "calc(100vh - 200px)", // Ensure content fits within 100vh
            overflowY: "auto", // Allow scrolling within the box if needed
            gap: 2,
          }}
        >
          {/* Mobile Swiper */}
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              width: "100%",
              maxWidth: "400px",
              position: "relative",
            }}
          >
            <style>
              {`
                .swiper-pagination-bullet {
                  background-color: #7b4f9d !important;
                }
                .swiper-pagination-bullet-active {
                  background-color: #9c27b0 !important;
                }
              `}
            </style>
            <Swiper
              spaceBetween={12}
              slidesPerView={1}
              centeredSlides={true}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              style={{
                paddingBottom: "30px",
              }}
            >
              {progression.map((chord, index) => (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      width: "100%",
                      maxWidth: "220px",
                      margin: "0 auto",
                      mb: 2,
                      background: "#EBE9FA",
                      pt: 3,
                      boxShadow: `
                      0 4px 2px rgba(255, 105, 180, 0.1),  
                      0 0 8px rgba(255, 105, 180, 0.2),  
                      0 0 11px rgba(138, 43, 226, 0.2),   
                      0 0 12px rgba(138, 43, 226, 0.4)  
                    `,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="150"
                      image={chord.image}
                      alt={chord.name}
                      sx={{ objectFit: "contain" }}
                    />
                    <CardContent sx={{ padding: "8px" }}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontSize: "1.2rem", textAlign: "center" }}
                      >
                        {chord.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          {/* Desktop View */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
            {progression.map((chord, index) => (
              <Card
                key={index}
                sx={{
                  maxWidth: { xs: "100%", sm: 450 },
                  mb: 2,
                  boxShadow: `
          0 4px 8px rgba(255, 105, 180, 0.4),  
          0 0 15px rgba(255, 105, 180, 0.2),  
          0 0 25px rgba(138, 43, 226, 0.2),   
          0 0 35px rgba(138, 43, 226, 0.4)  
        `,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={chord.image}
                  alt={chord.name}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontSize: "1.5rem", textAlign: "center" }}
                  >
                    {chord.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      )}

      {/* Save Button */}
      <Box
        sx={{
          fontSize: 100,
          cursor: "pointer",
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          pt: 5,
        }}
        onClick={handleSave}
      >
        <SaveIcon color="secondary" fontSize="medium" />
      </Box>
      <Box
        sx={{
          fontSize: 100,
          cursor: "pointer",
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          p: 0,
        }}
        onClick={handleSave}
      >
        <SaveIcon color="secondary" fontSize="large" />
      </Box>
    </Box>
  );
}
