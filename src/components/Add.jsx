
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    const [data,changeData]=useState(
        {

        "title":"",
        "desc":"",
        "date":"",
        "duration":"",
        "venue":"",
        "trainer":"",
        }
    )
        const inputHandler = (event)=>{
            changeData({...data,[event.target.name]:event.target.value})
        }
        const readValue =()=>{
            console.log(data)
            axios.post("http://localhost:8080/add",data).then(
                (response)=>{
                    console.log(data)
                if (response.data.status =="success") {
                    alert("added")
                    
                } else {
                    alert("error")
                }
                }
            ).catch(
                (error)=>{
                    console.log(error.message)
                    alert(error.message)
                }
            ).finally()
            
        }




  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" value={data.title} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Description</label>
                        <input type="text" className="form-control" name="desc" value={data.desc} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Date</label>
                        <input type="date" className="form-control" name="date" value={data.date} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Duration</label>
                        <input type="text" className="form-control" name="duration" value={data.duration} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">venue</label>
                       <input type="text" className="form-control" name="venue" value={data.venue} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Trainer</label>
                       <input type="text" className="form-control" name="trainer" value={data.trainer} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>Add</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Add
