import React, { Component } from 'react';

import ScheduleDayDescription from './schedule-day-description';

class ScheduleDay extends Component {

    generateDayDescription = schedule => {
        // Make a copy of received schedule
        const days = [ ...schedule ];
        // Do a sorting by 'day' value
        const sortedDays = days.sort((a, b) => a.day - b.day);

        // Return table rows
        return sortedDays.map((day, index) => {
            return <ScheduleDayDescription { ...day } key={ index } index={ index + 1 } />
        });
    }

    render() {
        const { schedule } = this.props;

        return (
            <section className="schedule">
                { this.generateDayDescription(schedule) }
            </section>
        )
    }
}

export default ScheduleDay;