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

			Meteor.call('insertPost', {
				title: 			form.title.value,
				slug: 			slug,
				description: 	form.description.value,
				text: 			form.text.value,
			}, function(error, slug) {
				Session.set('saveButton', 'Save Post');

				if(error) {
					return alert(error.reason);
				}

				// Here we use the slug from the server side
				Router.go('Post', {slug: slug});
			});
			
		}
	}
});
