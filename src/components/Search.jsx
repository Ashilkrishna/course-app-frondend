
import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
    const [data, setData] = useState(
        {
            "title": ""
        }
    )
    const [result, setResult] = useState(
        []
    )
    const deleteCourse = (id)=>{
        let input ={"_id":id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status="success") {
                    alert("successfully deleted")
                    
                } else {
                    alert("error in deletetion")
                    
                }
            }
        ).catch().finally()
    }
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => { setResult(response.data) }
        ).catch((error) => {
            console.log(error)
        }
        ).finally()

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Search boook title</label>
                                <input type="text" className="form-control" name="title" value={data.title} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-primary" onClick={readValue}>search</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">venue</th>
                                            <th scope="col">Trainer</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            result.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th>{value.title}</th>
                                                        <td>{value.desc}</td>
                                                        <td>{value.date}</td>
                                                        <td>{value.duration}</td>
                                                        <td>{value.venue}</td>
                                                        <td>{value.trainer}</td>
                                                        <td><button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button></td>



                                                    </tr>
                                                }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
