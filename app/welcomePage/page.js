"use client"
import { useState, useEffect } from "react";
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
import axios from "axios"

const WelcomePage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8081/getUser')
            .then((res) => {  
                if (res.data.length > 0) {
                    const lastUser = res.data[res.data.length - 1];
                    setUsername(lastUser.name);
                    setEmail(lastUser.email);
                } else {
                    console.error('No user data available');
                }
            })
            .catch((error) => {
                console.error('Error fetching username: ', error);
            });
    }, []);
    return (
        <StyledContainer className={styles.StyledContainer}>
            <Box>
                <Grid className={styles.imgBox}>
                    <img className={styles.logo} src="FcLogo.png" alt="FcLogo.png" />
                </Grid>
                <StyledSubTitle size={65}>
                    Welcome to Flow Control <span>{username}</span>!
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