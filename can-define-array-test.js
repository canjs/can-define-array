const QUnit = require("steal-qunit");

QUnit.module("can-define-array", function() {
	require("./test/array-test")();
	require("./test/items-test")();
	require("./test/propdefaults-test")();
});
