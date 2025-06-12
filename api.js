import getData from "./dom.js"

const Api = "https://66b99bf3fa763ff550f8d727.mockapi.io/API"

async function Get(searchWord){
    try {
        const {data} = await axios.get(searchWord ? Api + "?name=" + searchWord : Api)
        getData(data)
    } catch (error) {
        console.error(error)
    }
}

async function Post(obj){
    try {
        const {data} = await axios.post(Api, obj)
        Get()
    } catch (error) {
        console.error(error)
    }
}

async function Delete(id){
    try {
        const {data} = await axios.delete(`${Api}/${id}`)
        Get()
    } catch (error) {
        console.error(error)
    }
}

async function Put(id, obj){
    try {
        const {data} = await axios.put(`${Api}/${id}`, obj)
        Get()
    } catch (error) {
        console.error(error)
    }
}

async function Checked(e){
    let obj={
        img: e.image,
        name: e.name, 
        company: e.company,
        role: e.role,
        verified: e.verified,
        status: !e.status
    }
    try {
        const {data} = await axios.put(`${Api}/${e.id}`, obj)
        Get()
    } catch (error) {
        console.error(error)
    }
}

export {Get, Post, Delete, Put, Checked}