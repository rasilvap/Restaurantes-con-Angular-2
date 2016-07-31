import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";


@Component({
	selector: "restaurantes-list",
	templateUrl: "app/view/restaurantes-list.html",
	directives: [ROUTER_DIRECTIVES]
})

export class RestaurantesListComponent implements OnInit {
	public titulo:string = "Listado de restaurantes:";
	public status: string;
	public errorMessage;
	public confirmado;


 	ngOnInit() {
 		this.getRestaurantes();
		console.log("restaurantes-list component cargado");
	}

	getRestaurantes(){
		let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");



	}

	onBorrarConfirm(id){
		this.confirmado = id;
	}

	onCancelarConfirm(id){
		this.confirmado = null;
	}

	onBorrarRestaurante(id){

	}

}
