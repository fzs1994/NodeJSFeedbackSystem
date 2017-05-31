// app/routes.js
module.exports = function(app) {
	// Login Page
	app.get('/login', function(req, res) {
	  res.render('login-page');
	});

	// Signup Page
	app.get('/signup', function(req, res) {
	  res.render('signup-page');
	});

	// Dashboard Page
	app.get('/dashboard', function(req, res) {
	  res.render('dashboard');
	});

	// New Feedback Page
	app.get('/new-feedback', function(req, res) {
	  res.render('new-feedback');
	});

	// My Feedbacks Page
	app.get('/my-feedbacks', function(req, res) {
	  res.render('my-feedbacks');
	});

	// User Profile Page
	app.get('/user-profile', function(req, res) {
	  res.render('user-profile');
	});
}