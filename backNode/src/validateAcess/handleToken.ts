
import jwt from 'jsonwebtoken';


function generateToken(params){
    return jwt.sign(params, process.env.JWT_SECREAT, {
        expiresIn: 1000 * 60 * 60 * 5
    });
}

export { generateToken };