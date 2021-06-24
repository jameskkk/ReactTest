import React, { Component } from 'react';
import {
    Container,
    Table
} from 'reactstrap';
import MyNavbar from './MyNavbar';

class Vendor extends Component {
    constructor(props) {
        super(props);
        this.state = { vendors: [] };
    }

    componentDidMount() {
        fetch('/api/vendors').then(response => response.json())
            .then(data => this.setState({ vendors: data }));
    }

    render() {
        const { vendors } = this.state;
        const vendorList = vendors.map(vendor => {
            return <tr key={vendor.vendorId}>
                <td>{vendor.name}</td>
            </tr>
        });

        return (
            <div>
                <MyNavbar />
                <Container fluid>
                    <h3>Vendor</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th>協辦單位</th>
                        </tr>
                        </thead>
                        <tbody>
                            {vendorList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}
export default Vendor;