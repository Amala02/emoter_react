import React from "react";
import  { useState, useEffect } from 'react';
import { ReactDOM } from "react";

import './Home.css';
export default function Home(){
	
	
	return(

		<div id="home-wrap">
			<div id='header'>
				EMOTER
			</div>
			<div id="content">
				<div id="chat-bot">
					ChatBot
				</div>
				<div id="music-player">
					MusicPlayer
				</div>
			</div>
			<div id='footer'>
				<p>Got any suggestions or feedbacks?</p>
				<p>Reach out to us @:</p>
			</div>

		</div>
	)
}


