import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardUsers from "../../components/CardUsers";
import {useHistory} from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useServices } from "../../Providers/Services";
import AlertDialogSlide from "../../components/ModalMap";

const HomePage = () => {
    const [list, setList] = useState(['',''])    
    const history = useHistory()
    const {open, setOpen} = useServices() 

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((resp) => setList(resp.data))
          .catch((e) => console.error(e));          
      }, []);

      const handleOpen = () => {
          setOpen(true)
      }


    return (
        <>              
        <AlertDialogSlide/>
          <CardUsers >
            {list.map((x, i) => (
              <Card
                key={i}
                style={{
                  margin: "2%",
                  width: "320px",
                  height: "fit-content",
                  backgroundColor: "#E5E4E4",
                  color: "blue",
                }}                
              >
                <CardHeader
                  avatar={
                    <Avatar alt="kenzie logo" src={"/images/logokenzie.png"} />
                  }
                />

                <CardContent key={i}>
                  <Typography variant="h6" align="left">
                    Name
                  </Typography>
                  <Typography
                    paragraph
                    component="p"
                    align="left"
                    color="textPrimary"
                  >
                    {x.name}
                  </Typography>
                  <Typography variant="h6" align="left">
                    Email
                  </Typography>
                  <Typography paragraph align="left" color="textPrimary">
                    {x.email}
                  </Typography>
                  <Typography variant="h6" align="left">
                    Username
                  </Typography>
                  <Typography align="left" color="textPrimary" paragraph>
                    {x.username}                         
                  </Typography>  
                  <IconButton onClick={handleOpen}>
                      <LocationOnIcon/>
                    </IconButton>                                                                                   
                </CardContent>
              </Card>
            ))}
          </CardUsers>
        </>
      );
}

export default HomePage