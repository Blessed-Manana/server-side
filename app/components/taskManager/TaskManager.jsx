"use client"
import React from "react";
import { useState, useEffect } from "react";
import moment from 'moment';
import styles from "./TaskManager.module.css";
import { Grid, Typography, Button } from "@mui/material";

const TaskManager = () => {
    const initialDoing = [
        { time: '9 AM', event: '' },
        { time: '10 AM', event: '' },
        { time: '11 AM', event: '' },
        { time: '12 PM', event: '' },
        { time: '1 PM', event: '' },
        { time: '2 PM', event: '' },
        { time: '3 PM', event: '' },
        { time: '4 PM', event: '' },
        { time: '5 PM', event: '' },
    ];

    const [doing, setDoing] = useState(initialDoing);
    const [done, setDone] = useState([]);


    function handleEventChange(e, index) {
        const updatedEventText = e.target.value;
        const updatedDoing = [...doing];
        updatedDoing[index] = {
            ...updatedDoing[index],
            event: updatedEventText,
        };
        setDoing(updatedDoing);
    }


    // function colorRow(time) {
    //     const currentTime = moment().format("dddd, MMMM Do YYYY");
    //     const planTime = moment(time, 'h A');

    //     if (currentTime.isBefore(planTime)) {
    //         return 'future';
    //     } else if (currentTime.isAfter(planTime)) {
    //         return 'past';
    //     } else if (currentTime.isSame(planTime)) {
    //         return 'present';
    //     }
    // }


    function handleSaveEvent(index) {
        const savedTask = doing[index];
        setDone((prevDone) => [...prevDone, savedTask]);

        // Remove the task from the "doing" array
        const updatedDoing = [...doing];
        updatedDoing.splice(index, 1);
        setDoing(updatedDoing);
    }

    function handleAddEvent() {
        const newEvent = {
            time: `  Task block ${doing.length >= 0 ?  doing.length + 1 : doing.length - 8 }`,
            event: '',
        };
        setDoing([...doing, newEvent]);
    }

    function handleDeleteEvent(index) {
        const updatedDoing = [...doing];
        updatedDoing.splice(index, 1);
        setDoing(updatedDoing);
    }

    function handleClearAllDone() {
        setDone([]);
    }

    return (
        <Grid className={styles.taskManager}>
            <Grid className={styles.date}>
                <h1>Daily Task Management</h1>
                <p>{`${new Date().getFullYear()}COMPANY`}</p>
            </Grid>
            <Grid className={styles.workingOn}>
                <Grid className={styles.box}>
                    <h2 className={styles.text}>Doing</h2>
                    <Button className={styles.eventBtn} onClick={handleAddEvent}>
                        Add Event
                    </Button>
                    <Grid className={styles.doing}>
                        <Grid className={styles.container}>
                            <Grid className={styles.timeBlock2}>
                                {doing.map((timeBlock, index) => (
                                    <Grid key={index} className={styles.timeBlock}>
                                        <div className={styles.timeLabel}>{timeBlock.time}</div>
                                        <textarea
                                            className={styles.formControl}
                                            value={timeBlock.event}
                                            onChange={(e) => handleEventChange(e, index)}
                                        />
                                        <Button
                                            className={styles.saveBtn}
                                            onClick={() => handleSaveEvent(index)}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            className={styles.deleteBtn}
                                            onClick={() => handleDeleteEvent(index)}
                                        >
                                            Delete
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div id="successMessage" className={styles.successMessage}>
                    Event saved successfully!
                </div>
                <div className={styles.container2}>
                    <h2 className={styles.text}>Done</h2>
                    <Button className={styles.eventBtn} onClick={handleClearAllDone}>
                        Clear All
                    </Button>
                    <div className={styles.done}>
                        {done.map((doneTask, index) => (
                            <div key={index} className={styles.timeBlock}>
                                <div className={styles.timeLabel}>{doneTask.time}</div>
                                <div className={styles.formControl}>{doneTask.event}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default TaskManager;