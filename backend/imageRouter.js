const express = require('express');
const router = express.Router();
const db = require('./firebase');
const ref = db.ref('imageUploads');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/');
	},
	filename: (req, file, cb) => {
		cb(null, new Date().toISOString() + file.originalname);
	},
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('File not supported'), false);
    }
}
const upload = multer({
	storage: storage,
	limits: { fileSize: 1024 * 1024 * 10 }, 
    fileFilter: fileFilter
});

router.get('/', (req, res) => {
	try {
		ref.once('value').then((snap) => {
			res.status(200).json(snap.val());
		});
	} catch (err) {
		res.status(400).send(err);
	}
});

router.get('/:id', (req, res) => {
	const id = req.params.id;

	try {
		db.ref(`imageUploads/${id}`)
			.once('value')
			.then((snap) => {
				res.status(200).send(snap.val());
			});
	} catch (err) {
		res.status(400).send(err);
	}
});

router.post('/', upload.single('img'), (req, res) => {
	console.log(req.file);

	try {
		const payload = {
			path: req.file.path,
		};

		ref.push()
			.set(payload)
			.then(() => {
				res.status(200).send('Data added successfully');
			});
	} catch (err) {
		res.status(400).send(err);
	}
});

router.patch('/:id', (req, res) => {
	const id = req.params.id;
	const payload = {
		path: req.body?.path,
	};

	try {
		db.ref(`imageUploads/${id}`)
			.update(payload)
			.then(() => {
				res.status(200).send('Data Updated Successfully');
			});
	} catch (err) {
		res.status(400).send(err);
	}
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;

	try {
		db.ref(`imageUploads/${id}`)
			.remove()
			.then(() => {
				res.status(200).send('Data deleted successfully');
			});
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
