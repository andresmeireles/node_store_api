import mongoose from 'mongoose';
import DBError from '../exceptions/dbError';

export default abstract class MongoDB {
  constructor() {
    const url = process.env.MONGODB_URL;
    if (!url) {
        throw new DBError('empty connection url');
    }
    mongoose.connect(url).catch((err: Error) => new DBError(err.message));
}
