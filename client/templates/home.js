Template.home.helpers({
	postsList: function() {
		return Posts.find().fetch();
	},

	sessionExample: function() {
		return Session.get('mySessionExample');
	}
});

Template.home.events({
	'click button.lazyload': function(e, template) {
		var currentLimit = Session.get('lazyloadLimit');

		Session.set('lazyloadLimit', currentLimit + 2);
	}
});



