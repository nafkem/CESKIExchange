import express from 'express';
import { CKESConverterController } from '../controllers/ckesConverterController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/onramp', authMiddleware, CKESConverterController.onRamp);
router.post('/offramp', authMiddleware, CKESConverterController.offRamp);

export default router;
