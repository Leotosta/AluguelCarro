import Router from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.route('/users')
    .get(UserController.index);

router.route('/registro')
    .post(UserController.registro);

export = router;