const OpenAI = require('openai-api');
// const openai = new OpenAI('');

const openAiFunc = () => {
	const btnsubmit = document.querySelector('#submit-conversion');
	btnsubmit.addEventListener('click', (event) => {
		const txtToConvert = document.querySelector("#test-id").value
		
		document.querySelector(".loading-txt").removeAttribute("hidden");
		document.querySelector(".loading-txt").innerHTML = "Loading...";

		try{
		  (async (req, res) => {
		    let prompt = `Input:\n\nTerrific views and challenging play \n\nNot far from Charleston, Bent Tree Golf Course offers terrific views and challenging play for golfers at every skill level. Well-groomed fairways and greens keep Bent Tree Golf Course difficult yet friendly, and the staff can offer tips and tricks for playing your best round. \n\nBent Tree Golf Course is a terrific choice for your regular rounds of golf or a new destination for you and friends when visiting Charleston.\n\nClick here to find out more\n\n\n\n---\n\nOutput:\n\n<h2>Terrific views and challenging play</h2>\n<p>Not far from Charleston, Bent Tree Golf Course offers terrific views and challenging play for golfers at every skill level. Well-groomed fairways and greens keep Bent Tree Golf Course difficult yet friendly, and the staff can offer tips and tricks for playing your best round. Bent Tree Golf Course is a terrific choice for your regular rounds of golf or a new destination for you and friends when visiting Charleston.</p>\n<a>Click here to find out more</a>\n\n---\n\nInput:\n\nPublic Golf Course Serving the Warren, PA & Jamestown, NY Area\n\nCable Hollow Golf Course has been owned and operated by the Bortz Family for five decades. Since 1972, we’ve been serving up challenging golf, great food, and smokin’ deals in our golf pro shop. While we always want to give our best, we strive to do what we do with friendly service that feels just right.\n\nMany of our customers have been with us for years during our journey, and we’d like you to be a part of it. So whether you want to play golf, enjoy a nice meal, practice on our driving range, schedule a special event or get the latest in great-priced golf equipment, you can count on all of us at Cable Hollow to treat you right.\n\n\n---\n\nOutput:\n\n<h2>Public Golf Course Serving the Warren, PA & Jamestown, NY Area</h2>\n<p>Cable Hollow Golf Course has been owned and operated by the Bortz Family for five decades. Since 1972, we’ve been serving up challenging golf, great food, and smokin’ deals in our golf pro shop. While we always want to give our best, we strive to do what we do with friendly service that feels just right.</p>\n<p>Many of our customers have been with us for years during our journey, and we’d like you to be a part of it. So whether you want to play golf, enjoy a nice meal, practice on our driving range, schedule a special event or get the latest in great-priced golf equipment, you can count on all of us at Cable Hollow to treat you right.<p>\n\n---\n\nInput:\n\n${txtToConvert}\n\nOutput:`;
		    const gptResponse = await openai.complete({
		        engine: 'davinci',
		        prompt: prompt,
		        maxTokens: 1000,
		        temperature: 0.6,
		        max_tokens: 1216,
		        topP: 1,
		        presencePenalty: 0,
		        frequencyPenalty: 0,
		        bestOf: 1,
		        n: 1,
		        stream: false,
		        stop: ["---"]
		    });
		let texthing = gptResponse.data.choices
		// console.log(texthing[0].text);
	    document.querySelector("#converted-text").value = texthing[0].text;
	    document.querySelector(".loading-txt").hidden = true;

		})();} 
		catch(err){
	  console.log(err)
		}

	});
}
 export { openAiFunc };