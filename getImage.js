/**
 * Created by NeoHoang on 6/27/2016.
 */
var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
        console.log(res.statusCode);
        if(res.statusCode == 404) return false;
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

// for(var i = 1; i < 221 ;i++){
//     download('https://assemblyline.in/builder/components/thumb/'+ i +'.jpg', 'builder/components/thumb/' +i+'.jpg', function(){
//         console.log('done - image '+ i +'.jpg');
//     });
// }
// for(var i = 1; i < 5 ;i++){
//     download('https://assemblyline.in/builder/components/header_'+ i +'.html', 'builder/components/header_' +i+'.html', function(){
//         console.log('done - header '+ i +'.html');
//     });
// }

// get header templates

// for(var i = 1; i <= 20 ;i++){
//     download('https://assemblyline.in/builder/components/header_'+ i +'.html', 'builder/components/header_' +i+'.html', function(){
//         console.log('done - header '+ i +'.html');
//     });
// }

// get footer_ templates

for(var i = 1; i <= 12 ;i++){
    download('https://assemblyline.in/builder/components/footer_'+ i +'.html', 'builder/components/footer_' +i+'.html', function(){
        console.log('done - Footer '+ i +'.html');
    });
}



