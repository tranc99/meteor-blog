ReactiveTimer = (function() {
	//Constructor
	function ReactiveTimer () {
		this._dependency = new Tracker.Dependency;
		this._intervalId = null;
	};

	ReactiveTimer.prototype.start = function(interval) {
		var _this = this;
		this.intervalId = Meteor.setInterval(function() {
			//rerun every "interval"
			_this._dependency.changed();
		}, 1000 * interval);
	};

	ReactiveTimer.prototype.stop = function() {
		Meteor.clearInterval(this._intervalId);
	};

	ReactiveTimer.prototype.tick = function() {
		this._dependency.depend();
	}

	return ReactiveTimer();
})();

timer = new ReactiveTimer();
timer.start(10);