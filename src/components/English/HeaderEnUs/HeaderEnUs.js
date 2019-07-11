import './HeaderEnUs.css'
import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import logo from '../../../assets/vaicar.svg'
import NavEnUs from '../NavEnUs/NavEnUs'
import NavMobileEnUs from '../NavMobileEnUs/NavMobileEnUs'

export default props =>
    <Grid container justify="space-between" className="header-en">
        <Grid item xs={6}>
            <a href="/en" title="Home">
                <img src={logo} alt="Logo Vai.car" className="logo" />
            </a>
        </Grid>

        <Grid item container xs={6} alignItems="center">
            <Hidden xsDown>
                <NavEnUs />
            </Hidden>
            <Hidden smUp>
                <NavMobileEnUs />
            </Hidden>
        </Grid>
    </Grid>