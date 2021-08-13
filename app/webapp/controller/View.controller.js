sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("app.controller.View", {
			onInit: function () {
                $.get("api/users", function(data){
                    console.log(data);
                    
                });
                $.get("/api/users", function(data){
                    console.log(data);
                    
                });
			}
		});
	});
