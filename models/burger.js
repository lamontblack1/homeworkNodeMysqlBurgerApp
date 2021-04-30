const orm = require("../config/orm.js");

let burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        });
    },
    insertOne: function (col, value, cb) {
        orm.insertOne("burgers", col, value, function (res) {
            cb(res)
        });
    },
    updateOne: function (table, col, val, id, cb) {
        orm.updateOne(table, col, val, id, function (res) {
            cb(res)
        });
    }
};

module.exports = burger;