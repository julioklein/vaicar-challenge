import './HomeEnUs.css'
import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import HeaderEnUs from '../HeaderEnUs/HeaderEnUs'
import FooterEnUs from '../FooterEnUs/FooterEnUs'
import assistance from '../../../assets/assistance.svg'
import chat from '../../../assets/chat.svg'
import checkups from '../../../assets/checkups.svg'
import insurance from '../../../assets/insurance.svg'
import unlimited from '../../../assets/unlimited.svg'
import valet from '../../../assets/valet.svg'

export default props =>
    <Fragment>
        <HeaderEnUs />
        <Grid container className="top-content-en">
            <Grid item container xs={12}>
                <Grid item xs={12}>
                    <h1>Experience the freedom</h1>
                    <h2>of commitment-free car ownership</h2>
                </Grid>
                <Grid item xs={12}>
                    <button>Join Vai</button>
                </Grid>
            </Grid>
        </Grid>

        <Grid container justify="center" className="mid-content-en">
            <Grid item container xs={12} md={8}>
                <Grid item xs={12}>
                    <h3>It was much simpler to have a car.</h3>
                </Grid>
                <Grid item xs={12}>
                    <p>Get a new car in your home and use it for 30 days.
                    At the end of each month, you decide whether you want to renew your contract
                    or return the car.</p>
                </Grid>
            </Grid>
        </Grid>

        <Grid container justify="center" alignItems="center" className="low-content-en">
            <Grid item container alignItems="center">
                <Grid item container xs={12} sm={4} alignItems="center">
                    <Grid item container justify="center">
                        <img src={valet} alt="Valet Services" />
                    </Grid>
                    <Grid item container justify="center">
                        <h4>Valet Services</h4>
                    </Grid>
                    <Grid item container justify="center">
                        <p>Delivered and picked up at the convenience.</p>
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={4} alignItems="center">
                    <Grid item container justify="center">
                        <img src={insurance} alt="Insurance" />
                    </Grid>
                    <Grid item container justify="center">
                        <h4>Insurance</h4>
                    </Grid>
                    <Grid item container justify="center">
                        <p>Insurance, maintenance, 24h roadside assistance, and regular checkups.</p>
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={4} alignItems="center">
                    <Grid item container justify="center">
                        <img src={checkups} alt="Regular Checkups" />
                    </Grid>
                    <Grid item container justify="center">
                        <h4>Regular Checkups</h4>
                    </Grid>
                    <Grid item container justify="center">
                        <p>Insurance, maintenance, 24h roadside assistance, and regular checkups.</p>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item container alignItems="center">
                <Grid item container xs={12} sm={4} alignItems="center">
                    <Grid item container justify="center">
                        <img src={unlimited} alt="Unlimited Mileage" />
                    </Grid>
                    <Grid item container justify="center">
                        <h4>Unlimited Mileage</h4>
                    </Grid>
                    <Grid item container justify="center">
                        <p>Mile caps are a thing of the past. Feel free to drive as much as you want!</p>
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={4} alignItems="center">
                    <Grid item container justify="center">
                        <img src={assistance} alt="Roadside Assistance" />
                    </Grid>
                    <Grid item container justify="center">
                        <h4>Roadside Assistance</h4>
                    </Grid>
                    <Grid item container justify="center">
                        <p>Our dedicated agents are at your service 24 hours a day, 7 days a week.</p>
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={4} alignItems="center">
                    <Grid item container justify="center">
                        <img src={chat} alt="Dedicated Agents" />
                    </Grid>
                    <Grid item container justify="center">
                        <h4>Dedicated Agents</h4>
                    </Grid>
                    <Grid item container justify="center">
                        <p>Our dedicated agents are at your service 24 hours a day, 7 days a week.</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <FooterEnUs goto="/en" />
    </Fragment>