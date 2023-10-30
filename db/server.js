const cors = require('cors')
const express = require("express")
const host = "localhost"
const port = 8081
const dbConnect = require('./dbConnect')
const bcrypt = require('bcrypt');
const User = require("./userModel");
const jwt = require("jsonwebtoken");
const auth = require("../auth");
const app = express()
const crypto = require('crypto');
const jwtSecret = crypto.randomBytes(32).toString('hex');
const Task = require('../taskModel'); 


app.use(express.json())
app.use(cors())

dbConnect()


app.post("/signup", (req, res) => {
    bcrypt.hash(req.body.password, 10, (error, hashedPassword) => {
        if (error) {
            res.status(500).send({
                message: "Password hashing error",
                error: error.message,
            });
        } else {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                dateOfBirth: req.body.dateOfBirth,
                password: hashedPassword,
            });

            user.save()
                .then((result) => {
                    res.status(201).send({
                        message: "User Created Successfully",
                        result,
                    });
                })
                .catch((error) => {
                    res.status(500).send({
                        message: "Error creating user",
                        error,
                    });
                });
        }
    });
});


app.post("/login", (request, response) => {
    User.findOne({ email: request.body.email })

        .then((user) => {
            bcrypt
                .compare(request.body.password, user.password)

                .then((passwordCheck) => {

                    if (!passwordCheck) {
                        return response.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                    }

                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        jwtSecret,
                        { expiresIn: "24h" }
                    );

                    response.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                        user: {
                            userId: user._id,
                            email: user.email,
                        }
                    });
                })
                .catch((error) => {
                    response.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                });
        })
        .catch((e) => {
            response.status(404).send({
                message: "Email not found",
                e,
            });
        });
});


app.get("/profile", authMiddleware, (req, res) => {

    const userEmail = req.user.email;

    User.findOne({ email: userEmail })
        .then(user => {
            if (!user) {
                res.status(404).json({ message: "User not found" });
            } else {
                res.json(user);
            }
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
            res.status(500).json({ message: "Internal Server Error" });
        });
});

function authMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Authorization token is missing." });
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Failed to verify the token", error: err.message });
        }

        req.user = decoded;
        next();
    });
}

app.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body); 
        await task.save(); 
        res.status(201).json(task); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



app.get("/getUser", (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch((error) => {
            res.status(400).send({
                message: "Error fetching users",
                error,
            });
        });
});



// free endpoint
app.get("/free-endpoint", (req, res) => {
    res.json({ message: "You are free to access me anytime" });
});
 
// authentication endpoint
app.get("/auth-endpoint", auth, (req, res) => {
    res.json({ message: "You are authorized to access me" });
});

app.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`)
})