/**
 * HumanService
 *
 * @description :: The interface to communicate with users through text messages
 */


module.exports = {

  notify: (session) => {
  	var username = session.user.name;
  	var usernumber = session.user.phoneNumber;
  	var chore = session.chore;
  	var content = `Hi, ${username}! You have been asigned
  	to do the ${chore} task!`;
  	var ourphone = '+441438300495'
  	console.log(content);

  	var accountSid = 'AP55d4cef362d39c23889efd685890cad2'; 
	var authToken = '35d667bfd5fff1af591ca5c51fd7e16f'; 

  	var client = require('twilio')(accountSid, authToken);
  	client.messages.create({
  		body: content,
  		to: usernumber,
  		from: ourphone,
  	}, function(err, message){
  		if(err){
  			console.error('Could not notify');
  		}else{
  			console.log('notified');
  		}
  	});
  },
  
  recieveMessage: () => {

  }
};
