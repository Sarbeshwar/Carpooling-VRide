import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
class Share_Vehicle_Table extends Component {

	constructor(props) {
		super(props);
		this.state = {
			shareObj: [
				{
					"id": -1,
					"destination": null
				}
			],
			searchTerm: this.props.searchTerm
		}
	}

	render() {
		// console.log("Received shareObj");
		// console.log(this.state.shareObj);
		// console.log("State");
		// console.log(this.state);
		// console.log("Props");
		// console.log(this.props);
		if (sessionStorage.getItem('loginStatus') === 'false' || sessionStorage.getItem('loginStatus') === 'user') {
			return (
				<div>
					<Table responsive>
						<thead>
							<tr>
								<th>Name</th>
								<th>CarType</th>
								<th>StartTime</th>
								<th>ReturnTime</th>
								<th>Origin</th>
								<th>Destination</th>
								<th>Price</th>
								<th>Phone Number</th>
								<th>Payment</th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.shareObj.length > 0
									? (
										this.state.shareObj.map(this.renderDynamicTableData)
									)
									: (
										<tr>
											<td colSpan={9} style={{ textAlign: 'center' }}>No Rider is heading towards your location, Please check after some time</td>
										</tr>
									)
							}
						</tbody>
					</Table>
					{/* <footer class="text-gray-700 body-font"> */}
					<div class="bg-gray-200">
						<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
							<center><h5>In order to get your vehicle listed contact:- Admin <Link to="/Team">@Our Team</Link></h5></center>
						</div>
					</div>
					{/* </footer> */}
				</div>
			);
		}

		else if (sessionStorage.getItem('loginStatus') === 'admin') {
			return (
				<div>
					<Table responsive>
						<thead>
							<tr>
								<th>Name</th>
								<th>CarType</th>
								<th>StartTime</th>
								<th>ReturnTime</th>
								<th>Origin</th>
								<th>Destination</th>
								<th>Price</th>
								<th>Phone Number</th>
								<th>Delete Vehicle</th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.shareObj.length > 0
									? (
										this.state.shareObj.map(this.renderDynamicTableDataAdmin)
									)
									: (
										<tr>
											<td colSpan={9} style={{ textAlign: 'center' }}>No Rider is heading towards your location, Please check after some time</td>
										</tr>
									)
							}
						</tbody>
					</Table>
					{/* <footer class="text-gray-700 body-font"> */}
					<div class="bg-gray-200">
						<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
							<center><h5>In order to get your vehicle listed contact:- Admin <Link to="/Team">@Our Team</Link></h5></center>
						</div>
					</div>
					{/* </footer> */}
				</div>
			);
		}
	}

	componentDidMount() {
		if (this.props.searchResults) {
			this.searchDestination();
		} else {
			this.getData();
		}
	}

	componentDidUpdate() {
		if (this.state.shareObj.length > 0 && this.state.searchTerm !== this.state.shareObj[0].destination) {

			if (this.props.searchResults)
				this.searchDestination();
		}
	}

	static getDerivedStateFromProps(newProps, oldState) {
		if (newProps.searchTerm !== oldState.searchTerm) {
			return { searchTerm: newProps.searchTerm };
		} else {
			return oldState;
		}
	}

	searchDestination = async () => {
		if (this.state.searchTerm.length > 0) {
			let url = 'http://localhost:1003/api/destination/' + this.state.searchTerm;

			const res = await fetch(url);

			await res.json()
				.then((searchResults) => {
					this.setState({ shareObj: searchResults });
					// console.log(searchResults);
					this.forceUpdate();
				});
		}
	}

	getData = async () => {
		const url = 'http://localhost:1003/api/userdetails';

		const res = await fetch(url);

		await res.json()
			.then((shareObj) => this.setState({ shareObj: shareObj }))

	}

	renderDynamicTableData = (row, index) => {
		if (row.id > 0) {
			return (
				<tr key={`tableDataRow${index}`}>
					<td>{row.name}</td>
					<td>{row.cartype}</td>
					<td>{row.starttime}</td>
					<td>{row.returntime}</td>
					<td>{row.origin}</td>
					<td>{row.destination}</td>
					<td>{row.price}</td>
					<td>
						<Button
							variant="primary"
							type="button"
							onClick={(e) => this.showContactNumber(e, row.phonenumber)}
						>
							Contact
        				</Button>
					</td>
					<td>
						{
							sessionStorage.getItem('loginStatus') === 'false'
								? (<Button variant="secondary" type="button" onClick={() => alert('Please login in order to make payments.')}>Book</Button>)
								// : (<Link to="/Payment"><Button variant="primary" type="button">Book</Button></Link>)
								:(<Button variant="primary" type="button" onClick={() => this.sendPrice(row.price)}>Book</Button>)

						}
					</td>
				</tr>
			);
		} else {
			return (
				<tr>
					<td colSpan={9} style={{ textAlign: 'center' }}>No Rider is heading towards your location, Please check after some time</td>
				</tr>
			);
		}
	}

	sendPrice =(price) => {
		this.props.setPrice(price);
		this.props.history.push('/Payment');
	}
	renderDynamicTableDataAdmin = (row, index) => {
		if (row.id > 0) {
			return (
				<tr key={`tableDataRow${index}`}>
					<td>{row.name}</td>
					<td>{row.cartype}</td>
					<td>{row.starttime}</td>
					<td>{row.returntime}</td>
					<td>{row.origin}</td>
					<td>{row.destination}</td>
					<td>{row.price}</td>
					<td>
						<Button
							variant="primary"
							type="button"
							onClick={(e) => this.showContactNumber(e, row.phonenumber)}
						>
							Contact
        				</Button>
					</td>
					<td>
						<Button variant="danger"
							type="button"
							onClick={() => this.delete(row.id)}
						>
							Delete
						</Button>
					</td>
				</tr>
			);
		} else {
			return (
				<tr>
					<td colSpan={9} style={{ textAlign: 'center' }}>No Rider is heading towards your location, Please check after some time</td>
				</tr>
			);
		}
	}

	delete = async (id) => {
		const url = 'http://localhost:1003/api/vehicleDelete/' + id;

		const res = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		await res.json()
			.then((res) => {
				console.log(res);
				if (res === true) {
					let updatedUserData = this.state.shareObj.filter(row => row.id !== id);
					this.setState({ shareObj: updatedUserData });
					alert("Data deleted successfully");
				} else {
					alert("Something went wrong, could not delete the entry");
				}
			});

	}

	showContactNumber = (e, phonenumber) => {
		if (sessionStorage.getItem('loginStatus') === 'false') {
			e.target.innerHTML = '**********';
			alert('Please login to view the contact number');

		} else {
			e.target.innerHTML = phonenumber;
		}

	}


}

export default withRouter(Share_Vehicle_Table);