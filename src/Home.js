import React from "react";
import  { useState, useEffect } from 'react';
import { ReactDOM } from "react";
import axios from "axios";
import './Home.css';




export default function Home(){
	const [musicData, setMusic] = useState(0)
	function suggest() {
		var msg=document.getElementById("message").value
		const request = new XMLHttpRequest()
		request.open('POST', `/suggest/${JSON.stringify(msg)}`)
		request.send();
		axios({
		  method: "POST",
		  url:"/suggest",
		})
		.then((response) => {
		  let res =response.data
		  setMusic(({
			music: res.pred
			}))
		})}
	
		function predict() {
			var msg=document.getElementById("message").value
			const request = new XMLHttpRequest()
			request.open('POST', `/predict/${JSON.stringify(msg)}`)
			request.send();
			axios({
			  method: "POST",
			  url:"/predict",
			})
			.then((response) => {
			  const res =response.data
			  setMusic(({music:0
				
				}))
			})}
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

						<input type="submit" class="btn-info" value="predict" onClick={predict}></input>
		
					</form>
					<form method="POST">
					<br/>
						<input type="submit" class="btn-info" value="suggest" onClick={suggest}></input>
		
					</form>

				
				</div>
				<div id="music-player">
					MusicPlayer
					<p>{musicData.music}</p>
              			
              
            	
        
				</div>
			</div>
			<div id='footer'>
				<p>Got any suggestions or feedbacks?</p>
				<p>Reach out to us @:</p>
			</div>

		</div>
	)
}


