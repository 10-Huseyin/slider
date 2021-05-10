import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {API_BASE} from '../../config/env'
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { Link, Redirect} from "react-router-dom";
export default function Sliders() {
  
  const [slider, setSlider] = useState([])
  const [IsDelete, setIsdelete] = useState({})

//   const getData = () =>{
//      axios.get(`${API_BASE}`)
//   .then((res)=>setSlider(res.data))
// }

  useEffect(()=>{
    axios.get(`${API_BASE}`)
    .then((res)=>setSlider(res.data)) 
  },[])

  console.log(slider);
//IsDelete set etme mevzusuna bakalım.
  const handleDelete=(selectedId)=>{
    const newSliderList = slider.filter((P) => P.id !== selectedId);
    setSlider(newSliderList)
    console.log(newSliderList);
    axios.put(`${API_BASE}/${selectedId}`, {})
  }

const onHandleToggleToVisible=()=>{
  
  }

  return (
    <div container m-4>
        <h2 className="mx-auto"> Sliders and Settings </h2>
      <Table striped bordered hover>
        
        <thead>
          
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Visible/Non-Visible</th>
            <th>Order</th>
            <th>Edit/Delete</th>
          </tr>
          </thead>
          {slider.length !== 0 &&	slider.map((slider,index) => (
            <tbody>
              <tr>
              <td>{index+1}</td>
                <td>{slider.Title}</td>
                <td>
                  {slider.IsActive==="visible" ? 
                  <button type="button" class="btn btn-success" onClick={onHandleToggleToVisible}>Visible</button>
                  :<button type="button" class="btn btn-danger" onClick={onHandleToggleToVisible}>Non-Visible</button>}
                </td>
                <td>{slider.Order}</td>
                {/* <td>{slider.button}</td> */}
                <td>
                  <div className="d-flex">
                  <Link to={`${slider.id}`}>
                      <button
                        type="button"
                        className="btn btn-sm btn-success mr-auto gap-3"
                      >
                        Edit
                      </button>
                    </Link>  
                  
                      <button
                        type="button"
                        onClick={(event) => handleDelete(slider.id)}
                        className="btn btn-sm btn-danger mx-auto"
                      >
                        Delete
                      </button>
               
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <div className="text-right mr-4">
          <Link to={`add/`}>
            <button className="btn btn-primary">Add New Slider </button>
          </Link>
        </div>

    </div>
  )
}
