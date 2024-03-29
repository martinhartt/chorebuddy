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
    },
    house: {
      model: 'House',
    },
    isManager: {
      type: 'boolean',
      defaultsTo: false,
    },
    preferedDays: {
      type: 'array',
      defaultsTo: [],
    },
    upcomingChores: {
      collection: 'Session',
      via: 'user'
    },
    phoneNumber: {
      type: 'string',
      required: true,
    }
  }
};
