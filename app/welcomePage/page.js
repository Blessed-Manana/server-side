"use client"
import styles from "../components/welcomePage/welcomePage.module.css"
import { 
    StyledContainer,
    StyledTitle, 
    StyledSubTitle, 
    Avatar, 
    StyledButton, 
    ButtonGroup 
} from "../components/Styles";

import { Grid, Box, Link, Button } from "@mui/material";

const WelcomePage = () => {
    return (
        <StyledContainer className={styles.StyledContainer}>
            <Box>
                <Grid className={styles.imgBox}>
                    <img className={styles.logo} src="FcLogo.png" alt="FcLogo.png" />
                </Grid>
                <StyledSubTitle size={65}>
                    Welcome to Flow Control
                </StyledSubTitle>
                <StyledTitle size={27}>
                    Feel free to explore
                </StyledTitle>
                <ButtonGroup>
                    <Link href="/home" ><Button variant="outlined" className={styles.linkbtn}>Home</Button></Link>
                    <Link href="/aboutsus" ><Button variant="outlined" className={styles.linkbtn}>About</Button></Link>
                </ButtonGroup>
            </Box>
        </StyledContainer>
    );
}

export default WelcomePage;