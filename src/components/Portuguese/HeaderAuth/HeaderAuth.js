import './HeaderAuth.css'
import React from 'react'
import { Grid } from '@material-ui/core'
import logo from '../../../assets/vaicar2.png'
import back from '../../../assets/back.svg'
import close from '../../../assets/close.svg'

export default props =>
    <Grid item container xs={12} justify="space-between" alignItems="center" className="auth-header">
        <Grid item>
            <a href={props.backto}>
                <img src={back} alt="Voltar" title="Voltar" />
            </a>
        </Grid>
        <Grid item>
            <a href="/" title="Página inicial">
                <img src={logo} alt="Logo Vai.car" className="logo" />
            </a>
        </Grid>
        <Grid item>
            <a href="/">
                <img src={close} alt="Fechar" title="Fechar" />
            </a>
        </Grid>
    </Grid>