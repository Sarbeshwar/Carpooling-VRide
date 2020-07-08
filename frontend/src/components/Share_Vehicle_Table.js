import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Share_Vehicle_Table extends Component {

  constructor() {
    super();
    this.state = {
      shareObj: []
    }
  }

  render() {
    // console.log("Received shareObj");
    // console.log(this.state.shareObj);
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
                  <td colSpan={6}>No data found</td>
                </tr>
              )
          }
          {/* The hardcoded data 
          <tr>
            <td>Rahul</td>
            <td>Rider</td>
            <td>7</td>
            <td>7</td>
            <td>Panchkula</td>
            <td>Chitkara</td>
          </tr>
          <tr>
            <td>Pankaj</td>
            <td>Provider</td>
            <td>7</td>
            <td>5</td>
            <td>Baddi</td>
            <td>Chitkara</td>
          </tr>
          <tr>
            <td>Ankit</td>
            <td>Provider</td>
            <td>9</td>
            <td>5</td>
            <td>Baddi</td>
            <td>Chitkara</td>
          </tr>
          <tr>
            <td>Sarbeshwar</td>
            <td>Rider</td>
            <td>6</td>
            <td>6</td>
            <td>Kharar</td>
            <td>Chitkara</td>
          </tr>
          <tr>
            <td>Sarthak</td>
            <td>Provider</td>
            <td>8</td>
            <td>5</td>
            <td>Baddi</td>
            <td>Chitkara</td>
          </tr>
          <tr>
            <td>MOH101</td>
            <td>Provider</td>
            <td>5</td>
            <td>7</td>
            <td>Chitkara</td>
            <td>Kharar</td>
          </tr>
          <tr>
            <td>CH25</td>
            <td>Provider</td>
            <td>5</td>
            <td>6</td>
            <td>Chitkara</td>
            <td>Chandigarh</td>
          </tr>
          <tr>
            <td>CH99</td>
            <td>Provider</td>
            <td>5</td>
            <td>6</td>
            <td>Chitkara</td>
            <td>Zirakpur</td>
          </tr>
          <tr>
            <td>MOH202</td>
            <td>Provider</td>
            <td>5</td>
            <td>6</td>
            <td>Chitkara</td>
            <td>Mohali</td>
          </tr>
          <tr>
            <td>CH55</td>
            <td>Provider</td>
            <td>5</td>
            <td>7</td>
            <td>Chitkara</td>
            <td>Baddi</td>
          </tr>
          */}
        </tbody>
      </Table>
    );
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    // console.log("Working");
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
      </tr>
    );
  }
}

export default Share_Vehicle_Table;