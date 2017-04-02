import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators as guestReviewActionCreators } from '../duck';
import ScheduleDay from './schedule-day';
import DropDown from '../../../components/drop-down';

class GuestReview extends Component {
    componentWillMount() {
        const { fetchSchedule } = this.props;

        fetchSchedule();
    }

    render() {
        const { guestReview } = this.props;
        const { schedule } = guestReview;

        if(!schedule) {
            return null;
        }

        return (
            <section className="schedule-container">
                <section className="schedule__menu">
                    <section className="schedule__menu-item">
                        <span className="schedule__menu-title">Institute</span> 
                        <DropDown options={ ['ІКНІ']} />
                    </section>

                    <section className="schedule__menu-item">
                        <span className="schedule__menu-title">Group</span> 
                        <DropDown options={ ['ПІ-32'] } />
                    </section>

                    <section className="schedule__menu-item">
                        <span className="schedule__menu-title">Semester</span> 
                        <DropDown options={ ['Осінній'] } />
                    </section>

                    <section className="schedule__menu-item">
                        <span className="schedule__menu-title">Semester half</span> 
                        <DropDown options={ ['Друга'] } />
                    </section>
               </section>
                <ScheduleDay schedule={ schedule } />
            </section>
        )
    }
}

const mapStateToProps = state => ({
    guestReview: state.guestReview
});

const mapDispatchToProps = dispatch => ({
    fetchSchedule() {
        dispatch(guestReviewActionCreators
            .fetchSchedule());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestReview);