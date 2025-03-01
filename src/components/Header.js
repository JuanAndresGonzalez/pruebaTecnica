import { AppBar, Avatar, IconButton, InputBase, ListItem, Toolbar, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../img/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
    const [tablet, setTablet] = useState(false);
    const [draweropen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const responsiveness = () => window.innerWidth < 900 ? setTablet(true) : setTablet(false);
        responsiveness();
        window.addEventListener("resize", () => responsiveness());
    }, []);

    return (
        <AppBar sx={{ position: "sticky", top: 0, backgroundColor: "#fff", zIndex: 99, width: "100vw" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link to="/">
                    <img src={logo} alt="logo" style={{ height: "30px", objectFit: "contain", marginLeft: "16px" }} />
                </Link>
                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid lightgray", minWidth: "300px", borderRadius: "999px", padding: "8px", margin: "8px" }}>
                    <InputBase fullWidth placeholder="Search here ..." />
                    <SearchIcon />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", marginLeft: "16px", color: "#333" }}>
                    <Typography>Sign in</Typography>
                    <Avatar sx={{ marginLeft: "16px" }} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
