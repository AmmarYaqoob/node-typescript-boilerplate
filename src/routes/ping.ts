import express from 'express';
import PingController from '../controllers/pingcontroller';

const router = express.Router();

router.get('/', PingController.ping);

export default router;