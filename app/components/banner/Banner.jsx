import styles from "./Banner.module.css"
import { Grid, Typography } from "@mui/material";
import { FaHome } from 'react-icons/fa'


const Banner = () => {
    return (
        <section className={styles.banner}>
            <Grid className={styles.add}>
                <Typography variant="h2" className={styles.addText}>Become more organised</Typography>
                <Grid className={styles.addline}></Grid>
                <img src="banner2.jpg" alt="addImg" />
            </Grid>
            <Grid className={styles.add}>
                <Typography variant="h2" className={styles.addText}>Crontrol your work flow</Typography>
                <Grid className={styles.addline}></Grid>
                <img src="banner3.webp" alt="addImg" />
            </Grid>
            <Grid className={styles.add}>
                <Typography variant="h2" className={styles.addText}>Get work more efficiently</Typography>
                <Grid className={styles.addline}></Grid>
                <img src="banner4.jpg" alt="addImg" />
            </Grid>
        </section>
    );
}

export default Banner;