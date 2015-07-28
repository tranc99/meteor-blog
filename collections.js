Posts = new Mongo.Collection('posts');

if(Meteor.isServer) {

	Posts.allow({
		insert: function(userId, doc) {
			// the user must be logged in, and own the document
			return userId && doc.owner === userId && Meteor.user().roles.admin;
		},

		update: function(userId, doc, fields, modifier) {
			// user must be an admin
			return Meteor.user().roles.admin;
		},

		//make sure we only get this field from the documents
		fetch: ['owner']
	});

	//deny rules
	Posts.deny({
		update: function(userId, docs, fields, modifier) {
			// can't change the onwers, timeCreated and slug
			return _.contains(fields, 'owner') || _.contains(fields, 'slug');
		}
	});
}