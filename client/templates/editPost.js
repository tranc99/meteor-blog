Session.setDefault('saveButton', 'Save Post');

Template.editPost.helpers({
	saveButtonText: function () {
		return Session.get('saveButton');
	}
});

Template.editPost.events({
	'submit form': function(e, tmpl) {
		e.preventDefault();
		console.log('Saving Post');
		var form = e.target;
		var user = Meteor.user();
		_this = this;

		//edit the post
		if(this._id) {
			Posts.update(this._id, {$set: {
				title: 			form.title.value,
				description: 	form.description.value,
				text:  			form.text.value
			}}, function(error) {
				if(error) {
					alert(error.reason);
				} else {
					Router.go('Post', {slug: _this.slug});
				}
			});
		} else {
			var slug = _.slugify(form.title.value);

			// save the post in the collection
			Posts.insert({
				title: 			form.title.value,
				slug: 			slug,
				description: 	form.description.value,
				text: 			form.text.value,
				timeCreated:  	moment().unix(),
				author: 		user.profile.name,
				owner: 			user._id

			}, function(error) {
				if(error) {
					//display the error to the user
					alert(error.reason);
				} else {
					//redirect to the post
					Router.go('Post', {slug: slug});
				}
			});
		}
	}
});
