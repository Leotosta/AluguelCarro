import { Schema, model } from 'mongoose';
import { IUser } from '../../models/IUser';

const UserSchema = new Schema({

    name: {
        type: String,
        trim: true,
        require: true
    },

    email: {
        type: String,
        trim: true,
        createIndex: true,
        require: true
    }
}, {
    timestamps: true
});

const User = model<IUser>('User', UserSchema);

export default User;
