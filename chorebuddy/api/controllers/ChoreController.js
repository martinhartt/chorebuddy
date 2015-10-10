/**
 * ChoreController
 *
 * @description :: Server-side logic for managing Chores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: (req, res) => {
		Chore.create({
			name: req.param('name'),
			repetition: req.param('repetition'),
			days: req.param('days').split(','),
			time: req.param('time'),
			house: req.param('house'),
		})
		.then(chore => {
			res.json({ data: chore });
		})
		.catch(err => {
			res.json({ error: err});
		});
	},

};
