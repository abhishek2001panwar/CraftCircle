import express from 'express';
const router = express.Router();
import { resumeController, getResumes } from '../controllers/resume.controller.js';
import { ensureAuthenticated } from '../middleware/islogged.js';
import { upload } from '../utils/multer.js';



router.post('/create', upload.single('image'), resumeController);
router.get('/getresumes', ensureAuthenticated,  getResumes);



export { router };