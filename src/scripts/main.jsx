var React = require('react/addons'),
    App = React.createFactory(require('./app.jsx'));

React.render(
    App(),
    document.getElementById('app')
);
