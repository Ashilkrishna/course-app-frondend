
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/view").then((response)=>{
            changeData(response.data)
        }).catch().finally()

    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
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
                                        data.map(
                                            (value,index)=>{
                                                return  <tr>
                                                <th scope="row">{value.title}</th>
                                                <td>{value.desc}</td>
                                                <td>{value.date}</td>
                                                <td>{value.duration}</td>
                                                <td>{value.venue}</td>
                                                <td>{value.trainer}</td>



    
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
export default ViewAll
