Template.home.helpers({
	postsList: function() {
		return [
			{
				title: 'My Second Entry',
				description: 'Working hard in Kampala, hustling everyday.',
				author: 'Tomahawk Tindo',
				timeCreated: moment().subtract(3, 'days').unix()
			},
			{
				title: 'My First Entry',
				description: 'Life and Times of Tomahawk Ten',
				author: 'Tomahawk Ten',
				timeCreated: moment().subtract(7, 'days').unix()
			}, 
			{
				title: 'The Three Little Pigs',
				description: 'A jolly little tale',
				author: 'Tomahawk, who else?',
				timeCreated: moment().subtract(7, 'days').unix()

			}
		];
	}
});


