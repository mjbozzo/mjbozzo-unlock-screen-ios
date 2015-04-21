var React = require('react/addons');
    Configuration = require('../configuration.js');

require('../../styles/unlockScreenNotifications.css');

module.exports = React.createClass({
    render: function() {
        var notifications = '';
        if (Configuration.notifications) {
            var notificationClass = (Configuration.notifications.length > 1)?
                'notification with-border' : 'notification';
            notifications = Configuration.notifications.map(
                function(notification, i) {
                    return (
                        <div key={i} className={notificationClass}>
                            <div className="icon">
                                <img src={notification.icon} />
                            </div>
                            <div className="row">
                                <span className="application">
                                    {notification.app}
                                </span>
                                <span className="time">
                                    {notification.time}
                                </span>
                            </div>
                            <div className="message">
                                <div>{notification.message}</div>
                                <div className="slide-to-view">
                                    slide to view
                                </div>
                            </div>
                            <div className="slide-message">
                                {notification.secondaryMessage}
                            </div>
                        </div>
                    )
                }
            );
        }
        return (
            <div className="unlock-screen-notifications">
                <div className="notificationsList">
                    {notifications}
                </div>
            </div>
        );
    }
});
