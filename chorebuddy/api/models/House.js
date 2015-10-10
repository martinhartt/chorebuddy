/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
  		required: true,
  	},
    manager: {
      model: 'User',
    },
  	members:{
  		collection: 'User',
  		via: 'house',
      defaultsTo: [],
  	},
    chores: {
      collection: 'Chore',
      via: 'house',
      defaultsTo: [],
    },
  }
};
