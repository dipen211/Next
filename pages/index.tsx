import React from 'react';
import styles from '../styles/Home.module.css'
export default function blog({ data }: any) {
    return (
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data: any) => (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}
