/**
 * HouseController
 *
 * @description :: Server-side logic for managing Houses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: (req, res) => {
		User.create({
			name: req.param('username'),
			phoneNumber: req.param('phoneNumber'),
			isManager: true,
		})
		.then(user => {
			console.log(user);
			return House.create({
				name: req.param('housename'),
				manager: user,
			})
			.then(house => {
				return {
					user: user,
					house: house,
				}
			});
		})
		.then(user => {
			res.json({ data: user });
		})
		.catch(err => {
			console.log(err);
			res.json({ error: err});
		});
	},

	addUser: (req, res) => {
		res.ok();
	},

	addTask: (req, res) => {
		res.ok();
	},

	setup: (req, res) => {
		res.ok();
	},
};
