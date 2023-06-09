import React from "react";
import  { useState, useEffect } from 'react';
import { ReactDOM } from "react";
import axios from "axios";
import './Home.css';




export default function Home(){
	/* let p=0;
	const [musicData, setMusicData] = useState(null)

	 function Suggest() {
	   axios({
		 method: "GET",
		 url:"/suggest",
	   })
	   .then((response) => {
		 const res =response.data
		 setMusicData(({
		   music: res.pred,
		   }))
	   })}
		
	function Predict(){
		var msg=document.getElementById("message").value
		const request = new XMLHttpRequest()
		request.post('http://localhost:5000/Predict/${JSON.stringify(msg)}')
		request.send();
	}
	*/	

	//for predicting values:
	
	const Predict= async(e)=>{
		e.preventDefault()
		try{
			var msg=document.getElementById("message").value
			const res= await axios.post('http://127.0.0.1:5000//Predict',{"sentence": msg})
			console.log(res.data)
		}catch(e){
			alert(e)
		}
	}

	


	const [data, setMusicData] = useState('');

	useEffect(()=>{
		Suggest();
	},[]);

	const Suggest=()=>{
		axios
		.get("http://localhost:5000//Suggest")
		.then((result) => {
		  console.log(result.data);
		  setMusicData(result.data);
		})
		.catch((error) => console.log(error));
	}
	
	


	/*function Suggest() {
	 axios({
		method: "GET",
		url:"http://127.0.0.1:5000/Suggest",
	  })
	  .then((response) => {
		const res =response.data
		setMusicData(({
		  music: res.pred
		}))
	  })} */
	  


	
	return(

		<div id="home-wrap">
			<div id='header'>
				EMOTER
			</div>
			<div id="content">
				<div id="chat-bot">
				
    				<form method="POST">
						<p id="text">Enter Your Text Here</p>
						<textarea id="message" rows="6" cols="50"></textarea>
						<br/>

						<input type="submit" class="btn-info" value="predict" onClick={Predict}></input>
					</form>
					<form method="POST">
					<br/>
						<input type="submit" class="btn-info" value="suggest" onClick={Suggest}></input>
		
					</form>

				
				</div>
				<div id="music-player">
					MusicPlayer
				
					<p>
					{data.pred}
					</p>
				
              			
					

            	
        
				</div>
			</div>
			<div id='footer'>
				<p>Got any suggestions or feedbacks?</p>
				<p>Reach out to us @:</p>
			</div>

		</div>
	)
}

