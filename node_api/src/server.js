import express from 'express';
import config from './config';
import roadsRouter from './resources/roads/roads.router';

export const app = express();

app.use('/api/roads', roadsRouter);

export const start = async () => {
    try {
        app.listen(config.port, () => {
            console.log(`API listing on http://localhost:${config.port}/api`);
        });
    } catch (e) {
        console.error(e);
    }
};
