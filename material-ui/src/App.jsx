import { Route, Routes } from "react-router-dom";
import { Notes, Create } from "@components/index";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fefefe",
      },
      secondary: purple,
      mode: "dark",
    },
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });
  return (
    <>
      {/* <CssBaseLine /> property needed for switching between dark and light mode */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Notes />} />
              <Route path="create" element={<Create />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
