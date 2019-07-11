import './NavEnUs.css'
import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import lang from '../../../assets/language.svg'

class NavEnUs extends Component {
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
            <Grid container alignItems="center" className="nav-en" >
                <Grid item container justify="flex-end" alignItems="center">
                    <Grid item>
                        <button onClick={this.openMenu} className="nav-button-en" >
                            <span className="nav-span-en">
                                <img src={lang} alt="icon language" className="nav-icon-en" />
                                <div><span>Language</span></div>
                            </span>
                        </button>
                    </Grid>
                    {
                        this.state.openMenu
                        &&
                        <Grid item container xs={2} alignItems="center" className="menu-lang-en">
                            <Grid item xs={12}>
                                <a href="/en"><button className="nav-button-en">English</button></a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="/"><button className="nav-button-en">Portuguese</button></a>
                            </Grid>
                        </Grid>
                    }
                    <Grid item>
                        <a href="/en/auth" title="Login">
                            <button className="login-button-en">Login</button>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default NavEnUs