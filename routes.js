Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

Router.map(function() {

	this.route('Home', {
		path: '/',
		template: 'home'
	});

	this.route('about');
});