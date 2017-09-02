const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.myMiddleware = (req, res, next) => {
	req.name = 'Wes';
	next();
}
exports.homePage = (req, res) => {
	res.render('index'); 
} 
exports.addStore = (req, res) => {
	res.render('editStore', { title: ' Add Store' });
}

exports.createStore = async (req, res) => {
	const store = new Store(req.body);
	await store.save();
	res.redirect('/');
}