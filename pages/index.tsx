import React, { forwardRef } from 'react';
import { getUsers, getDeleteUsers, getAddUsers, getUpdateUsers } from '../api/data/data';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
const tableIcons = {
    Add: forwardRef((props, ref: any) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref: any) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref: any) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref: any) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref: any) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref: any) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref: any) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref: any) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref: any) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref: any) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref: any) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref: any) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref: any) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref: any) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref: any) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref: any) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref: any) => <ViewColumn {...props} ref={ref} />)
};
export default function blog({ data }: any) {

    return (
        <MaterialTable
            data={data}
            columns={[
                { field: 'id', title: 'ID' },
                { field: 'first_name', title: 'First name' },
                { field: 'last_name', title: 'Last name' },
                { field: 'email', title: 'Email' },
                { field: 'password', title: 'Password' }
            ]}
            icons={tableIcons}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        // this.UpdateData(newData);
                        console.log(newData);
                        console.log(oldData);
                        console.log(resolve);
                        getUpdateUsers(newData, oldData);
                    }),
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        console.log(newData);
                        console.log(resolve);
                        getAddUsers(newData)
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        console.log(oldData);
                        console.log(resolve);
                        getDeleteUsers(oldData.id)
                    }),
            }} />
    )
}

export async function getStaticProps() {
    const res = await getUsers();
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}