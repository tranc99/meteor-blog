// if(Meteor.isClient) {

// 	Tracker.autorun(function(c) {
// 		var example = Session.get('mySessionExample');
		
// 		if(!c.firstRun) {
// 			if(Session.equals('mySessionExample', 'stop')) {
// 				alert("We stopped our reactive function");
// 				c.stop();
// 			} else {
// 				alert(example);

// 			}
// 		}
// 	});
// }

Accounts.config({
	forbidClientAccountCreation: true
});


if(Meteor.isClient) {
	Meteor.subscribe("userRoles");
}
