const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "77px",
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    borderBottom: "1px solid #DDD",
    color: "#262223",
    margin: "0 auto",
    position: "fixed"
  },
  headerContent: {
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "965px"
    }
  },
  logo: {
    // paddingTop: "10px"
    display: "flex"
  },
  instagram: {
    marginTop: "8px",
    marginLeft: "15px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    borderRadius: "inherit",
    color: "#555555",
    backgroundColor: "#FFFFFF",

    "&:active": {
      backgroundColor: "#FFFFFF",
      color: "#555555"
    },
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#555555"
    }
  },
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center"
  }
});

export default styles;
