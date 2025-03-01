import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import background_image from "../img/logo.jpeg";

const useStyles = makeStyles(() => ({
    root: {
        height: "50vh",
        position: "relative",
        backgroundImage: `url(${background_image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    info: {
        backgroundColor: "rgba(0,0,0,0.6)",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
        "& h2": {
            marginBottom: "16px"
        },
        "& button": {
            backgroundColor: "rgba(255,103,31,1)",
            color: "#fff",
            textTransform: "inherit",
            fontSize: "1.2rem",
            fontWeight: "bold",
        },
        "& button:hover": {
            backgroundColor: "#fff",
            color: "rgba(255,103,31,1)",
        }
    }
}));

const Banner = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <Typography variant="h2">Plan your dinner...</Typography>
                <Button variant="contained">Check our restaurants</Button>
            </div>
        </div>
    );
};

export default Banner;
