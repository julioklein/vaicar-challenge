import './Auth.css'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import api from '../../../services/api'
import HeaderAuth from '../HeaderAuth/HeaderAuth'

export class Auth extends Component {
    state = {
        administrator: {
            email: "admin",
            password: "123456"
        },
        loginFail: false,
        redirect: false,
        handleEmail: "",
        handlePassword: "",
        employees: []
    }

    redirect = () => {
        this.setState({
            redirect: true
        })
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    loginFail = () => {
        this.setState({
            loginFail: true
        })
    }

    async componentDidMount() {
        const employees = await JSON.parse(localStorage.getItem("employees"))

        let isBr = employees.some(employee => {
            return employee.nat === "BR"
        })

        if (!isBr) {
            return await this.populateState()
        }
    }

    populateState = async () => {
        const response = await api.get(`/?results=50&seed=vai&nat=br&noinfo`)
        const results = response.data.results
        this.setState({
            employees: results
        })
        await localStorage.setItem("employees", JSON.stringify(this.state.employees))
    }

    isEmpty = (login, password) => {
        if ((login && password) === "") {
            return this.loginFail()
        }
    }

    login = async e => {
        e.preventDefault()
        const { email, password } = this.state.administrator
        const { handleEmail, handlePassword } = this.state

        this.isEmpty(handleEmail, handlePassword)

        const formData = {
            email: handleEmail,
            password: handlePassword,
            redirect: this.redirect,
            loginFail: this.loginFail,
            populateState: this.populateState,
        }

        const isAdmin = ((email === formData.email) && (password === formData.password))

        if (!isAdmin)
            return formData.loginFail()

        localStorage.setItem("adminLoggedIn", true)

        const isSetLocal = await localStorage.getItem("employees")

        if (!isSetLocal) {
            await formData.populateState()
            formData.redirect()
        }

        formData.redirect()
    }

    render() {
        const { redirect, loginFail } = this.state

        switch (redirect) {
            case false:
                return (
                    <Grid container className="auth">
                        <HeaderAuth backto="/" />
                        <Grid
                            item
                            container
                            xs={12}
                            justify="center"
                            alignItems="flex-start"
                            className="auth-content"
                        >
                            <div className="auth-form">
                                {
                                    loginFail
                                    &&
                                    <div className="login-fail">
                                        <p>Login inválido.</p>
                                    </div>
                                }
                                <div>
                                    <h2>Bem vindo</h2>
                                </div>
                                <div>
                                    <div>
                                        <span>Email</span>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            onChange={this.handleChange('handleEmail')}
                                            placeholder="john@mail.com" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>Senha</span>
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            onChange={this.handleChange('handlePassword')} />
                                    </div>
                                </div>
                                <div>
                                    <button onClick={this.login} className="auth-button">
                                        Entrar
                                    </button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                )
            case true:
                return (
                    <Redirect to="/dashboard" />
                )
            default:
                return <Redirect to="/auth" />
        }
    }
}

export default Auth