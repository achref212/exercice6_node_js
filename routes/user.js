import express from 'express';
import { inscription } from '../controllers/user.js';
const router = express.Router();
router
    .route('/inscription')
    .post(inscription)


export default router;

