"use strict";

require("./jquery.tablesorter.min.js");

$.tablesorter.addParser({
	id: "float",
	is: function(s, table) {
			return parseFloat(s) != NaN;
	},
	format: function(s) {
			return $.tablesorter.formatFloat(s);
	},
	type: "numeric"
});

module.exports = {
  tagName: "table",
  className: "",
  client: function() {
    $(this.el).addClass("tablesorter");
    $(this.el).tablesorter({
      textExtraction: function(node) { 
        var value_cell = $(node).find(".value_cell");
        if (value_cell.length > 0) {
          return value_cell.data("value") || value_cell.html();
        } else {
          return $(node).text();
        }
      }
    });
  }
};
