import Ember from 'ember';

export default Ember.Route.extend({
		actions: {
		save2(params) {
			var newBlog = this.store.createRecord('blog', params);
			newBlog.save();
			this.transitionTo('index');
		}
	}
});
