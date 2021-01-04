import axios from 'axios'
import fetch from 'isomorphic-fetch'

export const getUsers = () => {
    return fetch('http://localhost:5000/employee/')
}

export const getDeleteUsers = (id: any) => {
    return axios.delete("http://localhost:5000/employee/" + id)
}

export const getAddUsers = (newData: any) => {
    axios.post("http://localhost:5000/employee/", newData)
}

export const getUpdateUsers = (newData: any, oldData: any) => {
    axios.put("http://localhost:5000/employee/" + oldData.id, newData)
}