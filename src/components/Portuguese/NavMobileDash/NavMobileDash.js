import './NavMobileDash.css'
import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import hamburguer from '../../../assets/hamburguer.svg'
import close from '../../../assets/close.svg'

class NavMobileDash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openMenu: false
        }
        this.openMenu = this.openMenu.bind(this)
    }

    openMenu() {
        return this.setState(state => ({
            openMenu: !state.openMenu
        }))
    }

    logout = e => {
        e.preventDefault()
        this.props.logout()
    }

    render() {
        return (
            <Grid container alignItems="center" className="db-nav-mobile" >
                <Grid item container justify="flex-end" alignItems="center">
                    <Grid item>
                        <button className="db-button" onClick={this.openMenu}>
                            <span>
                                {
                                    !this.state.openMenu
                                    &&
                                    <img src={hamburguer} alt="Abrir menu" />
                                }
                                {
                                    this.state.openMenu
                                    &&
                                    <img src={close} alt="Fechar menu" />
                                }
                            </span>
                        </button>
                    </Grid>
                    {
                        this.state.openMenu
                        &&
                        <Grid item container xs={12} alignItems="center" className="db-hamburguer-menu">
                            <Grid item xs={12}>
                                <button onClick={this.logout}>Sair</button>
                            </Grid>
                            <Grid item xs={12}>
                                <hr />
                            </Grid>
                            <Grid item xs={12}>
                                <a href="/en/dashboard">
                                    <button>Inglês</button>
                                </a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="/dashboard">
                                    <button>Português</button>
                                </a>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Grid>
        )
    }
}

export default NavMobileDash