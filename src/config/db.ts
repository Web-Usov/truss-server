import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

const parentDir = join(__dirname, '..');

export const connectionOpts: ConnectionOptions = {
    type: 'sqlite',
    database: process.env.DB_NAME || 'db_farm.db',
    entities: [
        `${parentDir}/app/entity/*.entity.*`,
    ],
    synchronize: true,
};
