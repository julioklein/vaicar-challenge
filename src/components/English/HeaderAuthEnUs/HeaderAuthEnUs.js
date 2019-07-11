import './HeaderAuthEnUs.css'
import React from 'react'
import { Grid } from '@material-ui/core'
import logo from '../../../assets/vaicar2.png'
import back from '../../../assets/back.svg'
import close from '../../../assets/close.svg'

export default props =>
    <Grid item container xs={12} justify="space-between" alignItems="center" className="auth-header-en">
        <Grid item>
            <a href={props.backto}>
                <img src={back} alt="Back" title="Back" />
            </a>
        </Grid>
        <Grid item>
            <a href="/en" title="Home">
                <img src={logo} alt="Logo Vai.car" className="logo-en" />
            </a>
        </Grid>
        <Grid item>
            <a href="/en">
                <img src={close} alt="Close" title="Close" />
            </a>
        </Grid>
    </Grid>