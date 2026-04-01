// Used AI for syntax help
import { Router } from 'express';

import * as publicController from '../controllers/publicController';

const router = Router();

// Routes
router.get('/:id', publicController.getPlayer);

export default router;
