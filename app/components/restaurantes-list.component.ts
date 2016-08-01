import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";


@Component({
	selector: "restaurantes-list",
	templateUrl: "app/view/restaurantes-list.html",
	providers: [RestauranteService]
})

export class RestaurantesListComponent implements OnInit {
	public titulo:string = "Listado de restaurantes:";
	public status: string;
	public errorMessage;
	public confirmado;

  constructor(private _restauranteService: RestauranteService){}


 	ngOnInit() {
 		this.getRestaurantes();
		console.log("restaurantes-list component cargado");
	}

	getRestaurantes(){
		let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
	}

}
