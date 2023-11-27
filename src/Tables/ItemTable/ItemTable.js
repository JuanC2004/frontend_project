import React, {useEffect, useState} from 'react'
import { Space, Table } from 'antd'
import {User, GetUsers} from '../../api';

const { Column, ColumnGroup } = Table;
const myUser = new User();

const UserTable = ({ token }) => {
    const [tableData, setTableData] = useState([]);
    const { data, fetchData } = GetUsers(token);

    useEffect(() => {
        if (token) {
            fetchData();
        }
    }, [token]);

    useEffect(() => {
        setTableData(data);
    }, [data]);


    const updateTableData = (_id, active) => {
        const updatedData = tableData.map((user) => (user._id === _id ? {...user, active }:user));
        setTableData(updatedData)
    };

    const toggleUserStatus = async (_id, currentActiveState) => {
        try {
            if (currentActiveState) {
                await myUser.deactiv
            }
        }
    }
}


const ItemTable = () => {
  return (
    <div>
      
    </div>
  )
}

export default ItemTable
