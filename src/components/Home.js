import { CssBaseline, Box, Button } from '@mui/material';
import Banner from './Banner';
import RestaurantCard from './RestaurantCard';
import DatePicker from './DatePicker';
import { useState } from 'react';

const Home = () => {
    const [showDates, setShowDates] = useState(false);

    return (
        <>
            <CssBaseline />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                padding: "20px"
            }}>
                <Box sx={{ width: "100%", textAlign: "center" }}>
                    <Button 
                        variant="contained" 
                        onClick={() => setShowDates(!showDates)}
                        sx={{
                            backgroundColor: "rgba(255,103,31,1)",
                            color: "#fff",
                            "&:hover": { backgroundColor: "rgba(255,103,31,0.8)" }
                        }}
                    >
                        {showDates ? "Hide" : "Search Dates"}
                    </Button>
                    {showDates && <DatePicker />}
                </Box>
                <Banner />
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "16px",
                    width: "100%",
                    padding: "20px",
                    justifyContent: "center"
                }}>
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </Box>
            </Box>
        </>
    );
};

export default Home;
