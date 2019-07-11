import './Dashboard.css'
import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import Modal from 'react-modal'
import { Grid } from '@material-ui/core'
import Loadable from 'react-loadable'
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'
import HeaderDash from '../HeaderDash/HeaderDash'
import Footer from '../Footer/Footer'

Modal.setAppElement("#root")

export class Dashboard extends Component {
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
                <Grid item container xs={6} justify="center" className="selected-component">
                    <button
                        onClick={(e) => this.setState({ selectedComponent: "Employees" })}>
                        Funcionários
                    </button>
                </Grid>
                <Grid item container xs={6} justify="center" className="selected-component">
                    <button
                        onClick={(e) => this.setState({ selectedComponent: "Register" })}>
                        Cadastrar
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
                const Employees = Loadable({
                    loader: () => import('../Employees/Employees'),
                    loading: LoadingIndicator
                })
                return <Employees
                    employees={this.state.employees}
                    handleClick={this.handleClick}
                    currentPage={this.state.currentPage}
                    cardsPerPage={this.state.cardsPerPage}
                    save={this.save}
                    deleteEmployee={this.deleteEmployee}
                    openModal={this.openModal}
                    closeModal={this.closeModal} />
            case 'Register':
                const Register = Loadable({
                    loader: () => import('../Register/Register'),
                    loading: LoadingIndicator
                })
                return <Register employees={this.state.employees} save={this.save} />
            default:
                return ""
        }
    }

    render() {
        const { redirect } = this.state

        switch (redirect) {
            case false:
                return (
                    <Grid container justify="center" className="dashboard">
                        <HeaderDash logout={this.logout} />
                        <Grid item container xs={10} justify="center" className="dashboard-content">
                            <Grid item container xs={12} justify="center" className="dashboard-header">
                                <h1>Bem vindo</h1>
                                <h2>Sistema de gerenciamento de funcionários</h2>
                            </Grid>
                            <Grid item container xs={12} justify="center"
                                className="change-component">
                                <Grid item container xs={12}>
                                    {this.renderComponentSelector()}
                                </Grid>
                                <Grid item container xs={12}>
                                    {this.renderSelectedComponent(this.state.selectedComponent)}
                                </Grid>
                            </Grid>

                        </Grid>
                        <Footer goto="/dashboard" />
                    </Grid>
                )
            case true:
                return (
                    <Redirect to="/auth" />
                )
            default:
                return <Redirect to="/auth" />
        }
    }
}

export default Dashboard