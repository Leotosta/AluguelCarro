import { Router } from 'express';
import RegisterRouter from './RegisterRouter';

import AuthAluguel from '../middlewares/AuthAluguel';

const router = Router();

router.use('/', RegisterRouter);
// router.use('/', AuthAluguel, RegisterRouter);


export default router;