import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './MyNavbar';

class Member extends Component {

	constructor(props) {
		super(props);
		this.state = { members: [] };
	}

	componentDidMount() {
		fetch('api/members').then(response => response.json())
			.then(data => this.setState({ members: data }));
	}

	render() {
		const { members } = this.state;

		const memberList = members.map(member => {
			return <tr key={member.mid}>
                <td>{member.email}</td>
                <td>{member.password}</td>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
			</tr>
		});

		return (
			<div>
				<MyNavbar />
				<Container fluid>
					<h3>Member</h3>
					<Table className="mt-4">
						<thead>
							<tr>
								<th>Email</th>
								<th>Password</th>
								<th>FirstName</th>
								<th>LastName</th>
							</tr>
						</thead>
						<tbody>
							{memberList}
						</tbody>
					</Table>
				</Container>
			</div>
		);
	}

}
export default Member;