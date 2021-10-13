// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "channels"
import { openAiFunc } from '../components/openai'
// import { jsonConversionFunc } from '../components/jsonconversion'
import 'bootstrap';

document.addEventListener('turbolinks:load', () =>{
	openAiFunc();
	// jsonConversionFunc();
});

Rails.start()
Turbolinks.start()
