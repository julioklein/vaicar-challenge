import './Header.css'
import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import logo from '../../../assets/vaicar.svg'
import Nav from '../Nav/Nav'
import NavMobile from '../NavMobile/NavMobile'

export default props =>
    <Grid container justify="space-between" className="header">
        <Grid item xs={6}>
            <a href="/" title="Página Inicial">
                <img src={logo} alt="Logo Vai.car" className="logo" />
            </a>
        </Grid>

        <Grid item container xs={6} alignItems="center">
            <Hidden xsDown>
                <Nav />
            </Hidden>
            <Hidden smUp>
                <NavMobile />
            </Hidden>
        </Grid>
    </Grid>