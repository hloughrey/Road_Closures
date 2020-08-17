import { Router } from 'express';
import { getPhotos } from './flickr.controllers';

const router = Router();

router.route('/').get(getPhotos);

export default router;
