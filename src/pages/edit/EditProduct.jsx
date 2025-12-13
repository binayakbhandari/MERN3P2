
import { useParams } from "react-router-dom"
import Form from "../../components/Form"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

const EditProduct = () => {
    const { id } = useParams()

    return (
        <>
            <Navbar />
            <Form type="Edit" id={id} />
        </>
    )
}

export default EditProduct