module.exports = {
    index: (req, res) => {
        res.render('index')
    },
    privateRoute: (req,res) => {
        res.render('private-route', {'user': req.user, isAuthenticated: req.user});
        
    }
}