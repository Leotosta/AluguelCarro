import { Request, Response } from 'express';
import User from '../config/schemas/User';
import { generateToken } from '../validateAcess/handleToken';

class UserController {
    
    public async index(req: Request, res: Response): Promise<Response> {
        try {
            const users = await User.find();
    
            return res.json(users);
        } catch (err) {
            return res.send(404).json('Not found!');
        }
    }

    public async registro (req: Request, res: Response): Promise<Response> {

        const { name, email } = req.body;

        let userSchema = await User.findOne({email});

        if(userSchema) {
            if(userSchema.email === email && userSchema.name !== name ) {
                userSchema = await User.findOneAndUpdate({email}, {name});
            }
        }

        if(!userSchema) {
            const createEntry = new User({ name, email });
            userSchema = await createEntry.save();
        }


        res.cookie('jid', generateToken({id: email}) , {
            maxAge: 1000 * 60 * 60 * 5,
            httpOnly: true
         });

        return res.json(userSchema);
    }

}

export default new UserController();