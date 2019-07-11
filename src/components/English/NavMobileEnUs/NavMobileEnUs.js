import './NavMobileEnUs.css'
import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import hamburguer from '../../../assets/hamburguer.svg'
import close from '../../../assets/close.svg'

class NavMobileEnUs extends Component {
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

    render() {
        return (
            <Grid container alignItems="center" className="nav-mobile-en" >
                <Grid item container justify="flex-end" alignItems="center">
                    <Grid item>
                        <button onClick={this.openMenu} className="button-en">
                            <span>
                                {
                                    !this.state.openMenu
                                    &&
                                    <img src={hamburguer} alt="Open menu" />
                                }
                                {
                                    this.state.openMenu
                                    &&
                                    <img src={close} alt="Close menu" />
                                }
                            </span>
                        </button>
                    </Grid>
                    {
                        this.state.openMenu
                        &&
                        <Grid item container xs={12} alignItems="center" className="hamburguer-menu-en">
                            <Grid item xs={12}>
                                <a href="/en/auth"><button >Login</button></a>
                            </Grid>
                            <Grid item xs={12}>
                                <hr />
                            </Grid>
                            <Grid item xs={12}>
                                <a href="/en"><button>English</button></a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="/"><button>Portuguese</button></a>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Grid>
        )
    }
}

export default NavMobileEnUs