import * as React from 'react';
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/theme"
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import Home from "./home";


export default function Page() {
  const [fontLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold, Poppins_500Medium });

  return (
    <ThemeProvider theme={theme}>
                {fontLoaded ? <Home/> : <></>}
    </ThemeProvider>
  );
}

