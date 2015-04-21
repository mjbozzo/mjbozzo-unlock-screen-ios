var React = require('react/addons'),
    RouterMixin = require('react-mini-router').RouterMixin,
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    Configuration = require('./configuration.js');

var UnlockScreen = require('./components/unlockScreen.jsx');

module.exports = React.createClass({
    mixins: [RouterMixin],
    routes: {
        '/': 'home',
        '/unlock-screen': 'unlockScreen'
    },
    render: function () {
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionLeave={false}>
                { this.renderCurrentRoute() }
            </ReactCSSTransitionGroup>
        );
    },
    home: function () {
        return <div/>;
    },
    unlockScreen: function () {
        return <UnlockScreen key={ this.state.path }/>;
    }
});
