sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("appUnderTest.controller.Main", {
		onInit: function () {
			setTimeout(function () {
				var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/products.json"));
				this.getView().setModel(oModel);
			}.bind(this), 3000);
		}
	});

});
