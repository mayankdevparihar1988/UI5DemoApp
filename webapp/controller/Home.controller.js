sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("core.home.sampleCoreElements.controller.Home", {

		onInit: function () {

		},

		navToDetailPage: function (event) {
			
			if(event.getSource().getTitle()==="Detail")
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("MaterialOverview");

		}

	});
});