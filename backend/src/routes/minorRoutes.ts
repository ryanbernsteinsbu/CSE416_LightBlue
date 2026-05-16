import { Router } from 'express';

import * as minorController from '../controllers/minorController';

const router = Router();

// Routes
router.get("/:teamId", minorController.getTable);
router.post("/:tableId/save", minorController.savepicks);export default router;