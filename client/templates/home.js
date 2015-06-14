Template.home.helpers({
	postsList: function() {
		return Posts.find().fetch();
	}
});


