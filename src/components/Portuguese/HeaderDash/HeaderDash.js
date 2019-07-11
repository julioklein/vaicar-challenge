import './HeaderDash.css'
import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import NavDash from '../NavDash/NavDash'
import NavMobileDash from '../NavMobileDash/NavMobileDash'
import logo from '../../../assets/vaicar.svg'

export default props =>
    <Grid container justify="space-between" className="db-header">
        <Grid item xs={6}>
            <a href="/dashboard" title="Página Inicial">
                <img src={logo} alt="Logo Vai.car" className="logo" />
            </a>
        </Grid>

        <Grid item container xs={6} alignItems="center">
            <Hidden xsDown>
                <NavDash logout={props.logout} />
            </Hidden>
            <Hidden smUp>
                <NavMobileDash logout={props.logout} />
            </Hidden>
        </Grid>
    </Grid>