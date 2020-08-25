sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("core.home.sampleCoreElements.controller.Home", {

		onInit: function () {

		},

		navToDetailPage: function (event) {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			if (event.getSource().getTitle() === "Detail") {

				oRouter.navTo("MaterialInspection");
			} else {

				oRouter.navTo("MaterialOverview");

			}

		}

	});
});