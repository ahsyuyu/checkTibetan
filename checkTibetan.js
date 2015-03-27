var fs=require("fs");
var roots=JSON.parse(fs.readFileSync("./roots.json","utf8"));

var vowels=["","ི","ུ","ེ","ོ"];

var suffixes=["","ག", "ང", "ད", "ན", "བ", "མ", "ར", "ལ", "ས" ];

var getRootsWithVowels2D
	var rootsWithVowels2D=roots.map(function(items){
		var stacksWithVowels=items.map(function(item){
			var letterWithVowels=[];
			for(var i=0; i<vowels.length; i++){
				letterWithVowels.push(item+vowels[i]);
			}
			return letterWithVowels;
		})
		return stacksWithVowels;
	});

var rootsWithVowels1D=[];
roots.map(function(items){
	items.map(function(item){
		for(var j=0; j<vowels.length; j++){
			rootsWithVowels1D.push(item+vowels[j]);
		}
	});
});

var rootsWithVowelsWithSuffixes2D=[];
rootsWithVowels1D.map(function(item){
	var out=[];
	for(var k=0; k<suffixes.length; k++){
		out.push(item+suffixes[k]);
	}
	rootsWithVowelsWithSuffixes2D.push(out);
});

var rootsWithVowelsWithSuffixes1D=[];
rootsWithVowels1D.map(function(item){
	for(var m=0; m<suffixes.length; m++){
		rootsWithVowelsWithSuffixes1D.push(item+suffixes[m]);
	}
});

// var res=[];
// for(var x=0; x<rootsWithVowelsWithSuffixes1D.length; x++){

// }

console.log(rootsWithVowelsWithSuffixes2D);