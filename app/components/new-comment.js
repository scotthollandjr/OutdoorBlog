import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addComment() {
			var params = {
				name: this.get('name'),
				content: this.get('content'),
				blog: this.get('blog')
			};

			this.sendAction('addComment2', params);

		}
	}
});
