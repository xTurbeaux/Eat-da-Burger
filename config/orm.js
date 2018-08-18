var connection = require("./connection.js");

var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			cb(result);
		});
	},
	insertOne: function(table, objCol, objData, cb) {
		var queryString = "INSERT INTO ?? (??) VALUES (?);";
		connection.query(queryString, [table, objCol, objData], function(err, result) {
			cb(result);
		});
	},
	updateOne: function(table, objCol, objData, conditionCol, conditionData, cb) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [table, objCol, objData, conditionCol, conditionData], function(err, result) {
			cb(result);
		});
	}
};

module.exports = orm;