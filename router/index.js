import { Router } from 'express';
import cities from './cities.js';

const router = Router();

router.use('/cities', cities);

export default router;