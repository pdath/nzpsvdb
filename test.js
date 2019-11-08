var nzpsvdb=require('./index.js');

main = async function() {
	await nzpsvdb.load();

	if (nzpsvdb.stolen('LDT37')) console.log("stolen");
	else console.log("not stolen");

	if (nzpsvdb.stolen('10J39fdfdw')) console.log("stolen");
	else console.log("not stolen");
}

main()
