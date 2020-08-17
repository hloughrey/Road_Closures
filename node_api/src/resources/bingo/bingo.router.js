import { Router } from 'express';
import { getNewNumber } from './bingo.controllers';

const router = Router();

router.route('/').get(getNewNumber);

export default router;
