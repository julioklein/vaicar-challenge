import './EmployeeDetails.css'
import React, { Component } from 'react'
import { Grid } from '@material-ui/core';

class EmployeeDetails extends Component {

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
        const user = this.state
        this.props.save(user, true)
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item container xs={12} sm={8} justify="center" className="edit">
                    <Grid item xs={12} sm={10}>
                        <img src={this.state.picture.large} alt="Foto do funcionário" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Nome</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name.first}
                            onChange={this.updateObjectField('first')}
                            placeholder="Ex: João" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Sobrenome</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name.last}
                            onChange={this.updateObjectField('last')}
                            placeholder="Ex: Silva" />
                    </Grid>

                    <Grid item container xs={12} sm={10} justify="flex-start" alignItems="center">
                        <Grid item xs={12}>
                            <label>Gênero</label>
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
                            <label htmlFor="female">Feminino</label>
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
                            <label htmlFor="male">Masculino</label>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Nascimento</label>
                        <input
                            type="text"
                            name="dob"
                            value={this.state.dob.date}
                            onChange={this.updateObjectField('date')}
                            placeholder="Ex: 01/01/1999" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Idade</label>
                        <input
                            type="number"
                            name="dob"
                            value={this.state.dob.age}
                            onChange={this.updateObjectField('age')}
                            placeholder="Ex: 20" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Endereço</label>
                        <input
                            type="text"
                            name="location"
                            value={this.state.location.street}
                            onChange={this.updateObjectField('street')}
                            placeholder="Ex: Rua Qualquer, 20" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Cidade</label>
                        <input
                            type="text"
                            name="location"
                            value={this.state.location.city}
                            onChange={this.updateObjectField('city')}
                            placeholder="Ex: São Paulo" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Estado</label>
                        <input
                            type="text"
                            name="location"
                            value={this.state.location.state}
                            onChange={this.updateObjectField('state')}
                            placeholder="Ex: São Paulo" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>CEP</label>
                        <input
                            type="text"
                            name="location"
                            value={this.state.location.postcode}
                            onChange={this.updateObjectField('postcode')}
                            placeholder="Ex: 0400-040" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <h3>Contato</h3>
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.updateField('email')}
                            placeholder="Ex: joao@email.com" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Telefone</label>
                        <input
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.updateField('phone')}
                            placeholder="Ex: 5555-5555" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Celular</label>
                        <input
                            type="text"
                            name="cell"
                            value={this.state.cell}
                            onChange={this.updateField('cell')}
                            placeholder="Ex: 95555-5555" />
                    </Grid>

                    <Grid item xs={12} sm={10}>
                        <label>Data de Admissão</label>
                        <input
                            type="text"
                            name="registered"
                            value={this.state.registered.date}
                            onChange={this.updateObjectField('date')}
                            placeholder="Ex: 01/01/2019" />
                    </Grid>

                    <Grid item container xs={12} sm={10} justify="space-around">
                        <Grid item>
                            <button onClick={this.save} className="edit-button-save">
                                Salvar
                            </button>
                        </Grid>
                        <Grid item>
                            <button onClick={e => this.clear(e)} className="edit-button-cancel">
                                Cancelar
                            </button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default EmployeeDetails