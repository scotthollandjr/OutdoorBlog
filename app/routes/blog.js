import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('blog', params.blog_id);
	},
	actions: {
		addComment3(params) {
			var newComment = this.store.createRecord('comment', params);
			var blog = params.blog;
			blog.get('comments').addObject(newComment);
			newComment.save().then(function() {
				return blog.save();
			});
			this.transitionTo('index');
		}
	}
});
