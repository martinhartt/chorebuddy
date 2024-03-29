/**
* Session.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    chore:{
    	model: 'Chore',
    	required: true,
    },
    user:{
    	model: 'User',
    	required: true,
    },
    state:{
    	type: 'string',
    	enum: ['upcoming', 'pending', 'completed'],
    	required: true,
    },
    preferedTime: {
    	type: 'datetime',
    },
    completedOn: {
    	type: 'datetime',
    },
  }
};
