import React, { Component } from 'react';
import {
    Card,
    CardGroup,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class MyCard extends Component {

    constructor(props) {
        super(props);
        this.state = { exams: [] };
    }

    componentDidMount() {
        fetch('api/exams').then(response => response.json()).then(data => this.setState({ exams: data }));
    }

    render() {
        const { exams } = this.state;

        const examList = exams.map(exam => {
            return (
                    <CardBody>
                        <CardTitle>證照: {exam.certificate.name}</CardTitle>
                        <CardSubtitle>協辦單位: {exam.vendor.name}</CardSubtitle>
                        <CardText>考試日期: {exam.examDate}</CardText>
                        <Button color="outline-primary">learn more</Button>
                    </CardBody>
            )
        });

        return (
            <CardGroup>
                { examList }
            </CardGroup>
        );
    }
}

export default MyCard;