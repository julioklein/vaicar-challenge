import './Nav.css'
import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import lang from '../../../assets/language.svg'

class Nav extends Component {
    state = {
        openMenu: false
    }

    openMenu = () => {
        return this.setState(state => ({
            openMenu: !state.openMenu
        }))
    }

    render() {

        return (
            <Grid container alignItems="center" className="nav" >
                <Grid item container justify="flex-end" alignItems="center">
                    <Grid item>
                        <button onClick={this.openMenu} className="nav-button" >
                            <span className="nav-span">
                                <img src={lang} alt="icon language" className="nav-icon" />
                                <div><span>Idioma</span></div>
                            </span>
                        </button>
                    </Grid>
                    {
                        this.state.openMenu
                        &&
                        <Grid item container xs={2} alignItems="center" className="menu-lang">
                            <Grid item xs={12}>
                                <a href="/en"><button className="nav-button">English</button></a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="/"><button className="nav-button">Português</button></a>
                            </Grid>
                        </Grid>
                    }
                    <Grid item>
                        <a href="/auth" title="Fazer login">
                            <button className="login-button">Entrar</button>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Nav