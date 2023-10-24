import { Box, Grid } from "@mui/material";
import NavBar from "../components/navBar/Navbar";
import Banner from "../components/banner/Banner";
import Dashboard from "../components/dashboard/Dashboard";

const HomePage = () => {
    return (
        <Box>
            <NavBar/>
            <Banner/>
            <Dashboard/>
        </Box>
    );
}

export default HomePage;