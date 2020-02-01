const styles = theme => ({
  container: {
    border: "1px solid #dbdbdb",
    margin: "0 auto",

    [theme.breakpoints.up("md")]: {
      maxWidth: "965px"
    }
  },
  link: {
    textDecoration: "none"
  },
  containerLeft: {
    borderRight: "1px solid #dbdbdb",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  ContainerRight: {
    width: "100%",
  },
  typography: {
    // border-left: 2px solid transparent,
    display: "block",
    fontSize: "16px",
    height: "100%",
    lineHeight: "20px",
    padding: "16px 16px 16px 30px",
    color: "#555555"
  }
});

export default styles;
