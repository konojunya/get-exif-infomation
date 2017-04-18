var im = require('imagemagick');
var async = require('async');
 
 var imgFile = './img.JPG';
 
 async.series(
 [
	 function(callback) { im.identify(['-format', '%[EXIF:GPSLatitude]', imgFile],
		 function(err, metadata){ 
			if (err) callback(err);
			callback(null, { 'GPSLatitude': metadata.trimRight() });
		 });
	 }, function(callback) { im.identify(['-format', '%[EXIF:GPSLatitudeRef]', imgFile],
		 function(err, metadata){ 
			if (err) callback(err);
			callback(null, { 'GPSLatitudeRef': metadata.trimRight() });
		 });
	 }, function(callback) { im.identify(['-format', '%[EXIF:GPSLongitude]', imgFile],
		 function(err, metadata){ 
			if (err) callback(err);
			callback(null, { 'GPSLongitude': metadata.trimRight() });
		 });
	 }, function(callback) { im.identify(['-format', '%[EXIF:GPSLongitudeRef]', imgFile ],
		 function(err, metadata){ 
			if (err) callback(err);
			callback(null, { 'GPSLongitudeRef': metadata.trimRight() });
		 });
	 }
 ],
 function(err, results){
 		var lat = results[0].GPSLatitude
 		var long = results[2].GPSLongitude

 		var a = []
 		var b = []

 		lat = lat.split(",")
 		lat.map(function(i){
 			a.push(i.replace(/\/.*/,"").trim())
 		})
 		long = long.split(",")
 		long.map(function(i){
 			b.push(i.replace(/\/.*/,"").trim())
 		})

 		console.log((a[0],a[1],a[2],"N"))
 		console.log((b[0],b[1],b[2],"E"))
});