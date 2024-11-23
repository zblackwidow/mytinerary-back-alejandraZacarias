import { Router } from 'express';
import cities from './cities.js';
import itineraries from './itineraries.js';
import users from './users.js';
import auth from './auth.js';

const router = Router();

router.use('/cities', cities);
router.use('/itinerary', itineraries);
router.use('/users', users );
router.use('/auth', auth);

export default router;