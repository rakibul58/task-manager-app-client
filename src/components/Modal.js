import React, { Component } from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }


    handleChange = event => {
        let { name, value } = event.target;
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem })
    };



}