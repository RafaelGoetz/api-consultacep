import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333; //cria constante ou usa 3333 se não tiver nada no ambiente

app.listen(port, console.log(port));
