import { Router } from 'express';
import { getPlayerRankController } from '../controllers/rankingController';

const router = Router();

router.get('/rank/:id', getPlayerRankController);

export default router;