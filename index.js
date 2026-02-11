// run `node index.js` in the terminal
import express from "express";

const app = express();
const PORT = 8080;
app.get('/', (req, res) => {
    return res.json({ msg: 'Hello from the server' })
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`)
})
console.log(`Hello Node.js v${process.versions.node}!`);
