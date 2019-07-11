import './NavDashEnUs.css'
import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import lang from '../../../assets/language.svg'

class NavDashEnUs extends Component {
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
            <Grid container alignItems="center" className="db-nav-en" >
                <Grid item container justify="flex-end" alignItems="center">
                    <Grid item>
                        <button onClick={this.openMenu} className="db-button-en">
                            <span>
                                <img src={lang} alt="icon language" />
                                <div><span>Language</span></div>
                            </span>
                        </button>
                    </Grid>
                    {
                        this.state.openMenu
                        &&
                        <Grid item container xs={2} alignItems="center" className="db-menu-lang-en">
                            <Grid item xs={12}>
                                <a href="/en/dashboard">
                                    <button className="db-button-en">English</button>
                                </a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="/dashboard">
                                    <button className="db-button-en">Portuguese</button>
                                </a>
                            </Grid>
                        </Grid>
                    }
                    <Grid item>
                        <button onClick={this.logout} className="exit-button-en">exit</button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default NavDashEnUs