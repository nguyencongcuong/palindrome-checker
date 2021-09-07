import { createTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

let theme = createTheme({
  palette: {
    primary: {
      light: teal[100],
      main: teal[500],
      dark: teal[700]
    }
  },
  myButton: {
    backgroundColor: "black",
    color: "white"
  }
})

export { theme }