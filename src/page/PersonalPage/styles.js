const styles = theme => ({
  container: {
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      paddingRight: "20px",
      paddingLeft: "20px"
    },
    [theme.breakpoints.up("lg")]: {
      boxSizing: "content-box",
      width: "calc(100% - 40px)",
      maxWidth: "935px",
    }
  }
});

export default styles;
