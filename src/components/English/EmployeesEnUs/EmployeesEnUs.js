import './EmployeesEnUs.css'
import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import EmployeesCardEnUs from '../EmployeesCardEnUs/EmployeesCardEnUs'

class EmployeesEnUs extends Component {
    render() {
        const { employees } = this.props
        const { currentPage, cardsPerPage } = this.props

        const indexOfLast = currentPage * cardsPerPage
        const indexOfFirst = indexOfLast - cardsPerPage
        const current = employees.slice(indexOfFirst, indexOfLast)

        const renderCards = current.map((employee, index) => {
            return <EmployeesCardEnUs
                key={index}
                employee={employee}
                save={this.props.save}
                deleteEmployee={this.props.deleteEmployee} />
        })

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(employees.length / cardsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li key={number}>
                    <button key={number}
                        id={number}
                        onClick={this.props.handleClick}>{number}</button>
                </li>
            );
        });

        return (
            <Grid container justify="center">
                <Grid item xs={12} className="div-employees-en">
                    <Grid item xs={12} container direction="row" justify="space-around">
                        {renderCards}
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                        {renderPageNumbers}
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}

export default EmployeesEnUs