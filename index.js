const express = require("express");

const usersRoute = require("./routes/users");
const booksRoute = require("./routes/books");

const app = express();

const PORT = 8081;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is running"
    });
});

app.use("/users", usersRoute);
app.use("/books", booksRoute);

app.get('*', (req, res) => {
    res.status(404).json({
        message: "This route does not exist"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});