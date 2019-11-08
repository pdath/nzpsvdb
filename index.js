/* This module loads the current New Zealand Police Stolen Vehicle Database (NZPSVDB) into an object.
 *
 */

const csv = require('csv-parser');
const request = require('request');

var plates={};

const nzpsvdb = {
	load: async function() {
		return new Promise(function(resolve, reject) {
			// Download the current stolen vehicle database in CSV format
			request.get("https://www.police.govt.nz/stolenwanted/vehicles/csv/download?tid=&all=true")
				.pipe(csv(["Plate","Colour","Make","Model","Year","Type","Date","Area"]))
				.on('data', (data) => plates[data['Plate']]=true)
				.on('finish', () => resolve())
				.on('error', (err) => reject(err))
		})
	},
	stolen: function(plate) {
		if (plates[plate]) return true;
		return false;
	}
}


module.exports = nzpsvdb
