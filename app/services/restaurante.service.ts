import {Injectable} from "angular2/core";
import {Http, Response, Headers} from "angular2/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../model/restaurante";

@Injectable()
export class RestauranteService{
	constructor(private _http: Http){}

	getRestaurantes(){
		return this._http.get("http://localhost/api-rest/restaurantes-api.php/restaurantes")
							.map(res => res.json());
	}

}
