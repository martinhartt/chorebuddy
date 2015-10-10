/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: (req, res) => {
		User.create({
			name: req.param('name'),
			house: req.param('house'),
			phoneNumber: req.param('phoneNumber'),
			isManager: req.param('isManager'),
		})
		.then(user => {
			res.json({ data: user });
		})
		.catch(err => {
			res.json({ error: err});
		});
	},

	addPreferedDays: (req, res) => {
		User.findOne(req.param('id'))
		.then(user => {
			console.log(req.param('days').split(','));
			return User.update(user, {
				preferedDays: req.param('days').split(','),
			});
		})
		.then(user => {
			res.json({ data: user });
		})
		.catch(err => {
			res.json({ error: err});
		});
	},


};
