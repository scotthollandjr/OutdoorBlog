import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('blog', {path: 'blog/:blog_id'});
  this.route('admin');
  this.resource('messages');
  this.route('messages');
});

export default Router;
