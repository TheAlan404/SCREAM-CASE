function SCREAM(TEXT){
	return TEXT.toUpperCase().replace(/_/g, "");
};

function SCREAMCASE(obj){
	for(let key of Object.keys(obj)) {
		obj[SCREAM(key)] = obj[key];
	};
};

SCREAMCASE(globalThis)
globalThis.MATH = SCREAMCASE(MATH)
globalThis.PROCESS = SCREAMCASE(process)
globalThis.REQUIRE = (p) => {
	return require(p.toLowerCase()); // :(
};

let val = {
	Object,
	Array,
	String,
	Number,
	BigInt,
	Buffer,
};

for(let NAME in VAL){
	globalThis[SCREAM(NAME)] = VAL;
	SCREAMCASE(VAL)
	if(VAL.prototype) SCREAMCASE(VAL.prototype);
};


module.exports = SCREAMCASE;
