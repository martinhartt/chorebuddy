/**
* User.js
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
    id:{
      type: 'integer',
      unique: true,
      primaryKey: true,
    },
    name:{
      type: 'string',
    },
  	Housemates:{
  		collection: 'User',
  		via: 'house',
  	},
  }
};
