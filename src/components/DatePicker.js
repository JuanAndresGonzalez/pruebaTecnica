import { Box, Button, InputBase, Typography } from "@mui/material";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { People } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DatePicker = () => {
    const navigate = useNavigate(); 
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    });

    const handleSelect = (ranges) => {
        setSelectionRange(ranges.selection);
    };

    return (
        <Box sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1000",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            minWidth: "300px"
        }}>
            <DateRangePicker 
                ranges={[selectionRange]} 
                onChange={handleSelect}
            />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "16px"
            }}>
                <Typography variant="h5">Guests</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <InputBase 
                        placeholder="2 pax"
                        sx={{
                            minWidth: "80px",
                            maxWidth: "120px",
                            border: "1px solid #ccc",
                            padding: "8px",
                            borderRadius: "4px",
                            textAlign: "center"
                        }}
                    />
                    <People />
                </Box>
                <Button 
                    onClick={() => navigate("/search")}
                    sx={{
                        marginTop: "16px",
                        backgroundColor: "rgba(255,103,31,0.8)",
                        color: "#fff",
                        "&:hover": { backgroundColor: "rgba(255,103,31,0.6)" }
                    }}
                >
                    Search Restaurants
                </Button>
            </Box>
        </Box>
    );
};

export default DatePicker;
