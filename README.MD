# nzpsvdb - New Zealand Police Stolen Vehicle DataBase

This node.js javascript module loads the stolen vehicle database from the Internet into memory and then allows you to
search for numbers on the NZ Police stolen vehicle database.

The are two functions that are used.  The first is load() which loads the database.  After this you can call stolen() which you
pass a number plate to.  It returns true if the vehicle is stolen, false otherwise.

It will be most efficient if load() is called once and then many calls are made to stolen() - such as for camera based automatic licence
plate recognition.


## Sample code:

```javascript
var nzpsvdb=require('./index.js');

main = async function() {
	await nzpsvdb.load();

	if (nzpsvdb.stolen('LDT37')) console.log("stolen");
	else console.log("not stolen");

	if (nzpsvdb.stolen('10J39fdfdw')) console.log("stolen");
	else console.log("not stolen");
}
   
main()
```