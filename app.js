
import SHA256 from "crypto-js/sha256.js";

const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};

function generateHash(obj) {
	
	let jsonString = JSON.stringify(obj);
	
	const hashDigest = SHA256(jsonString);
	return hashDigest;
}
console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);


