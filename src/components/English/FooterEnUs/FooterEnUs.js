import './FooterEnUs.css'
import React from 'react'
import { Grid } from '@material-ui/core'
import logo from '../../../assets/vaicar2.png'

export default props =>
    <Grid container justify="center" className="footer">
        <Grid item container justify="center" alignItems="center">
            <Grid item>
                <a href={props.goto} title="Home">
                    <img src={logo} alt="Logo Vai.car" className="logo" />
                </a>
            </Grid>
            <Grid item>
                <h5>© 2019 VAI Technology Brasil LTDA</h5>
            </Grid>
        </Grid>
    </Grid>