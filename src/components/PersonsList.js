import React from "react";

function PersonList({person}){
    return <div> I am {person.name} my age {person.age} i know {person.skill}</div>
}

export default PersonList