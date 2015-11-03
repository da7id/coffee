Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'pourList'});

Router.route('/pour-cup', {name: 'pourCup'});
Router.route('/add-beans', {name: 'addBeans'});
Router.route('/view-beans', {name: 'beansList'});
