import React from "react";
import  { useState, useEffect } from 'react';
import { ReactDOM } from "react";
import axios from "axios";
import './Home.css';

import  { Spotify } from "react-spotify-embed";



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

	/*const Suggest=()=>{
		axios
		.get("http://localhost:5000//Suggest")
		.then((result) => {
		  console.log(result.data);
		  setMusicData(result.data);
		})
		.catch((error) => console.log(error));
	}
	*/
	const Suggest= async(e)=>{
		e.preventDefault()
		try{
			axios
		.get("http://127.0.0.1:5000//Suggest")
		.then((result) => {
		  console.log(result.data);
		  setMusicData(result.data);
		})
		}catch(e){
			alert(e)
		}
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
	  
	  function play(datam) {
		const isval = datam
		if (isval==="calm") {
		  return <Spotify link="https://open.spotify.com/playlist/37i9dQZF1DX50QitC6Oqtn" />;
		}

		if (isval==="sad but angry") {
		  return <Spotify link="https://open.spotify.com/playlist/74uGT3GHDg0fsDoiZuHGZu" />;
		}
		if (isval==="calm songs") {
			return <Spotify link="https://open.spotify.com/playlist/6f9nZmbYGY8jnoR5QTrSz4" />;
		  }
		if (isval==="happy love") {
		  return <Spotify link="https://open.spotify.com/playlist/37i9dQZF1EIgnXj6uD4zub" />;
		}
		if (isval==="sad but angry") {
			return <Spotify link="https://open.spotify.com/playlist/74uGT3GHDg0fsDoiZuHGZu" />;
		  }
		if (isval==="heartbreak") {
			return <Spotify link="https://open.spotify.com/playlist/37i9dQZF1DXbrUpGvoi3TS" />;
		}  
		if (isval==="chill") {
			return <Spotify link="https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6" />;
		}  
		if (isval==="random") {
			return <Spotify link="https://open.spotify.com/playlist/37i9dQZEVXbNG2KDcFcKOF" />;
		}  
	  }
	  
	  

	
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

				{play(data.pred)}

				</div>
				
			</div>

			<div id="about">
				Emoter is an application employed with BERT model for assisting your emotional needs. Whether it be books or songs, EmoTer can be your support guide!
			</div>
			<div id='footer'>

				<p>Got any suggestions or feedbacks?</p>
				<p>Reach out to us @: <ul><li>shwetahamala@gmail.com</li><li>leofranklinjohn.25cs@licet.ac.in</li></ul></p>
			</div>

		</div>
		
	)
}

