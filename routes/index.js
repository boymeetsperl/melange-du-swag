
/*
 * GET home page.
 */

var brand = 'Melange Du Swag';

exports.index = function(req, res){
  res.redirect('/home');
}

// I believe the object you pass to res.render
// end up being locals passed to the Jade template.
exports.home = function(req, res){
  res.render('home', { title: 'Home', id: 'home', brand: brand })
};

exports.about = function(req, res){
  res.render('about', { title: 'About', id: 'about', brand: brand })
};

exports.test = function(req, res){
	res.render('test', { title: 'TestPage', id: 'test', brand: 'testbrand' })
};