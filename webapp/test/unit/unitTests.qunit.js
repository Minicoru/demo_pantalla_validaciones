/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/demo_pantalla_validaciones/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});