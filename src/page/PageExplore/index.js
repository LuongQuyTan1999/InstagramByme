import React from "react";
import {
  withStyles,
  Box,
  Grid,
  Typography,
  Avatar,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles";
import ComponentListImage from "../ComponentListImage";
import AccountCarouselComponent from "../../Components/AccountCarouselComponent";

function PageExplore(props) {
  const { classes } = props;

  return (
    <Box component="div" pt={15} className={classes.container}>
      <Grid container>
        <Grid container className={classes.containerExplore, classes.containerExploreTop}>
          <Grid item xs={10}>
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.textExplore}
            >
              Khám Phá Mọi Người
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.textExplore}
              style={{ textAlign: "right" }}
            >
              Xem tất cả
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.containerCarousel}>
          <AccountCarouselComponent
            avatar="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/26872743_804310399756737_3831000859689353216_n.jpg?_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_ohc=pO8_V0aNYo4AX9-r9SK&oh=0ac3f4de32814f00ce6b21741384dc0e&oe=5ECB1554"
            name="tranthithanhthuan"
            status="Gợi ý cho bạn"
          />
          <AccountCarouselComponent
            avatar="https://scontent-sin2-2.cdninstagram.com/v/t51.2885-19/s150x150/76958429_751448465360295_1836507374156775424_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_ohc=SlE3ilG1sqcAX8DXQPo&oh=cbe14b38e87b5e048d169c6c449490cb&oe=5EC8693D"
            name="phongg0908"
            status="Gợi ý cho bạn"
          />
          <AccountCarouselComponent
            avatar="https://scontent-sin2-2.cdninstagram.com/v/t51.2885-19/s150x150/79599830_767014337109296_1276531655523172352_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_ohc=TLfpJ1E1AsUAX_D3kOa&oh=a8f9726eeae7d3e00f796a77e5650c4c&oe=5ED05B5D"
            name="_luongminhdong_"
            status="Gợi ý cho bạn"
          />
          <AccountCarouselComponent
            avatar="https://scontent-sin2-2.cdninstagram.com/v/t51.2885-19/s150x150/56557017_346633209541451_7413209433745915904_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_ohc=TajQevDyGaEAX-4YG1Y&oh=3932e341e4ce1574bbbdad38cee8b97f&oe=5ECF8C69"
            name="duc.luu2711"
            status="Gợi ý cho bạn"
          />
          <AccountCarouselComponent
            avatar="https://scontent-sin2-2.cdninstagram.com/v/t51.2885-19/s150x150/69699499_692666791200274_1051080202156769280_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_ohc=MJqJmcjyNd4AX8xFrdY&oh=3ef351f7e70bacf1f85a67c7cebf2056&oe=5EBDF0D1"
            name="tuyentran627"
            status="Gợi ý cho bạn"
          />
          <AccountCarouselComponent
            avatar="https://scontent-sin2-2.cdninstagram.com/v/t51.2885-19/s150x150/68985650_872911586424119_1714866925307166720_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_ohc=z5Lo03w3JlUAX9H3mAn&oh=3d4914fdaef7698f9ef128c4eebf5e6e&oe=5ECF6549"
            name="23.10h"
            status="Gợi ý cho bạn"
          />
          <AccountCarouselComponent
            avatar="https://scontent-sin2-2.cdninstagram.com/v/t51.2885-19/s150x150/81139043_890817808060942_7171879619430187008_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_ohc=qwAaWWB6Q4gAX93AM6M&oh=0556a4ee82c564d95545e0a44d1bc86b&oe=5ED7F588"
            name="lehuy.loc"
            status="Gợi ý cho bạn"
          />
          <AccountCarouselComponent
            avatar="https://scontent-sin2-2.cdninstagram.com/v/t51.2885-19/s150x150/44347260_2248450475426369_8847308570182549504_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_ohc=-qKMCI266WcAX_p-Os1&oh=935bc7c58313b1e60f7041bd0ea7573e&oe=5ED3D822"
            name="babocuong"
            status="Gợi ý cho bạn"
          />
        </Grid>

        <Grid container className={classes.containerExplore}>
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.textExplore}
          >
            Khám Phá
          </Typography>
        </Grid>

        <Grid item>
          <ComponentListImage />
        </Grid>
      </Grid>
    </Box>
  );
}

export default withStyles(styles)(PageExplore);
