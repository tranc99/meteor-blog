//Meteor.subscribe('all-posts');
//Meteor.subscribe('specificfields-posts');

Session.setDefault('lazyloadLimit', 2);
Tracker.autorun(function() {
	Meteor.subscribe('lazyload-posts', Session.get('lazyloadLimit'));
});