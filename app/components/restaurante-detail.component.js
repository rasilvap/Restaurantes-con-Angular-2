System.register(["angular2/core", "angular2/router", "../services/restaurante.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, restaurante_service_1;
    var RestaurantesDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (restaurante_service_1_1) {
                restaurante_service_1 = restaurante_service_1_1;
            }],
        execute: function() {
            RestaurantesDetailComponent = (function () {
                function RestaurantesDetailComponent(_restauranteService, _routeParams, _router) {
                    this._restauranteService = _restauranteService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                RestaurantesDetailComponent.prototype.ngOnInit = function () {
                    this.getRestaurante();
                };
                RestaurantesDetailComponent.prototype.getRestaurante = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    var random = this._routeParams.get("random");
                    this._restauranteService.getRestaurante(id, random)
                        .subscribe(function (response) {
                        _this.restaurante = response.data;
                        _this.status = response.status;
                        if (_this.status !== "success") {
                            // alert("Error en el servidor");
                            _this._router.navigate(["Home"]);
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("Error en la petición");
                        }
                    });
                };
                RestaurantesDetailComponent = __decorate([
                    core_1.Component({
                        selector: "restaurantes-detail",
                        templateUrl: "app/view/restaurante-detail.html",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [restaurante_service_1.RestauranteService]
                    }), 
                    __metadata('design:paramtypes', [restaurante_service_1.RestauranteService, router_1.RouteParams, router_1.Router])
                ], RestaurantesDetailComponent);
                return RestaurantesDetailComponent;
            }());
            exports_1("RestaurantesDetailComponent", RestaurantesDetailComponent);
        }
    }
});
//# sourceMappingURL=restaurante-detail.component.js.map