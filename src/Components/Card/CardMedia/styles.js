
const styles = theme => ({
  media: {
    height: "60vh",
    [theme.breakpoints.up("md")]: {
      height: "45vh"
    },
    [theme.breakpoints.up("lg")]: {
      height: "70vh"
    }
  }
});

export default styles;
