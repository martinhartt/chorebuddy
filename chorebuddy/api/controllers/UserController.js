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

	addPreferedDay: (req, res) => {
		User.findOne(req.param('id'))
		.then(user => {
			var days = user.preferedDays;
			days.push(req.param('day'));
			console.log(days);
			return User.update(user.id, {
				preferedDays: days,
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
