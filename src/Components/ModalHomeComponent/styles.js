const styles = theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: "260px",
    [theme.breakpoints.up("sm")]: {
      width: "400px"
    },
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    textAlign: "center"
  }
});

export default styles;
