"use client"
import { Grid, Box, Link, Button, Typography } from "@mui/material";
import styles from "./AboutUS.module.css"
import {
    StyledContainer,
    StyledTitle,
    StyledSubTitle,
    Avatar,
    StyledButton,
    ButtonGroup
} from "../Styles";
import NavBar from "../navBar/Navbar";

const About = () => {
    return (
        <StyledContainer className={styles.aboutContainer}>
            <Box>
                <NavBar />
                <StyledSubTitle size={65}>
                    Welcome to Flow Control
                </StyledSubTitle>
                <StyledTitle size={27}>
                    We love the that you are apart of us!!! <br />
                    Would You like to learn more about us?
                </StyledTitle>
                <Grid className={styles.aboutText}>
                    <Typography className={styles.aboutP}>Welcome to the Daily Task Manager, where productivity meets simplicity. Our mission is to help you organize your day effectively and keep track of your tasks effortlessly.</Typography>
                    <Typography className={styles.aboutP}>At <strong>Flow Control</strong>, we understand the importance of staying organized and focused, and that's why we've created this user-friendly task management tool to assist you in your daily activities. Whether you're a student, a professional, or someone who just likes to stay organized, our Task Manager is here to make your life easier.</Typography>
                    <ul className={styles.aboutP}>
                        <StyledTitle size={20}>Key Features:</StyledTitle>
                        <li>
                            <strong>Doing and DoneEasily manage your tasks in progress and keep a record of completed tasks in separate lists. Lists: </strong>
                            <Typography className={styles.fadeText}>Easily manage your tasks in progress and keep a record of completed tasks in separate lists.</Typography>
                        </li>
                        <li>
                            <strong>Flexible Time Blocks: </strong>
                            <Typography className={styles.fadeText}>Plan your day with customizable time blocks, allowing you to create, edit, and delete tasks at your convenience.</Typography>
                        </li>
                        <li>
                            <strong>Intuitive Interface: </strong>
                            <Typography className={styles.fadeText}>Our clean and intuitive user interface lets you focus on your tasks without unnecessary distractions.</Typography>
                        </li>
                        <li>
                            <strong>Effortless Task Management: </strong>
                            <Typography className={styles.fadeText}>Edit, save, and delete tasks with just a few clicks. Moving tasks from "Doing" to "Done" has never been easier.</Typography>    
                        </li>
                        <li>
                            <strong> Clear All Done Tasks: </strong>
                            <Typography className={styles.fadeText}>With the click of a button, you can clear your completed tasks, ensuring a fresh start for the next day.</Typography>
                        </li>
                    </ul>
                    <Typography className={styles.aboutP}>We value your productivity, and we're committed to helping you make the most of your time. Whether it's for work, study, or personal projects, our Daily Task Manager is the ideal companion for staying organized and on top of your to-do list. <br />Have a productive day!</Typography>
                    <Typography className={styles.aboutP}>Thank you for choosing our Task Manager to simplify your daily task management. We're excited to be a part of your journey to enhanced productivity!</Typography>
                </Grid>
                <ButtonGroup>
                    <Link href="/login" ><Button variant="outlined" className={styles.linkbtn}>Log out</Button></Link>
                </ButtonGroup>
            </Box>
        </StyledContainer>
    );
}

export default About;