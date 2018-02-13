import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
                <header>
                    <h1>Expensify</h1>
                    <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
                    <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
                </header>
        )
    }
}

export default Header
