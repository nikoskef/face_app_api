const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '7e14cf9cf7b74d91b79880b7838d63a8'
});

const handleApiCall = (req, res) => {
	app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
    	res.json(data)
    })
    .catch(err => res.status(400).json('unable to work with API'))
}

const handleImagePut = (req, res, db) => {
	const { id } = req.body;
	db('users').where('id', '=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0])
	})
	.catch(err => res.status(400).json('unable to take entries'))
}

module.exports = {
	handleImagePut,
	handleApiCall
}