/**
* House.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	houseName{
  		type: 'string',
  		required: true,
  	},
  	houseID:{
  		type: 'integer',
  		unique: true,
  		primaryKey: true,
  	},
  	Housemates:{
  		collection: 'User',
  		via: 'house',
  	},
  }
};

