const express = require('express');
const { upload } = require('../utilities/multer');
const fileController = require('../controllers/fileController');
const router = express.Router();


router.post('/fileData', upload,  fileController.addFile);
router.get('/fileData', fileController.getFileData);
router.put('/fileData', fileController.updateFileData);
router.delete('/fileData', fileController.deleteFile);

module.exports = router

