import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shareObj: []
        }
    }
    render(){
        return (
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>User Transaction Id</th>
                            <th>Delete Transaction</th>
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
                                        <td colSpan={3} style={{ textAlign: 'center' }}>No Transaction</td>
                                    </tr>
                                )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }

    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        const url = 'http://localhost:1003/api/GettransDetails';

        const res = await fetch(url);

        await res.json()
            .then((shareObj) => {
                this.setState({ shareObj: shareObj });
            })

    }

    renderDynamicTableData = (row, index) => {
        return (
            <tr key={`tableDataRow${index}`}>
                <td>{row.name}</td>
                <td>{row.transactionid}</td>
                <td><Button variant="danger"
                    type="button"
                    onClick={() => this.delete(row.id)}>Delete</Button>
                </td>
            </tr>

        );

    }

    delete = async (id) => {
        const url = 'http://localhost:1003/api/Deletetrans/' + id;

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
}

export default Transactions;