const styles = theme => ({
  container: {
    margin: "20px",
    [theme.breakpoints.up("sm")]: {
      margin: "16px 64px"
    }
  },
  boxContainer: {
    border: "1px solid #DDDDDD",
    borderRadius: "4px",
    margin: "20px 0px",
    textAlign: "center"
  },
  boxGoogleMap: {
    position: "relative",
    height: "275px"
  },
  boxHeader: {
    margin: "24px 0px 0px 0px"
  },
  boxTypo: {
    padding: "10px 0px"
  },
  textHeader: {
    fontSize: "22px",
    marginBottom: "0px"
  },
  textTitle: {
    fontSize: "16px",
    fontWeight: "bold"
  },
  location: {
    padding: "10px 0px",
    borderBottom: "1px solid #DDDDDD"
  },
  isTransform: {
    transform: "rotate(180deg)"
  }
});
export default styles;
