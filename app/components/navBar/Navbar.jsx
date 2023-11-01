"use client"
import { Grid, Button} from "@mui/material";
import Link from 'next/link';
import styles from "./Navbar.module.css"
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill, BsMicrosoftTeams } from 'react-icons/bs'
import { SiTask } from 'react-icons/si'


const NavBar = () => {

    return (
            <nav id="navbar" className={styles.nav}>
                <Grid className={styles.navOption}>
                    <img src="FcLogo.png" alt="logo" />
                    <Link href="/home" to="/home" className={styles.navLink}>
                        <AiFillHome className={styles.navIcons}/>
                        Home
                    </Link>
                    <Link href="#Profile" className={styles.navLink}>
                        <BsFillPersonFill className={styles.navIcons}/>
                        Profile
                    </Link>
                    <Link href="/tasks" to="/tasks" className={styles.navLink}>
                        <SiTask className={styles.navIcons}/>
                        Tasks
                    </Link>
                    <Link href="/aboutsus" className={styles.navLink}>
                        <BsMicrosoftTeams className={styles.navIcons}/>
                        About
                    </Link>
                </Grid>
                <Grid className={styles.proflieIcon}>
                    <Button title="Menu">Menu</Button>
                </Grid>
            </nav>
    );
}

export default NavBar;