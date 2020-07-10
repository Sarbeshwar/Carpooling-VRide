import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
class UsersTable extends Component {
    render() { 
        return ( 
            <div>
                <Table responsive>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
                </Table>
            </div>
         );
    }
}
 
export default UsersTable;