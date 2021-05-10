import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { API_BASE } from '../../config/env';
import { Redirect } from "react-router-dom";



const AddSlider = () => {
  const [Title, setTitle] = useState('');
	const [SubTitle, setSubTitle] = useState('');
  const [Url, setUrl] = useState('');
  const [ButtonText, setButtonText] = useState('');
	const [Order, setOrder] = useState('');
	const [IsActive, setIsActive] = useState('');
	const [IsDelete, setIsDelete] = useState(false);
	const [ImageId, setImageId] = useState('');
	const [IsVideo, setIsVideo] = useState('');
	const [CreateAt, setCreateAt] =useState(new Date());
	const [UpdateAt, setUpdateAt] =useState('');
	const [photo, setPhoto] =useState('');

  const [submit, setSubmit] = useState(false)

	const onSubmit = (event) => {
		event.preventDefault();
    axios.post(`${API_BASE}`, {Title, SubTitle, Url, ButtonText, Order, IsActive, IsDelete,ImageId, IsVideo, CreateAt, UpdateAt})
    .then((res) => {console.log(res.data)})
		setTitle('');
		setSubTitle('');
    setUrl('');
    setButtonText('');
    setOrder('');
		setIsActive('');
		setIsDelete('');
		setImageId('');
		setIsVideo('');
		setSubmit(true);
		setCreateAt('');
		setUpdateAt('');
   }
	 const getPhoto=(e)=>{
		console.log(e.target.files[0]);
			setPhoto(e.target.files[0]);
	 }


    return (
	<div className='container bg-light border border-5 border-primary p-5 text-center'>
      <form onSubmit={onSubmit}>
			<h1 className='mx-auto'> ADD SLIDER FORM </h1>
			<div className='row d-flex flex-row m-2 pb-3'>
			<div className='col-4 text-center d-flex flex-column' >
        <label for='Title'>Title:</label>
					<input
						required='required'
						type='text'
						id='Title'
						value={Title}
						onChange={(event) => setTitle(event.target.value)}
					></input>
					</div>
					<div className='col-4 text-center d-flex flex-column'>
        <label for='SubTitle'>SubTitle:</label>
					<input
						required='required'
						type='text'
						id='SubTitle'
						value={SubTitle}
						onChange={(event) => setSubTitle(event.target.value)}
					></input> 
					</div>
					<div className='col-4 text-center d-flex flex-column'>
        <label for='Url'>Url:</label>
					<input
					
						type='text'
						id='Url'
						value={Url}
						onChange={(event) => setUrl(event.target.value)}
					></input>
				</div>
				</div>
			<div className='row d-flex flex-row m-2'>
				<div className='col-4 text-center d-flex flex-column'>
        <label for='ButtonText'>ButtonText:</label>
					<input
						required='required'
						type='text'
						id='ButtonText'
						value={ButtonText}
						onChange={(event) => setButtonText(event.target.value)}
					></input><br/>
        </div>
				<div className='col-4 text-center d-flex flex-column'>
				<label for='Order'>Order:</label>
					<input
						required='required'
						type='number'
						id='Order'
						value={Order}
						onChange={(event) => setOrder(event.target.value)}
					></input>
					</div>
					<div className='col-4 text-center d-flex flex-column'>
				<label for='ImageId'>ImageId:( Add Slider Photo)</label>
					<input
						required='required'
						type='file'
						id='ImageId'
						value={ImageId}
						onChange={(event) => setImageId(event.target.value)}
						onChange={getPhoto}
					></input>
				</div>
				</div>
			<div className='row d-flex flex-row m-2'>
					<div className='col-4 text-center d-flex flex-column'>
				<label for='IsActive'>IsActive:</label>
					<select
						required='required'
						id='IsActive'
						onChange={(event) => setIsActive(event.target.value)}
					>
						<option value='visible'>visible</option>
						<option value='non-visible'>non-visible</option>
					</select><br/>
				</div>
				<div className='col-4 text-center d-flex flex-column'>
				<label for='IsVideo'>IsVideo:</label>
					<select
						required='required'
						id='IsVideo'
						onChange={(event) => setIsVideo(event.target.value)}
					>
						<option value='photo'>photo</option>
						<option value='video'>video</option>
					</select> <br/>
					</div>
					<div className='col-4 text-center'>
					<button type='submit' className='btn btn-primary mt-4'>
						ADD SLIDER
					</button>
					</div>
				</div>
      </form>
      {submit ? <Redirect to="/" /> : null}
      </div>

    )
}

export default AddSlider;