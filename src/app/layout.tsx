import type { Metadata } from "next";
import { GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

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
              backgroundColor: "#7A89C2",
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
