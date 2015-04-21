var React = require('react/addons'),
    $ = jQuery = require('jquery'),
    UnlockScreenClock = require('./unlockScreenClock.jsx'),
    UnlockScreenNotifications = require('./unlockScreenNotifications.jsx');

require('jquery-ui/draggable');
require('jquery-ui-touch-punch');
require('../styles/unlockScreen.css');

module.exports = React.createClass({
    componentDidMount: function () {
        var edge = 183,
            ableToUnlock = false;

        $('.content').draggable({
            axis: 'x',
            containment: 'parent',
            scroll: false,
            drag: function (event, ui) {
                ableToUnlock = ui.offset.left >= edge;
                $('.camera').css('left', ui.position.left);
                $('.handler').css('top', ui.position.left / 16);
            },
            stop: function () {
                if (ableToUnlock && this.props.config.unlockActionCallback) {
                    this.props.config.unlockActionCallback();
                } else {
                    $('.content').animate({left: '0'}, 750);
                    $('.camera').animate({left: '0'}, 750);
                    $('.handler').animate({top: '0'}, 750);
                }
            }
        });
    },
    render: function () {
        return (
            <div data-role="page" className="unlock-screen">
                <div className="content">
                    <UnlockScreenClock />
                    <UnlockScreenNotifications config={this.props.config}/>
                    <div className="unlock-slider"></div>
                </div>
                <div className="footer">
                    <div className="handler"></div>
                    <div className="camera"></div>
                </div>
            </div>
        );
    }
});
