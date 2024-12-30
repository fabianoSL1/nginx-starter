import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appName =process.env.APP_NAME
const app = express()

app.get("/", (req, res) => {
    res.setHeader("X-app-name", appName ?? "NONE")
    res.sendFile(path.join(__dirname, "index.html"))
});

app.listen(3000, () => {
    console.log("running on port 3000")
})