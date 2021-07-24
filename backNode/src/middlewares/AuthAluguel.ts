import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';

const authHome = (req: Request, res: Response, next: NextFunction) => {
    const tokenAluguel = req.cookies.user_id;

    if(!tokenAluguel){
        return res.status(401);
        next() ;
        // req.loggedIn = false;
    }

    try {

        jwt.verify(tokenAluguel, process.env.JWT_SECRET, (err, decoded) => {

            if(err)
                return res.status(404).json({error: err});
            // req.userId = decoded.id;
            // req.loggedIn = true;
    
            next();
    
        });
    } catch(e) {
        return res.status(401);
    }

};

export default authHome;