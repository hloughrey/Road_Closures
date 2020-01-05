import { Router } from 'express';
import { getRoads } from './roads.controllers';

const router = Router();

router.route('/').get(getRoads);

export default router;
