const styles = theme => ({
  avatar: {
    display: "flex",
    justifyContent: "center",
    marginRight: "5vh"
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(18),
      height: theme.spacing(18)
    }
  },
  containerHeader: {
    padding: "0 16px",
    marginBottom: "44px"
  },
  infoContentsm: {
    display: "none",
    marginRight: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  infomation: {
    marginBottom: "10px"
  },
  infoContent: {
    marginRight: "10px"
  },
  chinhsuatrangcanhan1: {
    border: "1px solid #DDDDDD",
    borderRadius: "3px",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  chinhsuatrangcanhanHeader: {
    border: "1px solid #DDDDDD",
    borderRadius: "3px",
    textAlign: "center",
    marginBottom: "0",
    padding: "2px 10px",
    color: '#555555'
  },
  postFollow: {
    marginBottom: "15px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  postFollowContent: {
    marginRight: "30px",
    fontSize: "16px"
  },
  chinhsuatrangcanhan: {
    width: "100%",
    textAlign: "center"
  },
  name: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  typography: {
    marginBottom: "0",
    color: "#262626"
  }
});

export default styles;
