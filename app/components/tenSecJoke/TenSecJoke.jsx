import React, { useState, useEffect } from 'react';
import styles from "./TenSecJoke.module.css"
import { Grid, Typography } from "@mui/material";


const TenSecJoke = () => {
    const [joke, setJoke] = useState({ setup: '', punchline: '' });

    useEffect(() => {
        // Function to fetch a new joke
        const fetchJoke = async () => {
            try {
                const response = await fetch('https://official-joke-api.appspot.com/random_joke');
                if (response.ok) {
                    const data = await response.json();
                    setJoke(data);
                } else {
                    console.error('Error fetching joke');
                }
            } catch (error) {
                console.error('Error fetching joke:', error);
            }
        };


        fetchJoke();

        const jokeInterval = setInterval(fetchJoke, 10000);

        return () => {
            clearInterval(jokeInterval);
        };
    }, []);

    return (
        <Grid className={styles.block}>
            <Grid className={styles.jokeBlock}>
                <h2>Ten Second Joke</h2>
                <Grid className={styles.joke}>
                    <span id="jokeDisplay">{joke.setup}</span>
                    {joke.setup && joke.punchline && (
                        <span>
                            <br />
                            {joke.punchline}
                        </span>
                    )}
                    <span>&#128516;</span>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default TenSecJoke;