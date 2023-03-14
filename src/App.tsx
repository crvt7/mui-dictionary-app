import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Input from "./components/Input";
import { createTheme } from "@mui/material";
import DictionaryContextProvider from "./store/context";
import MainInfoBox from "./components/MainInfoBox";
const themeDark = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiListItemButton : {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },
          "& label": {
            color: "#ffffff",
          },
          "& label.Mui-focused": {
            color: "#ffffff",
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            color: "primary",
          },
        },
      ],
    },
  },
});

const App = () => {
  return (
    <DictionaryContextProvider>
      <ThemeProvider theme={themeDark}>
        <Container>
          <CssBaseline />
          <Grid
            container
            spacing={0}
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: "25vh" }}
          >
            <Input />
          </Grid>
          <Grid container spacing={2}>
            <MainInfoBox />
          </Grid>
        </Container>
      </ThemeProvider>
    </DictionaryContextProvider>
  );
};

export default App;
