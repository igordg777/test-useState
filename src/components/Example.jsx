import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

function Example() {

    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => setUsers(res))
    }

    // const dataSource = [
    //     {
    //         key: '1',
    //         name: 'Mike',
    //         age: 32,
    //         address: '10 Downing Street',
    //     },
    //     {
    //         key: '2',
    //         name: 'John',
    //         age: 42,
    //         address: '10 Downing Street',
    //     },
    // ];

    // const columns = [
    //     {
    //         title: 'Name',
    //         dataIndex: 'name',
    //         key: 'name',
    //     },
    //     {
    //         title: 'Age',
    //         dataIndex: 'age',
    //         key: 'age',
    //     },
    //     {
    //         title: 'Address',
    //         dataIndex: 'address',
    //         key: 'address',
    //     },
    // ];

    const columns2 = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Сайт',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Почта',
            dataIndex: 'email',
            key: 'email',
        },
    ];

    return (
        <div>

            <button onClick={() => getUsers()}>Пользователи</button>

            {users.map(
                (item, index) => {
                    return <p>{index + 1}. {item.name} {item.phone} {item.website} {item.email} {item.address.city}</p>
                }

            )}

            <div style={{ width: '80%', margin: '0 auto' }}>
                <Table dataSource={users} columns={columns2} />;
            </div>

            {/* <div style={{ width: '80%', margin: '0 auto' }}>
                <Table dataSource={dataSource} columns={columns} />;

            </div> */}
        </div>
    )
}

export default Example
