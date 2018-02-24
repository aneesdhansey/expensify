import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import uuid from 'uuid'

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onSortChanged = (e) => {
        switch (e.target.value) {
            case "date":
                this.props.sortByDate();
                break;
            case "amount":
                this.props.sortByAmount();
                break;
        }
    }

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input type="text"
                            className="text-input"
                            placeholder="Search expenses"
                            value={this.props.filters.text}
                            onChange={this.onTextChange} />
                    </div>
                    <div className="input-group__item">
                        <select className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChanged}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId="start"
                            calendarInfoPosition="bottom"
                            endDate={this.props.filters.endDate}
                            endDateId="end"
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ filters }) => ({ filters });

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
