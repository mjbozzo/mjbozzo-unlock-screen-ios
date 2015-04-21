// Add react-test-app configuration here

module.exports = {
    notifications: [
        {
            'app': 'Get Happy',
            'icon': require('notification_icon.png'),
            'time': 'now',
            'message': 'You\'re near a Get Happy Zone. Check it ' +
            'out and earn +1 STAMP toward redeeming great rewards.'
        }
    ],
    // Callback to execute once unlock action is done
    unlockActionCallback: function() {
        window.location.href = '#!';
    }
};
