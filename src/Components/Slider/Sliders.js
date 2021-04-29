import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {API_BASE} from '../../config/env'
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { Link, Redirect} from "react-router-dom";
export default function Sliders() {
  
  const [slider, setSlider] = useState([])
  
  useEffect(()=>{
    axios.get(`${API_BASE}`)
    .then((res)=>setSlider(res.data))
  },[])

  console.log(slider);

  const handleDelete=()=>{

  }

  return (
    <div container m-4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Description</th>
            <th>Photo</th>
            <th>Button</th>
            <th>Edit/Delete</th>
          </tr>
          </thead>
          {slider.length !== 0 &&	slider.map((slider,index) => (
            <tbody>
              <tr>
              <td>{index+1}</td>
                <td>{slider.title}</td>
                <td>{slider.desc}</td>
                <td>{slider.img_url}</td>
                <td>{slider.button}</td>
                <td>
                  <div className="d-flex">
                 
                      <button
                        type="button"
                        className="btn btn-sm btn-success mr-auto gap-3"
                      >
                        Edit
                      </button>
                  
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
    </div>
  )
}
