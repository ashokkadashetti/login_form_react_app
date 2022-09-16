import React from "react";
import PersonList from "./PersonsList";

function UsersList(){
    // const nameList = ["Ashok","Mallu","Sagar","Anand"]

    const persons = [
        {
            id: 1,
            name: "Ashok",
            age: 25,
            skill: "java"
        },
        {
            id: 2,
            name: "Mallu",
            age: 24,
            skill: "C++"
        },
        {
            id: 3,
            name: "Sagar",
            age: 25,
            skill: "Angular"
        },
        {
            id: 4,
            name: "Kiran",
            age: 25,
            skill: "python"
        }
    ]

    const personsList = persons.map(person => <PersonList key = {person.id} person = {person}></PersonList>)

    return <div>{personsList}</div>
}

export default UsersList