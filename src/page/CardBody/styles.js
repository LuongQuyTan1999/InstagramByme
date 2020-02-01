import { red } from "@material-ui/core/colors";

const styles = theme => ({
  bodyContent: {
    display: "flex",
    paddingTop: "160px",
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "600px"
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "935px"
    }
  },
  contentLeft: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginRight: "28px",
      maxWidth: "614px"
    }
  },
  contentRight: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  cardContentRight: {
    marginTop: "15px",
    padding: "15px"
  },

  media: {
    height: "60vh",
    paddingTop: "56.25%", // 16:9
    [theme.breakpoints.up("md")]: {
      height: "45vh"
    }
  },

  avatarRight: {
    background: "none",
    boxShadow: "none"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

export default styles;
