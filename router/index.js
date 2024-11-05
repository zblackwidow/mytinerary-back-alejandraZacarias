import { Router } from 'express';
import cities from './cities.js';
import itineraries from './itineraries.js';

const router = Router();

router.use('/cities', cities);
router.use('/itinerary', itineraries);

export default router;