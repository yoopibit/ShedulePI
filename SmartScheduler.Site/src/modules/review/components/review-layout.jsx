import React from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../';

import Spinner from './spinner';

const ReviewLayoutComponent = (props) => ({

    weekday : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeGaps: ["8:30 - 10:00", "10:05 - 11:15", "11:35 - 12:10", "12:45 - 14:00", "14:15 - 15:10"],

    componentWillMount: function() {
        this.props.getSchedule();
    },

    render: function() {
        var rows = this.props.schedule && !this.props.isLoading ? this._renderTableRows() : null;
        return this.props.isLoading 
            ? <Spinner /> 
            : (
                <div className="table">{rows}</div>
              );
    },

    _renderTableRows: function() {
        var self = this;
        return this._getSortedData().map(function(item) {
            return (
                <div className="day-data">
                   <div className="day-col">
                        <h3 className="week-day">{self._getWeekDay(item.day)}</h3>
                    </div>
                    <div className="table-row">
                        {self._renderScheduleData(item)}
                    </div>
                </div>
            );
        });
    },

    _renderScheduleData: function(dayData) {
        var sortedData = this._getSortedDataByPair(dayData.data);
        return sortedData.map(function(item) {
            return (
                <div className="table-block">
                    <div className="pair-col">{item.pair}</div>
                    <div className="data-col">
                        <p><span className="label">Subject:</span>{item.subject}</p>
                        <p><span className="label">Place:</span>{item.place}</p>
                        <p><span className="label">Teacher:</span><i>{item.teacher}</i> </p>            
                    </div>
                </div>
            );
        })
    },

    _getWeekDay: function(index) {
        return this.weekday[index-1];        
    },

    _getSortedData: function() {
        return this.props.schedule.sort(function(a, b) {
            return a.day - b.day;
        });
    },

    _getSortedDataByPair: function(item) {
        return item.sort(function(a, b) {
            return a.pair - b.pair;
        });
    }
});


const mapStateToProps = state => ({
    schedule: state.review.schedule,
    isLoading: state.review.isLoading   
});

const mapDispatchToProps = dispatch => ({
        getSchedule() {
            dispatch(actionCreators.getSchedule());
        }
});


export default connect(mapStateToProps, mapDispatchToProps)(ReviewLayoutComponent);