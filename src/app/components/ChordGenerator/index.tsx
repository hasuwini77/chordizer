"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

type Chord = {
  name: string;
  type: "major" | "minor";
  image: string;
};

const chords: Chord[] = [
  { name: "A", type: "major", image: "/chords/AMaj.png" },
  { name: "Am", type: "minor", image: "/chords/Amin.png" },
  { name: "A#", type: "major", image: "/chords/A-sharpMaj.png" },
  { name: "A#m", type: "minor", image: "/chords/A-sharpmin.png" },
  { name: "B", type: "major", image: "/chords/BMaj.png" },
  { name: "Bm", type: "minor", image: "/chords/Bmin.png" },
  { name: "C", type: "major", image: "/chords/CMaj.png" },
  { name: "Cm", type: "minor", image: "/chords/Cmin.png" },
  { name: "C#", type: "major", image: "/chords/C-sharpMaj.png" },
  { name: "C#m", type: "minor", image: "/chords/C-sharpmin.png" },
  { name: "D", type: "major", image: "/chords/DMaj.png" },
  { name: "Dm", type: "minor", image: "/chords/Dmin.png" },
  { name: "D#", type: "major", image: "/chords/D-sharpMaj.png" },
  { name: "D#m", type: "minor", image: "/chords/D-sharpmin.png" },
  { name: "E", type: "major", image: "/chords/EMaj.png" },
  { name: "Em", type: "minor", image: "/chords/Emin.png" },
  { name: "F", type: "major", image: "/chords/FMaj.png" },
  { name: "Fm", type: "minor", image: "/chords/Fmin.png" },
  { name: "F#", type: "major", image: "/chords/F-sharpMaj.png" },
  { name: "F#m", type: "minor", image: "/chords/F-sharpmin.png" },
  { name: "G", type: "major", image: "/chords/GMaj.png" },
  { name: "Gm", type: "minor", image: "/chords/Gmin.png" },
  { name: "G#", type: "major", image: "/chords/G-sharpMaj.png" },
  { name: "G#m", type: "minor", image: "/chords/G-sharpmin.png" },
];

// Generate a random chord progression of 4 chords
function generateChordProgression(): Chord[] {
  const progression: Chord[] = [];
  for (let i = 0; i < 4; i++) {
    const randomChord = chords[Math.floor(Math.random() * chords.length)];
    progression.push(randomChord);
  }
  return progression;
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
            display: "flex",
            flexDirection: "row",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {progression.map((chord, index) => (
            <Card key={index} sx={{ maxWidth: 250, mb: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={chord.image}
                alt={chord.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {chord.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}
