var React = require('react/addons'),
    $ = require('jquery'),
    Configuration = require('../configuration.js');

require('jquery-ui/datepicker');
require('../../styles/unlockScreenClock.css');

module.exports = React.createClass({
    getDefaultProps: function () {
        return {
            twelveHoursClock: false
        };
    },
    getCurrentTime: function () {
        var date = new Date;
        var currentHour = date.getHours();

        //Format hour correctly if needed
        var hour = this.props.twelveHoursClock && currentHour > 12 ?
            currentHour % 12 : currentHour;

        //Update hour to 12 if it is set to 0 in 12-hour format
        this.setState({
            currentHour: this.props.twelveHoursClock && hour === 0 ?
                12 : hour,
            currentMinutes: (date.getMinutes() < 10 ? '0' : '') +
                date.getMinutes()
        });
    },
    componentDidMount: function () {
        this.setState({
            currentDate: $.datepicker.formatDate('DD, MM d', new Date())
        });
        setInterval(this.getCurrentTime, 1000);
    },
    componentWillMount: function () {
        this.getCurrentTime();
    },
    render: function() {
        return (
            <div className="unlock-screen-clock">
                <p className="current-time">
                    {this.state.currentHour}
                    <span className="colon"></span>
                    {this.state.currentMinutes}
                </p>
                <p className="current-date">{this.state.currentDate}</p>
            </div>
        );
    }
});
