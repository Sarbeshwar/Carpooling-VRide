import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
class UsersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shareObj: []
            // searchTerm: this.props.searchTerm
        }
    }
    render() {
        return (
            <div>
                <Table responsive>
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center' }}>
                        {
                            this.state.shareObj.length > 0
                                ? (
                                    this.state.shareObj.map(this.renderDynamicTableData)
                                )
                                : (
                                    <tr>
                                        <td colSpan={3} style={{ textAlign: 'center' }}>No Registered User</td>
                                    </tr>
                                )
                        }
                    </tbody>
                </Table>
            </div>
        );
    }

    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        const url = 'http://localhost:1003/api/signUpInfo';

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
                <td>{row.email_address}</td>
                <td><Button variant="danger"
                    type="button"
                    onClick={() => this.delete(row.id)}>Delete</Button>
                </td>
            </tr>

        );

    }

    delete = async (id) => {
        const url = 'http://localhost:1003/api/delete/' + id;

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

export default UsersTable;