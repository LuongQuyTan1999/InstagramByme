const styles = theme => ({
  container: {
    padding: "24px",
    [theme.breakpoints.up("md")]: {
      padding: "32px 48px"
    }
  },
  content: {
    marginBottom: "22px",
    paddingBottom: "22px",
    borderBottom: "1px solid #efefef"
  },
  link: {
    textDecoration: "none",
    color: "#3897f0"
  },
  typographyLink: {
    fontSize: "14px",
    fontWeight: "500",
    marginTop: "15px"
  }
});

export default styles;
