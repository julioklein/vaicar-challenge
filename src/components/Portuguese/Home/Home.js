import './Home.css'
import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import assistance from '../../../assets/assistance.svg'
import chat from '../../../assets/chat.svg'
import checkups from '../../../assets/checkups.svg'
import insurance from '../../../assets/insurance.svg'
import unlimited from '../../../assets/unlimited.svg'
import valet from '../../../assets/valet.svg'

export default props =>
    <Fragment>
        <Header />
        <Grid container className="top-content">
            <Grid item container xs={12}>
                <Grid item xs={12}>
                    <h1>Experimente a liberdade</h1>
                    <h2>de ter um carro sem compromisso</h2>
                </Grid>
                <Grid item xs={12}>
                    <button>Seja um membro vai</button>
                </Grid>
            </Grid>
        </Grid>

        <Grid container justify="center" className="mid-content">
            <Grid item container xs={12} md={8}>
                <Grid item xs={12}>
                    <h3>Ficou muito mais simples ter um carro.</h3>
                </Grid>
                <Grid item xs={12}>
                    <p>Receba um carro novo em sua casa e utilize por 30 dias. Ao final de cada
                        mês, você decide se deseja renovar seu contrato ou devolver o carro.</p>
                </Grid>
            </Grid>
        </Grid>

        <Grid container justify="center" alignItems="center" className="low-content">
            <Grid item container alignItems="center">
                <Grid item container xs={12} sm={4} alignItems="center">
                    <Grid item container justify="center">
                        <img src={valet} alt="Serviço de valet" />
                    </Grid>
                    <Grid item container justify="center">
                        <h4>Serviço de valet</h4>
                    </Grid>
                    <Grid item container justify="center">
                        <p>Entregamos e buscamos o carro na porta da sua casa.</p>
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={4} alignItems="center">
                    <Grid item container justify="center">
                        <img src={insurance} alt="Proteção" />
                    </Grid>
                    <Grid item container justify="center">
                        <h4>Proteção</h4>
                    </Grid>
                    <Grid item container justify="center">
                        <p>Proteção para prejuízos causados a terceiros.</p>
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={4} alignItems="center">
                    <Grid item container justify="center">
                        <img src={checkups} alt="Revisões preventivas" />
                    </Grid>
                    <Grid item container justify="center">
                        <h4>Revisões Preventivas</h4>
                    </Grid>
                    <Grid item container justify="center">
                        <p>Todas as revisões estão inclusas no seu pacote.
                            É só levar na oficina indicada pela nossa equipe.</p>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item container alignItems="center">
                <Grid item container xs={12} sm={4} alignItems="center">
                    <Grid item container justify="center">
                        <img src={unlimited} alt="Sem limite de quilometragem" />
                    </Grid>
                    <Grid item container justify="center">
                        <h4>Sem Limite de Quilometragem</h4>
                    </Grid>
                    <Grid item container justify="center">
                        <p>Sinta a liberdade de dirigir o carro o quanto quiser sem pagar a mais por isso!</p>
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={4} alignItems="center">
                    <Grid item container justify="center">
                        <img src={assistance} alt="Assistência 24 horas" />
                    </Grid>
                    <Grid item container justify="center">
                        <h4>Assistência 24 horas</h4>
                    </Grid>
                    <Grid item container justify="center">
                        <p>Pode contar com a ajuda da nossa assistência a qualquer momento do dia ou da
                            noite.</p>
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={4} alignItems="center">
                    <Grid item container justify="center">
                        <img src={chat} alt="Agentes Dedicados" />
                    </Grid>
                    <Grid item container justify="center">
                        <h4>Agentes Dedicados</h4>
                    </Grid>
                    <Grid item container justify="center">
                        <p>Nossos agentes estão a seu serviço 24 horas por dia,
                        todos os dias da semana.</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Footer goto="/" />
    </Fragment>