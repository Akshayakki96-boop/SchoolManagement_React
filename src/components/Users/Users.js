import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import withNavigation from '../../withNavigation';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                { headerName: 'Staff', field: 'staff', sortable: true, filter: true },
                { headerName: 'Name', field: 'name', sortable: true, filter: true },
                {
                    headerName: 'Action',
                    field: 'action',
                    cellRenderer: (params) => (
                        <div>
                            <span onClick={() => this.handleEdit(params.data)} style={{ marginRight: '11px', cursor: 'pointer' }}>
                                <FaPencilAlt />
                            </span>
                            <span style={{cursor: 'pointer'}} onClick={() => this.handleDelete(params.data)}>
                                <FaTrash />
                            </span>
                        </div>
                    ),
                },
            ],
            rowData: [
                { staff: 'Teacher', name: 'John Doe' },
                { staff: 'Admin', name: 'Jane Smith' },
            ],
        };
    }

    handleEdit = (data) => {
        console.log('Edit clicked for:', data);
    };

    handleDelete = (data) => {
        console.log('Delete clicked for:', data);
    };

    handleAddUser = () => {
        this.props.navigate('/users/add-user');
        console.log('Add User button clicked');
    };

    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                    <button onClick={this.handleAddUser} style={{ padding: '10px 20px', cursor: 'pointer',backgroundColor:'green',borderRadius:'3px',color:'white',border:'none' }}>
                        Add User
                    </button>
                </div>
                <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        domLayout="autoHeight"
                    />
                </div>
            </div>
        );
    }
}
export default withNavigation(Users);