import './RegisterEnUs.css'
import React, { Component } from 'react'
import { Grid } from '@material-ui/core';

class RegisterEnUs extends Component {

    state = {
        name: {
            first: "",
            last: ""
        },
        gender: "",
        location: {
            city: "",
            state: "",
            street: "",
            postcode: ""
        },
        email: "",
        dob: {
            date: "",
            age: ""
        },
        registered: {
            date: ""
        },
        phone: "",
        cell: "",
        picture: {
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
            large: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        registerFail: false
    }

    clear() {
        this.setState({})
    }

    updateField = input => e => {
        if (input === "phone" || input === "cell") {
            this.setState({
                [input]: e.target.value.replace(/\D/g, '')
            })
            return
        }
        this.setState({
            [input]: e.target.value
        })
    }

    updateObjectField = input => e => {
        e.preventDefault()
        if (input === "date") {
            let value = e.target.value
            let eName = e.target.name
            this.setState(prevState => ({
                [eName]: {
                    ...prevState[eName],
                    [input]: value.replace(/\D/g, '')
                        .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
                        .replace(/(\/\d{4})\d+?$/, '$1')
                }
            }))
            return
        }

        if (input === "postcode") {
            let value = e.target.value
            let eName = e.target.name
            this.setState(prevState => ({
                [eName]: {
                    ...prevState[eName],
                    [input]: value.replace(/\D/g, '')
                }
            }))
            return
        }

        let value = e.target.value
        let eName = e.target.name
        this.setState(prevState => ({
            [eName]: {
                ...prevState[eName],
                [input]: value
            }
        }))
    }

    save = e => {
        e.preventDefault()

        if ((
            this.state.name.first &&
            this.state.name.last &&
            this.state.gender &&
            this.state.location.city &&
            this.state.location.state &&
            this.state.location.street &&
            this.state.location.postcode &&
            this.state.email &&
            this.state.dob.date &&
            this.state.dob.age &&
            this.state.registered.date &&
            this.state.phone &&
            this.state.cell
        ) === '') {
            this.setState({
                registerFail: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        registerFail: false
                    })
                }, 1500)
            })
            return false
        }

        const employee = this.state
        this.props.save(employee)
    }

    render() {
        let { registerFail } = this.state

        return (
            <Grid container justify="center">
                <Grid item container xs={12} sm={8} justify="center" className="register-en">
                    <Grid item xs={12} sm={10}>
                        <label>First Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name.first}
                            onChange={this.updateObjectField('first')}
                            placeholder="Ex: John" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name.last}
                            onChange={this.updateObjectField('last')}
                            placeholder="Ex: Doe" />
                    </Grid>

                    <Grid item container xs={12} sm={10} justify="flex-start" alignItems="center">
                        <Grid item xs={12}>
                            <label>Gender</label>
                        </Grid>
                        <Grid item container xs={1} justify="center">
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                                checked={this.state.gender === "female"}
                                onChange={this.updateField('gender')} />
                        </Grid>
                        <Grid item sm={11}>
                            <label htmlFor="female">Female</label>
                        </Grid>
                        <Grid item container xs={1} justify="center">
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                                checked={this.state.gender === "male"}
                                onChange={this.updateField('gender')} />
                        </Grid>
                        <Grid item sm={11}>
                            <label htmlFor="male">Male</label>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Birthday</label>
                        <input
                            type="text"
                            name="dob"
                            value={this.state.dob.date}
                            onChange={this.updateObjectField('date')}
                            placeholder="Ex: 01/01/1999" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Age</label>
                        <input
                            type="number"
                            name="dob"
                            value={this.state.dob.age}
                            onChange={this.updateObjectField('age')}
                            placeholder="Ex: 20" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Street</label>
                        <input
                            type="text"
                            name="location"
                            value={this.state.location.street}
                            onChange={this.updateObjectField('street')}
                            placeholder="Ex: Rua Qualquer, 20" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>City</label>
                        <input
                            type="text"
                            name="location"
                            value={this.state.location.city}
                            onChange={this.updateObjectField('city')}
                            placeholder="Ex: São Paulo" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>State</label>
                        <input
                            type="text"
                            name="location"
                            value={this.state.location.state}
                            onChange={this.updateObjectField('state')}
                            placeholder="Ex: São Paulo" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Postcode</label>
                        <input
                            type="text"
                            name="location"
                            value={this.state.location.postcode}
                            onChange={this.updateObjectField('postcode')}
                            placeholder="Ex: 0400-040" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <h3>Contact</h3>
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.updateField('email')}
                            placeholder="Ex: john@email.com" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.updateField('phone')}
                            placeholder="Ex: 5555-5555" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Cell</label>
                        <input
                            type="text"
                            name="cell"
                            value={this.state.cell}
                            onChange={this.updateField('cell')}
                            placeholder="Ex: 95555-5555" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Admission date</label>
                        <input
                            type="text"
                            name="registered"
                            value={this.state.registered.date}
                            onChange={this.updateObjectField('date')}
                            placeholder="Ex: 01/01/2019" />
                    </Grid>

                    {
                        registerFail
                        &&
                        <div className="register-fail-en">
                            <p>Complete all fields.</p>
                        </div>
                    }

                    <Grid item container xs={12} sm={10} justify="space-around">
                        <Grid item>
                            <button onClick={this.save} className="register-button-save-en">
                                Register
                            </button>
                        </Grid>
                        <Grid item>
                            <a href="/en/dashboard">
                                <button className="register-button-cancel-en">
                                    Cancel
                                </button>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default RegisterEnUs