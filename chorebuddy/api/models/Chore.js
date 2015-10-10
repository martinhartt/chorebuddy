/**
* Chore.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name:{
  		type: 'string',
  		required: true,
  	},
    house: {
      model: 'House',
    },
  	repetition:{
  		type: 'string',
  		enum: ['daily', 'weekly', 'monthly'],
  		required: true,
  	},
    days: {
      type: 'array',
      defaultsTo: [],
    },
  	time: {
  		type: 'string',
  		required: true,
  	}
  }
};
