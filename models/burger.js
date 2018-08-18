var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},

	new: function(objCol, objData, cb) {
		orm.insertOne('burgers', objCol, objData, function(res) {
			cb(res);
		});
	},

	devour: function(objCol, objData, conditionCol, conditionData, cb) {
		orm.updateOne('burgers', objCol, objData, conditionCol, conditionData, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;