import express from 'express';
import { PORT } from './config/serverConfig'

const setupAndStartServer = async () => {
    const app = express();

    app.listen(PORT, () => {
        console.log(`Server is started at PORT: ${PORT}`);
    });
}


setupAndStartServer();