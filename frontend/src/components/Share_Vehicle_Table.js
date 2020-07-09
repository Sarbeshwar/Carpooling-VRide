import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class Share_Vehicle_Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shareObj: [],
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
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>CarType</th>
            <th>StartTime</th>
            <th>ReturnTime</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Phone Number</th>
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
                  <td colSpan={7}>No data found</td>
                </tr>
              )
          }
        </tbody>
      </Table>
    );
  }

  componentDidMount() {
    if (this.props.searchResults) {
      this.searchDestination();
    } else {
      this.getData();
    }
  }

  searchDestination = async () => {
    let url = 'http://localhost:1003/api/destination/' + this.state.searchTerm;

    const res = await fetch(url);

    await res.json()
      .then((searchResults) => {
        this.setState({ shareObj: searchResults });
        // console.log(searchResults);
        this.forceUpdate();
      })
  }

  getData = async () => {
    const url = 'http://localhost:1003/api/userdetails';

    const res = await fetch(url);

    await res.json()
      .then((shareObj) => this.setState({ shareObj: shareObj }))

  }

  renderDynamicTableData = (row, index) => {
    return (
      <tr key={`tableDataRow${index}`}>
        <td>{row.name}</td>
        <td>{row.cartype}</td>
        <td>{row.starttime}</td>
        <td>{row.returntime}</td>
        <td>{row.origin}</td>
        <td>{row.destination}</td>
        <td>
          <Button
            variant="primary"
            type="button"
            onClick={(e) => this.showContactNumber(e, row.phonenumber)}
          >Contact
         </Button>
        </td>
      </tr>
    );
  }

  showContactNumber = (e, phonenumber) => {
    if (sessionStorage.getItem('loginStatus') === 'false') {
      e.target.innerHTML = '**********';

      alert('Please login to view the contact number');

    } else {
      e.target.innerHTML = phonenumber;
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
    }
  }
}

export default Share_Vehicle_Table;