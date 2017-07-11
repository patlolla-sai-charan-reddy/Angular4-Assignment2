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

	buttonClicked = " ";

	ngOnInit() {

	}

	Constructor(){

	}

	//Checking Click Event
	checkClickEvent() {
		this.buttonClicked = "Button is Clicked";
	}


}
