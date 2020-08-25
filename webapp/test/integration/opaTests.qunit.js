/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"core/home/sampleCoreElements/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});