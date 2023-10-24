"use client"
import styles from "../components/welcomePage/welcomePage.module.css"
import { 
    StyledContainer,
    StyledTitle, 
    StyledSubTitle, 
    Avatar, 
    StyledButton, 
    ButtonGroup ,
    StyledFormArea,
    colors
} from "../components/Styles";

import { Grid, Box, Link, Button } from "@mui/material";

const Dashboard = () => {
    return (
        <StyledContainer className={styles.StyledContainer}>
            <Box>
                <Grid className={styles.imgBox}>
                    <img className={styles.logo} src="FcLogo.png" alt="FcLogo.png" />
                </Grid>
                <StyledFormArea>
                    <StyledSubTitle size={65}>
                        Welcome User
                    </StyledSubTitle>
                    <StyledTitle size={27}>
                        Feel free to explore
                    </StyledTitle>
                    <ButtonGroup>
                        <Link href="#" ><Button variant="outlined" className={styles.linkbtn}>Logout</Button></Link>
                    </ButtonGroup>
                </StyledFormArea>
            </Box>
        </StyledContainer>
    );
}

export default Dashboard;