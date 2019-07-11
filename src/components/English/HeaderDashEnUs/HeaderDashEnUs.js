import './HeaderDashEnUs.css'
import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import NavDashEnUs from '../NavDashEnUs/NavDashEnUs'
import NavMobileDashEnUs from '../NavMobileDashEnUs/NavMobileDashEnUs'
import logo from '../../../assets/vaicar.svg'

export default props =>
    <Grid container justify="space-between" className="db-header-en">
        <Grid item xs={6}>
            <a href="/en/dashboard" title="Home">
                <img src={logo} alt="Logo Vai.car" className="logo-en" />
            </a>
        </Grid>

        <Grid item container xs={6} alignItems="center">
            <Hidden xsDown>
                <NavDashEnUs logout={props.logout} />
            </Hidden>
            <Hidden smUp>
                <NavMobileDashEnUs logout={props.logout} />
            </Hidden>
        </Grid>
    </Grid>