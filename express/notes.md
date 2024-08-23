common ways:
1. set port or api url in <<process.env.PORT || 3000>> etc easier to deploy things
2. 

middleware - code that sit bwt 2 layers of software, e.g express sitting bwt request and response
1. app.use('/assets', express.static(__dirname + '/public')) url redirect to public folder
2. app.use(express.json()),  Automatically parses JSON request bodies and makes them available in req.body without manual parsing.
3. // Custom authentication middleware
    function isAuthenticated(req, res, next) {
        if (req.user) { // Assuming req.user is set after login
            next(); // Proceed to the next middleware or route handler
        } else {
            res.status(401).send('Not authenticated');
        }
    }

    // Protect the "/dashboard" route with authentication middleware
    app.get('/dashboard', isAuthenticated, (req, res) => {
        res.send('Welcome to your dashboard!');
    });

--> Adds a layer of protection to routes that should only be accessible to logged-in users, keeping unauthorized users out.
4. app.use(cookieParser())