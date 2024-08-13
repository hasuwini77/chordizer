import type { Metadata } from "next";
import { GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const svgPattern = encodeURIComponent(`
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="pattern" patternUnits="userSpaceOnUse" width="29" height="50.115" patternTransform="scale(2)">
        <rect x="0" y="0" width="100%" height="100%" fill="hsla(0,0%,100%,0.2)" />
        <path d="M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z" stroke-width="1" stroke="hsla(258.5,59.4%,59.4%,0.5)" fill="none"/>
      </pattern>
    </defs>
    <rect width="800%" height="800%" fill="url(#pattern)" />
  </svg>
`);

export const metadata: Metadata = {
  title: "Chordizer",
  description: "Generate your Song in Seconds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles
          styles={{
            "@import": [
              "url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Timmana&display=swap')",
            ],
            body: {
              backgroundColor: "#D8BFD8",
              backgroundImage: `url("data:image/svg+xml,${svgPattern}")`,
              backgroundSize: "cover",
              backgroundRepeat: "repeat",
              backgroundBlendMode: "color-burn",
              margin: 0,
              padding: 0,
              height: "100%",
              fontFamily: '"Timmana", serif',
            },
            h1: {
              fontFamily: '"Rubik Mono One", monospace',
            },
          }}
        />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
