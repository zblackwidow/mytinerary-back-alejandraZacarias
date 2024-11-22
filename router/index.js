import { Router } from 'express';
import cities from './cities.js';
import itineraries from './itineraries.js';
import users from './users.js';

const router = Router();

router.use('/cities', cities);
router.use('/itinerary', itineraries);
router.use('/users', users );

export default router;