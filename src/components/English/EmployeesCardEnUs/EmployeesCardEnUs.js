import './EmployeesCardEnUs.css'
import React, { Component } from 'react'
import Modal from 'react-modal'
import { Grid } from '@material-ui/core'
import EmployeeDetailsEnUs from '../EmployeeDetailsEnUs/EmployeeDetailsEnUs'
import email from '../../../assets/outline-email-24px.svg'
import phone from '../../../assets/outline-phone-24px.svg'
import calendar from '../../../assets/outline-date_range-24px.svg'
import remove from '../../../assets/outline-delete-24px.svg'
import close from '../../../assets/close.svg'

class EmployeesCardEnUs extends Component {
    state = {
        modalIsOpen: false
    }

    openModal = () => {
        this.setState({
            modalIsOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }


    deleteEmployee = e => {
        e.preventDefault()
        this.props.deleteEmployee(this.props.employee.email)
    }

    render() {
        const { employee } = this.props

        return (
            <Grid item container xs={12} className="card-en">
                <Grid
                    item
                    container
                    xs={12}
                    justify="space-between"
                    alignItems="center"
                    className="card-header-en"
                >
                    <Grid item xs={2}>
                        <img src={employee.picture.thumbnail} alt="Employee's avatar" />
                    </Grid>
                    <Grid item xs={6}>
                        <p>{employee.name.first + " " + employee.name.last}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <button onClick={this.deleteEmployee} className="delete-en">
                            <img src={remove} alt="Delete employee" title="Delete employee" />
                        </button>
                    </Grid>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={2}>
                        <img src={email} alt="Employee's email" title="Employee's email" />
                    </Grid>
                    <Grid item xs={8}>
                        <p>{employee.email}</p>
                    </Grid>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={2}>
                        <img src={phone} alt="Employee's phone" title="Employee's phone" />
                    </Grid>
                    <Grid item xs={8}>
                        <p>{employee.cell}</p>
                    </Grid>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={2}>
                        <img src={calendar} alt="Admission date" title="Admission date" />
                    </Grid>
                    <Grid item xs={8}>
                        <p>{employee.registered.date}</p>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <button onClick={this.openModal} className="edit-button-en">Details</button>
                </Grid>

                <Grid item xs={12}>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        contentLabel="Example Modal" >
                        <Grid container justify="space-between" alignItems="center" className="modal-header-en">
                            <Grid item xs={10}>
                                <h2>General information about {employee.name.first}</h2>
                            </Grid>
                            <Grid item container xs={2} sm={1} justify="center">
                                <button onClick={this.closeModal} className="button-modal-en">
                                    <img src={close} alt="Close" title="Close" />
                                </button>
                            </Grid>
                        </Grid>

                        <EmployeeDetailsEnUs
                            employee={employee}
                            save={this.props.save}
                            closeModal={this.closeModal} />
                    </Modal>
                </Grid>
            </Grid>
        )
    }
}

export default EmployeesCardEnUs