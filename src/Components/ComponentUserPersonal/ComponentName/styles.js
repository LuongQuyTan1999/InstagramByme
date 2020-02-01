const styles = theme => ({
  containerName: {
    padding: "0 16px 21px",
    marginTop: "25px",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  name: {
    fontSize: "15px",
    fontWeight: "500"
  }
});

export default styles;
