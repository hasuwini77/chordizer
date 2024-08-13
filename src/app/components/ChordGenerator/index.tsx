"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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

  const handleClick = () => {
    const newProgression = generateChordProgression();
    setProgression(newProgression);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: 2,
        p: 2,
      }}
    >
      <Button variant="contained" onClick={handleClick}>
        Generate My Song
      </Button>
      {progression.length > 0 && (
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            flexDirection: { sm: "row" },
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* Swiper for mobile screens */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Swiper spaceBetween={10} slidesPerView={1} centeredSlides={true}>
              {progression.map((chord, index) => (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      width: "80%",
                      margin: "0 auto",
                      mb: 2,
                      background: "#EBE9FA",
                      pt: 3,
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
          {/* Flexbox row for larger screens */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {progression.map((chord, index) => (
              <Card
                key={index}
                sx={{ maxWidth: { xs: "100%", sm: 250 }, mb: 2 }}
              >
                <CardMedia
                  component="img"
                  height="140"
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
    </Box>
  );
}
