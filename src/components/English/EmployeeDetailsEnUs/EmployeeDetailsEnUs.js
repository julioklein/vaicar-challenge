import './EmployeeDetailsEnUs.css'
import React, { Component } from 'react'
import { Grid } from '@material-ui/core';

class EmployeeDetailsEnUs extends Component {

    state = { ...this.props.employee }

    componentWillMount() {
        localStorage.removeItem("backupInfo")
    }

    componentDidMount() {
        localStorage.setItem("backupInfo", this.state.email)
    }

    clear() {
        this.props.closeModal()
    }

    updateField = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    updateObjectField = input => e => {
        e.preventDefault()
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
        const user = this.state
        this.props.save(user, true)
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item container xs={12} sm={8} justify="center" className="edit-en">
                    <Grid item xs={12} sm={10}>
                        <img src={this.state.picture.large} alt="Emloyee's avatar" />
                    </Grid>

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

                    <Grid item container xs={12} sm={10} justify="space-around">
                        <Grid item>
                            <button onClick={this.save} className="edit-button-save-en">
                                Save
                            </button>
                        </Grid>
                        <Grid item>
                            <button onClick={e => this.clear(e)} className="edit-button-cancel-en">
                                Cancel
                            </button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default EmployeeDetailsEnUs