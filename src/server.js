import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.NODE_PORT || 8000;

app.listen(PORT, () => {
    console.log("Servidor escuchado desde el puerto", PORT);
});