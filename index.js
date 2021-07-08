function SCREAM(TEXT){
	return TEXT.toUpperCase().replace(/_/g, "");
};

function SCREAMCASE(obj){
	for(let key of Object.keys(obj)) {
		obj[SCREAM(key)] = obj[key];
	};
};

SCREAMCASE(globalThis)
globalThis.MATH = SCREAMCASE(Math)
globalThis.PROCESS = SCREAMCASE(process)
globalThis.REQUIRE = (p) => {
	return require(p.toLowerCase()); // :(
};

let VAL = {
	Object,
	Array,
	String,
	Number,
	BigInt,
	Buffer,
};

for(let NAME in VAL){
	globalThis[SCREAM(NAME)] = VAL[NAME];
	SCREAMCASE(VAL[NAME])
	if(VAL[NAME].prototype) SCREAMCASE(VAL[NAME].prototype);
};


module.exports = SCREAMCASE;
