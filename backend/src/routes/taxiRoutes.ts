import { Router } from 'express';

import * as taxiController from '../controllers/taxiController';

const router = Router();

router.post('/bulk', taxiController.saveTaxiPicks);
router.get('/team/:id', taxiController.getTeamTaxiPicks);
 
export default router;