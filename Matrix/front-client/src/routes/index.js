var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');

router.get('*', function(request, response) {
    var props = { title: 'Universal React' };
    ReactRouter.match({
        routes: (
            <ReactRouter.Router history={ReactRouter.browserHistory}>
                <ReactRouter.Route path='/feed' component={require('../src/components/Feed/Feed.js')}>
                </ReactRouter.Route>
            </ReactRouter.Router>
        ),
        location: request.url
    }, function(error, redirectLocation, renderProps) {
        if (renderProps) {
            var html = ReactDOMServer.renderToString(
                <ReactRouter.RouterContext {...renderProps} />
            );
            response.send(html);
        } else {
            response.status(404).send('Not Found');
        }
    });
});

module.exports = router;