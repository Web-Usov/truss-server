import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import { connectionOpts } from '../config/db'

const connection:Promise<Connection> = createConnection(connectionOpts);

export default connection;