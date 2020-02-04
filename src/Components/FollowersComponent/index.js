import React, { useState } from "react";
import {
  Grid,
  Typography,
  Modal,
  Backdrop,
  Fade,
  Box,
  Tab,
  Tabs,
  AppBar
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";
import ContentFollowersComponent from "../ContentFollowersComponent";
import styles from "./styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function FollowersComponent(props) {
  const { classes, title, contentTitle, setHastag } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography
        variant="h5"
        onClick={handleOpen}
        gutterBottom
        className={classes.titleModal}
      >
        {title}
      </Typography>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container className={classes.header}>
              <Grid item xs={1}></Grid>
              <Grid item xs={9}>
                <Typography
                  variant="h5"
                  onClick={handleOpen}
                  gutterBottom
                  className={classes.typo5}
                >
                  {contentTitle}
                </Typography>
              </Grid>

              <Grid item xs={2} onClick={handleClose} className={classes.icon}>
                <CloseIcon />
              </Grid>
            </Grid>
            <Grid container className={classes.hastagContainer}>
              <AppBar
                position="static"
                className={classes.appBar}
                style={setHastag ? { display: "flex" } : { display: "none" }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                >
                  <Tab
                    label="MỌI NGƯỜI"
                    {...a11yProps(0)}
                    className={classes.tab}
                  />
                  <Tab
                    label="HASTAG"
                    {...a11yProps(1)}
                    className={classes.tab}
                  />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0} className={classes.containerPanel}>
                <Grid container>
                  <ContentFollowersComponent
                    avatar="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66280602_1100237050176162_1591023226954186752_n.jpg?_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_ohc=ONBO_mIcW5oAX9f3ISK&oh=3b013e9452c83ee553becf0318e92fe0&oe=5EB91387"
                    name="minhthuy.2019"
                    fullname="Thúy Hêu"
                    contentButton="Đang Theo dõi"
                  />
                  <ContentFollowersComponent
                    avatar="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/79390030_743788939444338_7964244005426823168_n.jpg?_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_ohc=sJmRH70dXF4AX-OK4h4&oh=d867d6dfb510b1eeb93fbedc795fb8fd&oe=5ED40235"
                    name="pe_posua1999"
                    fullname="Minh Anh"
                    contentButton="Đang Theo dõi"
                  />
                  <ContentFollowersComponent
                    avatar="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/51241402_2290355831241260_3296821453369901056_n.jpg?_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_ohc=bpks_OKH-kEAX-D5PR-&oh=bfd471d9ca1f9a873f531674dfb96c4a&oe=5ED62852"
                    name="tampham0507"
                    fullname="Phạm Tâm"
                    contentButton="Đang Theo dõi"
                  />
                  <ContentFollowersComponent
                    avatar="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66280602_1100237050176162_1591023226954186752_n.jpg?_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_ohc=ONBO_mIcW5oAX9f3ISK&oh=3b013e9452c83ee553becf0318e92fe0&oe=5EB91387"
                    name="minhthuy.2019"
                    fullname="Thúy Hêu"
                    contentButton="Đang Theo dõi"
                  />
                  <ContentFollowersComponent
                    avatar="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/81139043_890817808060942_7171879619430187008_n.jpg?_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_ohc=qwAaWWB6Q4gAX-PImA1&oh=cc8af29572f97cb0da9dae437d601758&oe=5ED7F588"
                    name="le.huyloc"
                    fullname="Lê Huy Lộc"
                    contentButton="Đang Theo dõi"
                  />
                  <ContentFollowersComponent
                    avatar="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/67403039_2376669449265473_5597952479732957184_n.jpg?_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_ohc=HCteUHR9id4AX_IRM1G&oh=6213acb4a3d6dfabb7c910c877b231dc&oe=5EC922C2"
                    name="h000.__"
                    fullname="Trung Huong Dao"
                    contentButton="Đang Theo dõi"
                  />
                  <ContentFollowersComponent
                    avatar="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/67403039_2376669449265473_5597952479732957184_n.jpg?_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_ohc=HCteUHR9id4AX_IRM1G&oh=6213acb4a3d6dfabb7c910c877b231dc&oe=5EC922C2"
                    name="h000.__"
                    fullname="Trung Huong Dao"
                    contentButton="Đang Theo dõi"
                  />
                  <ContentFollowersComponent
                    avatar="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/67403039_2376669449265473_5597952479732957184_n.jpg?_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_ohc=HCteUHR9id4AX_IRM1G&oh=6213acb4a3d6dfabb7c910c877b231dc&oe=5EC922C2"
                    name="h000.__"
                    fullname="Trung Huong Dao"
                    contentButton="Đang Theo dõi"
                  />
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container>
                  <ContentFollowersComponent
                    avatar="https://instagram.fdad2-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s150x150/82572427_506677990233647_3215740099951001980_n.jpg?_nc_ht=instagram.fdad2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=AIoM9kW2Lh4AX9ETNg6&oh=0ca7527580de998f1f5643dd2a6f7f94&oe=5EC8210E"
                    name="#ui"
                    fullname="2,175,683 bài viết"
                    contentButton="Đang theo dõi"
                  />
                  <ContentFollowersComponent
                    avatar="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/79390030_743788939444338_7964244005426823168_n.jpg?_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_ohc=sJmRH70dXF4AX-OK4h4&oh=d867d6dfb510b1eeb93fbedc795fb8fd&oe=5ED40235"
                    name="pe_posua1999"
                    fullname="Minh Anh"
                    contentButton="Đang theo dõi"
                  />
                </Grid>
              </TabPanel>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default withStyles(styles)(FollowersComponent);
