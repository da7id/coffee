Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'pourList'});

Router.route('/pour-cup', {name: 'pourCup'});
