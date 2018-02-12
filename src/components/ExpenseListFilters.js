import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import uuid from 'uuid'

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends Component {

    state = {
        calendarFocused : null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.props.filters.text}
                    onChange={e => props.dispatch(setTextFilter(e.target.value))} />
    
                <select value={this.props.filters.sortBy}
                    onChange={e => {
    
                        switch (e.target.value) {
                            case "date":
                                this.props.dispatch(sortByDate());
                                break;
                            case "amount":
                                this.props.dispatch(sortByAmount());
                                break;
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId={uuid()}
                    endDate={this.props.filters.endDate}
                    endDateId={uuid()}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ filters }) => ({ filters });

export default connect(mapStateToProps)(ExpenseListFilters);
