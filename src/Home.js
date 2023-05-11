import React from "react";
import  { useState, useEffect } from 'react';
import { ReactDOM } from "react";

import './Home.css';
export default function Home(){
	window.onscroll= function(){HeaderScroll()};

var header=document.getElementById("header")
var sticky =header.offsetTop;

function HeaderScroll(){
	if(window.pageYOffset>sticky){
		header.classList.add("sticky");
	}
	else{
		header.classList.remove("sticky");

	}
}
	
	return(

		<div id="home-wrap">
			<div id='header'>
				Emoter
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
				reach out!
			</div>

		</div>
	)
}


