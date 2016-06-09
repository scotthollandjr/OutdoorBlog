import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('blog', {path: 'blog/:blog_id'});
  this.route('admin');
  this.route('comment', {path: 'comment/:comment_id'});
});

export default Router;
