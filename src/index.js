import express from 'express';
import bodyParse from 'body-parser';

import { PORT } from './config/serverConfig.js'

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server is started at PORT: ${PORT}`);
    });
}


setupAndStartServer();