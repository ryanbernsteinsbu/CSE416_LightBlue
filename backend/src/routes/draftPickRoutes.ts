import { Router } from 'express';

import * as draftPickController from '../controllers/draftPickController';

const router = Router();

// Routes
router.post('/create', draftPickController.createDraftPick);
router.post('/bulk', draftPickController.bulkCreateDraftPicks);
router.get('/team/:id', draftPickController.getTeamDraftPicks);

export default router;