Meteor.startup(function() {

	console.log('Server started');

	if(Posts.find().count() < 10) {

		console.log('Adding dummy posts');
		var dummyPosts = [
			{
				title: 'An entry',
				slug: 'my-nth-entry',
				description: 'Lorem ipsuum dolor sit amet.',
				text: 'Lorem ipsum dolor sit amet',
				timeCreated: moment().subtract(7, 'days').unix(),
				author: 'John Doe'
			},
			{
				title: 'An entry',
				slug: 'my-2th-entry',
				description: 'Lorem ipsuum dolor sit amet.',
				text: 'Lorem ipsum dolor sit amet',
				timeCreated: moment().subtract(5, 'days').unix(),
				author: 'John Doe'
			},
			{
				title: 'An entry',
				slug: 'my-3th-entry',
				description: 'Lorem ipsuum dolor sit amet.',
				text: 'Lorem ipsum dolor sit amet',
				timeCreated: moment().subtract(3, 'days').unix(),
				author: 'John Doe'
			},
			{
				title: 'A 4th entry',
				slug: 'my-4th-entry',
				description: 'Lorem ipsuum dolor sit amet.',
				text: 'Lorem ipsum dolor sit amet',
				timeCreated: moment().subtract(2, 'days').unix(),
				author: 'John Doe'
			},
			{
				title: 'An entry',
				slug: 'my-5th-entry',
				description: 'Lorem ipsuum dolor sit amet.',
				text: 'Lorem ipsum dolor sit amet',
				timeCreated: moment().subtract(1, 'days').unix(),
				author: 'John Doe'
			},
			{
				title: 'Another entry',
				slug: 'my-6th-entry',
				description: 'Lorem ipsuum dolor sit amet.',
				text: 'Lorem ipsum dolor sit amet',
				timeCreated: moment().subtract(1, 'days').unix(),
				author: 'John Doe'
			}
			
		];

		//We add the dummyPosts to our database
		_.each(dummyPosts, function(post) {
			Posts.insert(post);
		});
	}


	if(Meteor.users.find().count() === 0) {
		console.log('Created Admin user');

		var userId = Accounts.createUser({
			username: 'johndoe',
			email: 'johndoe@example.com',
			password: '1234',
			profile: {
				name: 'John Doe'
			}
		}); 

		// add the roles to our user
		Meteor.users.update(userId, {$set: {
			roles: {admin: true},
		}});
	}

	Meteor.users.update("nyY5bWJimj68g8DDd", {$set: {
			roles: {admin: true},
		}});
	

});