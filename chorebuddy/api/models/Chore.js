/**
* Chore.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	id:{
  		type: 'integer',
  		primaryKey: true,
  		unique: true,
  	},
  	choreName:{
  		type: 'string',
  		required: true,
  	},
  	repetition:{
  		type: 'string'
  		enum: ['daily', 'weekly', 'monthly'];
  		required: true,
  	},
  	time{
  		type: 'string',
  		required: true,
  	}
  }
};

