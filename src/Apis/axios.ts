import axios from "axios";

export default axios.create({
	baseURL: "https://webknox-jokes.p.rapidapi.com",
	headers: {
		'X-RapidAPI-Key': 'COPY_FROM_NOTE',
		'X-RapidAPI-Host': 'webknox-jokes.p.rapidapi.com'
	  }
})