const box = document.querySelector(".box")

const inpSearch = document.querySelector(".inpSearch")
const btnAdd = document.querySelector(".btnAdd")

const AddDialog = document.querySelector(".AddDialog")
const AddForm = document.querySelector(".AddForm")
const AddClose = document.querySelector(".AddClose")

const EditDialog = document.querySelector(".EditDialog")
const EditForm = document.querySelector(".EditForm")
const EditClose = document.querySelector(".EditClose")

import {Get, Post, Delete, Put, Checked} from "./api.js"

let idx = null


inpSearch.oninput=(event)=>{
    Get(event.target.value)
}

btnAdd.onclick =()=>{
    AddDialog.showModal()
}
AddForm.onsubmit=(event)=>{
    event.preventDefault()
    let obj={
    image: AddForm["AddImg"].value,
    name: AddForm["AddName"].value,
    company: AddForm["AddCompany"].value,
    role: AddForm["AddRole"].value,
    verified: AddForm["AddVerified"].value,
    status: false,
    }
    Post(obj)
    AddDialog.close()
}
AddClose.onclick=()=>{
    AddDialog.close()
}

const openEditDialog=(e)=>{
    EditDialog.showModal()
    EditForm["EditImg"].value = e.image
    idx = e.id
    EditForm["EditName"].value = e.name
    idx = e.id
    EditForm["EditCompany"].value = e.company
    idx = e.id
    EditForm["EditRole"].value = e.role
    idx = e.id
    EditForm["EditVerified"].value = e.verified
    idx = e.id
}
EditForm.onsubmit=(event)=>{
    event.preventDefault()
    let obj={
        image: EditForm["EditImg"].value,
        name: EditForm["EditName"].value,
        company: EditForm["EditCompany"].value,
        role: EditForm["EditRole"].value,
        verified: EditForm["EditVerified"].value,
        status: false,
    }
    Put(idx, obj)
    EditDialog.close()
}
EditClose.onclick=()=>{
    EditDialog.close()
}


function getData(data){
    box.innerHTML = ""
    data.forEach((e, i) => {
        const tr = document.createElement("tr")
        const div1 = document.createElement("div")
        const Checkbox = document.createElement("input")
        Checkbox.type = "checkbox"
        Checkbox.checked = e.status
        const tdImg = document.createElement("img")
        const tdName = document.createElement("td")
        const tdCompany = document.createElement("td")
        const tdRole = document.createElement("td") 
        const tdVerified = document.createElement("td")
        const tdStatus = document.createElement("td")
        const btnEdit = document.createElement("button")
        const btnDelete = document.createElement("button")


        Checkbox.onclick=()=>{
            Checked(e)
        }
        if(e.status){
            tdStatus.style.color = "green"
        }
        else{
            tdStatus.style.color = "red"
        }


        btnEdit.onclick=()=>{
            openEditDialog(e)
        }

        btnDelete.onclick=()=>{
            Delete(e.id)
        }

        tdImg.src = e.image
        tdName.innerHTML = e.name
        tdCompany.innerHTML = e.company
        tdRole.innerHTML = e.role
        tdVerified.innerHTML = e.verified
        tdStatus.innerHTML = e.status?"Active":"Banned"
        btnEdit.innerHTML = "Edit"
        btnDelete.innerHTML = "Delete"

        div1.classList.add("div1")
        tdImg.classList.add("tdImg")
        tdName.classList.add("tdName")
        tdCompany.classList.add("tdCompany")
        tdRole.classList.add("tdRole")
        tdVerified.classList.add("tdVerified")
        tdStatus.classList.add("tdStatus")
        btnEdit.classList.add("btnEdit")
        btnDelete.classList.add("btnDelete")
        tr.classList.add("tr")
        box.classList.add("box")

        div1.append(Checkbox, tdImg, tdName)
        tr.append(div1, tdCompany, tdRole, tdVerified, tdStatus, btnEdit, btnDelete)
        box.appendChild(tr)
    })
}

export default getData