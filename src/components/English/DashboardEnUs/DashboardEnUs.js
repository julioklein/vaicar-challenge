import './DashboardEnUs.css'
import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import Modal from 'react-modal'
import { Grid } from '@material-ui/core'
import Loadable from 'react-loadable'
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'
import HeaderDashEnUs from '../HeaderDashEnUs/HeaderDashEnUs'
import FooterEnUs from '../FooterEnUs/FooterEnUs'

Modal.setAppElement("#root")

export class DashboardEnUs extends Component {
    state = {
        selectedComponent: "Employees",
        redirect: false,
        employees: [],
        currentPage: 1,
        cardsPerPage: 8
    }

    handleClick = e => {
        this.setState({
            currentPage: Number(e.target.id)
        });
    }

    componentWillMount() {
        const isLoggedIn = localStorage.getItem("adminLoggedIn")
        if (!isLoggedIn)
            return this.redirect()
    }

    async componentDidMount() {
        let localSaved = await JSON.parse(localStorage.getItem("employees"))
        if (localSaved) {
            this.setState({
                employees: await JSON.parse(localStorage.getItem("employees"))
            })
        }
    }

    componentDidUpdate() {
        this.saveLocal()
    }

    redirect = () => {
        this.setState({
            redirect: true
        })
    }

    logout = () => {
        localStorage.removeItem("adminLoggedIn")
        this.redirect()
    }

    save = async (employee, edit) => {
        if (edit) {
            let { employees } = this.state
            const backup = localStorage.getItem("backupInfo")
            employees = employees.map(emp => {
                if (emp.email === backup) {
                    return emp = employee
                }
                return emp
            })
            this.setState({ employees: employees })
            this.setState({ selectedComponent: 'Employees' })
            return
        }
        await this.state.employees.unshift(employee)
        this.setState({ selectedComponent: 'Employees' })
    }

    deleteEmployee = email => {
        const { employees } = this.state
        const newEmployees = employees.filter(employee => {
            return employee.email !== email
        })
        this.setState({
            employees: newEmployees
        })
    }

    async saveLocal() {
        await localStorage.setItem("employees", JSON.stringify(this.state.employees))
    }


    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    renderComponentSelector() {
        return (
            <Fragment>
                <Grid item container xs={6} justify="center" className="selected-component-en">
                    <button
                        onClick={(e) => this.setState({ selectedComponent: "Employees" })}>
                        Employees
                    </button>
                </Grid>
                <Grid item container xs={6} justify="center" className="selected-component-en">
                    <button
                        onClick={(e) => this.setState({ selectedComponent: "Register" })}>
                        Register
                    </button>
                </Grid>
            </Fragment>
        )
    }

    renderSelectedComponent(selectedComponent) {
        const Component = this.loadComponent(selectedComponent)

        return Component
    }

    loadComponent(selectedComponent) {
        switch (selectedComponent) {
            case 'Employees':
                const EmployeesEnUs = Loadable({
                    loader: () => import('../EmployeesEnUs/EmployeesEnUs'),
                    loading: LoadingIndicator
                })
                return <EmployeesEnUs
                    employees={this.state.employees}
                    handleClick={this.handleClick}
                    currentPage={this.state.currentPage}
                    cardsPerPage={this.state.cardsPerPage}
                    save={this.save}
                    deleteEmployee={this.deleteEmployee}
                    openModal={this.openModal}
                    closeModal={this.closeModal} />
            case 'Register':
                const RegisterEnUs = Loadable({
                    loader: () => import('../RegisterEnUs/RegisterEnUs'),
                    loading: LoadingIndicator
                })
                return <RegisterEnUs employees={this.state.employees} save={this.save} />
            default:
                return ""
        }
    }

    render() {
        const { redirect } = this.state

        switch (redirect) {
            case false:
                return (
                    <Grid container justify="center" className="dashboard-en">
                        <HeaderDashEnUs logout={this.logout} />
                        <Grid item container xs={10} justify="center" className="dashboard-content-en">
                            <Grid item container xs={12} justify="center" className="dashboard-header-en">
                                <h1>Welcome</h1>
                                <h2>Employee management system</h2>
                            </Grid>
                            <Grid item container xs={12} justify="center"
                                className="change-component-en">
                                <Grid item container xs={12}>
                                    {this.renderComponentSelector()}
                                </Grid>
                                <Grid item container xs={12}>
                                    {this.renderSelectedComponent(this.state.selectedComponent)}
                                </Grid>
                            </Grid>

                        </Grid>
                        <FooterEnUs goto="/en/dashboard" />
                    </Grid>
                )
            case true:
                return (
                    <Redirect to="/en/auth" />
                )
            default:
                return <Redirect to="/en/auth" />
        }
    }
}

export default DashboardEnUs