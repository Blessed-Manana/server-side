import React, { useState, useEffect } from 'react';
import styles from "./UpdateProfile.module.css"
import { TbCameraPlus } from 'react-icons/tb'
import { Grid, Typography } from "@mui/material";
import axios from "axios"


const UpdateProfile = () => {
    const [profilePic, setProfilePic] = useState('person-combination.svg')
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const savedProfilePic = localStorage.getItem('profilePic');
        if (savedProfilePic) {
            setProfilePic(savedProfilePic);
        }

        axios.get('http://localhost:8081/getUser')
            .then((res) => {
                console.log("NameData: " + res.data.name)
                setUsername(res.data.name)
                console.log("EmailData: " + res.data.email)
                setEmail(res.data.email)
            })
            .catch((error) => {
                console.error('Error fetching username: ', error);
            });
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
                <h2>Name {username}</h2>
            </Grid>
            <Grid className={styles.info}>
                <h3>Your Email:</h3>
                <p>{email}</p>
                <button>Console</button>
            </Grid>
        </Grid>
    );
}

export default UpdateProfile;