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

// for(var i = 1; i <= 12 ;i++){
//     download('https://assemblyline.in/builder/components/footer_'+ i +'.html', 'builder/components/footer_' +i+'.html', function(){
//         console.log('done - Footer '+ i +'.html');
//     });
// }

// get contact_ templates

// for(var i = 1; i <= 9 ;i++){
//     download('https://assemblyline.in/builder/components/Contact_'+ i +'.html', 'builder/components/Contact_' +i+'.html', function(){
//         console.log('done - Contact_ '+ i +'.html');
//     });
// }

// get contents_ templates

// for(var i = 1; i <= 100 ;i++){
//     download('https://assemblyline.in/builder/components/contents_'+ i +'.html', 'builder/components/contents_' +i+'.html', function(){
//         console.log('done - contents_ '+ i +'.html');
//     });
// }

// get projects_ templates

// for(var i = 1; i <= 9 ;i++){
//     download('https://assemblyline.in/builder/components/projects_'+ i +'.html', 'builder/components/projects_' +i+'.html', function(){
//         console.log('done - projects_ '+ i +'.html');
//     });
// }
// for(var i = 1; i <= 28 ;i++){
//     download('https://assemblyline.in/img/works/work'+ i +'.jpg', 'img/works/work' +i+'.jpg', function(){
//         console.log('done - work '+ i +'.jpg');
//     });
// }
// for(var i = 10; i <= 100 ;i++){
//     download('https://assemblyline.in/img/works/'+ i +'.jpg', 'img/works/' +i+'.jpg', function(){
//         console.log('done - work 0'+ i +'.jpg');
//     });
// }

// get pricetable_ templates

// for(var i = 1; i <= 200 ;i++){
//     download('https://assemblyline.in/builder/components/pricetable_'+ i +'.html', 'builder/components/pricetable_' +i+'.html', function(){
//         console.log('done - pricetable_ '+ i +'.html');
//     });
// }

// get navigation_ templates

// for(var i = 1; i <= 200 ;i++){
//     download('https://assemblyline.in/builder/components/navigation_'+ i +'.html', 'builder/components/navigation_' +i+'.html', ()=>{
//         console.log('done - navigation_ '+ i +'.html');
//     });
// }

// get Team_ templates

// for(var i = 1; i <= 20 ;i++){
//     download('https://assemblyline.in/builder/components/Team_'+ i +'.html', 'builder/components/Team_' +i+'.html', ()=>{
//         console.log('done - Team_ '+ i +'.html');
//     });
// }

// for (var i = 1; i <= 30; i++) {
//     download('https://assemblyline.in/img/team' + i + '.png', 'img/team' + i + '.png', ()=> {
//         console.log('done - Team img ' + i + '.png');
//     });
// }
// for (var i = 1; i <= 30; i++) {
//     download('https://assemblyline.in/img/t' + i + '.jpg', 'img/t' + i + '.jpg', ()=> {
//         console.log('done - t img ' + i + '.jpg');
//     });
// }

// for (var i = 1; i <= 50; i++) {
//     download('https://assemblyline.in/img/shop/p' + i + '.png', 'img/shop/p' + i + '.png', ()=> {
//         console.log('done - shop img ' + i + '.png');
//     });
// }

for (var i = 1; i <= 10; i++) {
    download('https://assemblyline.in/img/client/' + i + '.png', 'img/client/' + i + '.png', ()=> {
        console.log('done - client img ' + i + '.png');
    });
}