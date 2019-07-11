import './AuthEnUs.css'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import api from '../../../services/api'
import HeaderAuthEnUs from '../HeaderAuthEnUs/HeaderAuthEnUs'

export class AuthEnUs extends Component {
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

        if (isBr) {
            return await this.populateState()
        }
    }

    populateState = async () => {
        const response = await api.get(`/?results=50&seed=vai&nat=us&noinfo`)
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
                    <Grid container className="auth-en">
                        <HeaderAuthEnUs backto="/en" />
                        <Grid
                            item
                            container
                            xs={12}
                            justify="center"
                            alignItems="flex-start"
                            className="auth-content-en"
                        >
                            <div className="auth-form-en">
                                {
                                    loginFail
                                    &&
                                    <div className="login-fail-en">
                                        <p>Invalid login.</p>
                                    </div>
                                }
                                <div>
                                    <h2>Welcome</h2>
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
                                        <span>Password</span>
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            onChange={this.handleChange('handlePassword')} />
                                    </div>
                                </div>
                                <div>
                                    <button onClick={this.login} className="auth-button-en">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                )
            case true:
                return (
                    <Redirect to="/en/dashboard" />
                )
            default:
                return <Redirect to="/en/auth" />
        }
    }
}

export default AuthEnUs