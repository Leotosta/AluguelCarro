import { Document } from 'mongoose';

export interface IUser extends Document {
    name?: {
        type: string;
        trim: boolean;
        require: boolean;
    };
    email?: {
        type: string,
        trim: boolean,
        createIndex: boolean,
        require: boolean
    };
}