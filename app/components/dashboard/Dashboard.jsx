"use client"
import React, { useState, useEffect } from 'react';
import styles from "./Dashboard.module.css"
import { Grid, Typography } from "@mui/material";
import { AiFillDashboard } from 'react-icons/ai'
import UpdateProfile from '../updateProfile/UpdateProfile';
import TenSecJoke from '../tenSecJoke/TenSecJoke';

const Dashboard = () => {


    return (
        <Grid className={styles.homeMain}>
            <Typography variant="h2" className={styles.dashText}>
                <AiFillDashboard style={{ marginRight: "5px", color: "#000" }} />
                Dashboard
            </Typography>
            <Grid className={styles.dashContainer}>
                <Grid className={styles.right}>
                    <UpdateProfile/>
                </Grid>
                <Grid className={styles.left}>
                    <TenSecJoke/>
                    <Grid className={styles.block}>
                        <h2>Work Progression</h2>
                        <span id="progressText">You are doing quite well</span>
                    </Grid>
                </Grid>
                {/* styles["projects-pd-text projects-pd-subdetail"] */}
                <Grid className={styles.block}>
                    <Grid className={styles.ProgressBlock}>
                        <h2>Progression Status</h2>
                        <Grid className={styles.Progressbars}>
                            <Grid className={styles.progress}>
                                <Grid className={styles.progressBar} role="progressbar" aria-valuemin="0" aria-valuemax="100"></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Dashboard
