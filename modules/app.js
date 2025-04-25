import { Express } from "express";
import time from "./time";

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a el TP-5');
})


app.get('/', (req, res) => {
    res.send('Bienvenido a el TP-5');
})


app.get('/hora', (req, res) => {
    let horaActual = time.getCurrentTime();
    res.send(horaActual);
})


app.get('/fecha-completa', (req, res) => {
    let fechaActual = time.getFullDateTime();
    res.send(fechaActual);
})

app.use((req, res) => {
    res.status(404).send('Error 404: Ruta no encontrada');
});