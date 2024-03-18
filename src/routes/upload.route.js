import { Router } from 'express';
import { controllerUploadImg } from '../controllers/upload.controller.js';

export const uploadRouter = Router();

uploadRouter.get('/', controllerUploadImg);
