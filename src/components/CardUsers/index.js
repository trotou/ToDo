import {
  Avatar,
  CardActionArea,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { InnerCard, CardUsers } from "./styles";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { useHomeStyles } from "../../Helpers/makestyles";
import BingMapsReact from "bingmaps-react";
import { useServices } from "../../Providers/Services";

const CardHome = ({ list, handleUser }) => {
  const classes = useHomeStyles();
  const { setDone } = useServices();

  return (
    <CardUsers>
      {list.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.1 }}
          style={{ margin: "3%" }}
        >
          <InnerCard>
            <CardHeader
              avatar={
                <Avatar alt="logo" className={classes.orange}>
                  {item.name && item.name[0]}
                </Avatar>
              }
            />

            <CardContent key={i} align="center">
              <Typography variant="h6" align="left" className={classes.name}>
                {item.name}
              </Typography>
              <Typography variant="h6" align="left" className={classes.title}>
                Email
              </Typography>
              <Typography paragraph align="left" color="textPrimary">
                {item.email}
              </Typography>
              <Typography variant="h6" align="left" className={classes.title}>
                Username
              </Typography>
              <Typography align="left" color="textPrimary" paragraph>
                {item.username}
              </Typography>
              {item.address && (
                <>
                  <Typography
                    color="textPrimary"
                    variant="h6"
                    className={classes.text}
                  >
                    User Location
                  </Typography>
                  <BingMapsReact
                    bingMapsKey="Au9m_nz5mrOODSqFbFXqi1WXNlphoeQKltJOQFB-nKpM9aXnrfoGfobXlhgm9zED"
                    height="200px"
                    onMapReady={() => setDone(true)}
                    mapOptions={{
                      navigationBarMode: "square",
                      showLocateMeButton: false,
                      disableStreetside: true,
                    }}
                    width="200px"
                    viewOptions={{
                      heading: 0,
                      center: {
                        latitude: item.address.geo.lat,
                        longitude: item.address.geo.lng,
                      },
                      mapTypeId: "aerial",
                    }}
                  />
                </>
              )}
            </CardContent>
            <CardActionArea>
              <hr></hr>
              <IconButton onClick={() => handleUser(item.id, item.username)}>
                TodoList <ListAltIcon />
              </IconButton>
            </CardActionArea>
          </InnerCard>
        </motion.div>
      ))}
    </CardUsers>
  );
};

export default CardHome;
