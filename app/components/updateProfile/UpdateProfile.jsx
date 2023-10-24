import React, { useState, useEffect } from 'react';
import styles from "./UpdateProfile.module.css"
import { TbCameraPlus } from 'react-icons/tb'
import { Grid, Typography } from "@mui/material";

const UpdateProfile = () => {
    const [profilePic, setProfilePic] = useState('person-combination.svg')

    useEffect(() => {
        const savedProfilePic = localStorage.getItem('profilePic');
        if (savedProfilePic) {
            setProfilePic(savedProfilePic);
        }
    }, []);


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file));
            localStorage.setItem('profilePic', URL.createObjectURL(file));
        }
    };


    return (
        <Grid className={styles.sidebar} id="Profile">
            <Grid className={styles.profile}>
                <img src={profilePic} alt="profliePic" id="photo" />
                <input
                    className={styles.file}
                    type="file"
                    name=""
                    id="file"
                    accept="image/jpeg, image/jpeg, image/png"
                    onChange={handleFileChange}
                />
                <label htmlFor="file" className={styles.uploadbtn}>
                    <TbCameraPlus className={styles.camera} />
                </label>
                <h2 id="username">Name</h2>
            </Grid>
            <Grid className={styles.info}>
                <h3>Your Campany Name:</h3>
                <p id="CompanyName">Campany Name</p>
                <h3>Your Email:</h3>
                <p id="emailInput">Email</p>
            </Grid>
        </Grid>
    );
}

export default UpdateProfile;
