// Create middleware function to d to check if a user is authenticated before allowing them to access certain routes
const withAuth = (req, res, next) => {
    if(!req.session.user_id) { // If the user is not authenticated redirect them to the login page
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;