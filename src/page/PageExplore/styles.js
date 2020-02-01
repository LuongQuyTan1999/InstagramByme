const styles = theme => ({
  container: {
    margin: "0 auto 30px",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "935px"
    },
    [theme.breakpoints.up("sm")]: {
      paddingRight: "20px",
      paddingLeft: "20px"
    }
  },
  containerExplore: {
    fontSize: "14px",
    padding: "0 8px",
    marginBottom: "16px"
  },
  containerExploreTop: {
    display: "none",
    marginBottom: "16px",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  textExplore: {
    color: "#999999"
  },
  containerCarousel: {
    marginBottom: "60px",
    flexWrap: "nowrap",
    overflowX: "scroll",
    padding: "0 30px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  }
});

export default styles;
