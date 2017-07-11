import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-binding',
	templateUrl: './binding.component.html',
	styles: [`
		.username {
			color: red;
		}
	`]
})

export class BindingComponent implements OnInit {

	//String Interpolation
	fullName = "Sai Charan R Patlolla";

	username = '';

	buttonEnabled = false;

	buttonClicked = " ";

	ngOnInit() {

	}

	Constructor(){

	}

	//Enable button if input value is not empty
	onEnteringInput(event: any) {
		if(event.target.value.length >= 1) {
			this.buttonEnabled = true;
		} else {
			this.buttonEnabled = false;
		}
	}

	//Reset the values on Click on Button
	resetUsername() {
		this.username = '';
		this.buttonEnabled = false;
	}


	//Checking Click Event
	checkClickEvent() {
		this.buttonClicked = "Button is Clicked";
	}


}
