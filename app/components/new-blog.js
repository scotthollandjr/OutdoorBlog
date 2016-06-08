import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		save1() {
			var params = {
				author: this.get('author'),
				title: this.get('title'),
				content: this.get('content'),
				date: this.get('date'),
				image: this.get('image'),
			};
			this.sendAction('save1', params);	
		}	
	}
}); 
