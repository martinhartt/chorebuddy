/**
 * ChoreController
 *
 * @description :: Server-side logic for managing Chores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:(req, res) => {
		Chore.create({
			name: req.param('name'),
			repetiton: req.param('repetiton'),
			days: req.param('days'),
			time: time.param('time'),
		})
		.then(chore => {
			res.json({ data: chore });
		})
		.catch(err => {
			res.json({error : err});
		})
	},

	edit:(req, res) =>{
		Chore.update(req.id, {
			name: req.param('name'),
			repetiton: req.param('repetiton'),
			days: req.param('days'),
			time: time.param('time'),
		})
		.then(user => {
			res.json({ data: chore });
		})
		.catch(err => {
			res.json({ error: err});
		});
	},
	
};

