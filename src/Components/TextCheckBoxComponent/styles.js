const styles = theme => ({
  container: {
    margin: "16px 0px"
  },
  typoContent: {
    lineHeight: "14px",
    height: "14px"
  },
  boxCheckbox: {
    [theme.breakpoints.up('sm')]: {
      flexBasis: "5%"
    },
  },
  Checkboxx: {
    padding: "0px",
    width: "14px",
    height: "14px"
  },
  content: {
    marginTop: "10px",
    color: "#999999",
    fontSize: "14px"
  },
  title: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "14px"
  }
});

export default styles;
