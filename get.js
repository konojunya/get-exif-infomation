var ExifImage = require('exif').ExifImage;

try {
    new ExifImage({ image : './img.JPG' }, function (error, exifData) {
        if (error){
        	console.log('Error: '+error.message);
        }else{
        	var gps = (exifData.gps);
        	
        }
    });
} catch (error) {
    console.log('Error: ' + error.message);
}