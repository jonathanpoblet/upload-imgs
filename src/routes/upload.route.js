import { Router } from 'express';
import { controllerUploadImg } from '../controllers/upload.controller.js';
import { upload } from '../middlewares/multer.middleware.js';

export const uploadRouter = Router();

uploadRouter.post('/img', upload.single('img'), controllerUploadImg);
