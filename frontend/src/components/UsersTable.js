import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
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
                                        <td colSpan={2} style={{ textAlign: 'center' }}>No Registered User</td>
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
            </tr>

        );

    }
}

export default UsersTable;