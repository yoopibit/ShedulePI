import React from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../';

import Spinner from './spinner';

const ReviewLayoutComponent = (props) => ({

    weekday : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],

    componentWillMount: function() {
        this.props.getSchedule();
    },

    render: function() {
        return this.props.isLoading 
            ? <Spinner /> 
            : (<div className="l-auth">
                {this._renderTable()}
              </div>);
    },

    _renderTable: function() {
        var rows = this.props.schedule && !this.props.isLoading ? this._renderTableRows() : null;
        return (
            <div className="table">{rows}</div>
        );
    },

    _renderTableRows: function() {
        var self = this;
        return this._getSortedData().map(function(item) {
            
            return (
                <div className="table-row">
                    <h3 className="week-day">{self._getWeekDay(item.day)}</h3>
                    {self._renderTableCells(item)}
                </div>
            );
        });
    },

    _renderTableCells: function(dayData) {
     return dayData.data.map(function(item) {
        return (
            <div className="table-item">
                <p>{item.subject}</p>
                <p>{item.time}</p>
                <p>{item.place}</p>
                <p>{item.teacher}</p>             
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