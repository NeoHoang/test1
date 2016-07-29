/**
 * Created by NeoHoang-HomePC on 7/28/2016.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const unzip = require('unzip');
const cheerio = require('cheerio');
const log = console.log;

const storePath = './stores/';
const tplFile = storePath + '__tpl.html';
const preview = './preview.html';

const prjFile = storePath + 'test.prj';
const prjFolder = path.basename(prjFile,path.extname(prjFile));

fs.createReadStream(prjFile)
    .on('error', log)
    .pipe(unzip.Extract({path: './stores/' + prjFolder})) // Nở nén vào thư mục cùng với tên của file dự án
    .on('close', ()=> {

        // Đọc file pages.data và xử lý dữ liệu
        let pagesDatafile = './stores/' + prjFolder + '/pages.data',
            pagesDataHTML = './stores/' + prjFolder + '/pages.html'
        fs.readFile(pagesDatafile, 'utf8', (err, data)=> {
            if (err) throw err;
            log('OK: ' + pagesDatafile);
            let clean;
            const $ = cheerio.load(data);
            $("[contenteditable]").removeAttr("contenteditable");
            $(".ui-sortable-handle").each(()=> {
                    let e = $(this).attr("style");
                    if (typeof e === 'string' || e instanceof String) {
                        e = e.replace(/position: relative; opacity: 1;/g, "");
                        "" == e ? $(this).removeAttr("style") : $(this).attr("style", e);
                    }
                    $(this).removeClass("ui-sortable-handle")
                }
            );
            $(".ui-sortable").removeClass("ui-sortable");
            $(".ui-sortable-handle").removeClass("ui-sortable-handle");

            clean = $.html();
            fs.writeFile(pagesDataHTML, clean, (err) => {
                if (err) {
                    return log(err);
                }
                log("The content file was saved!");
            });

            fs.readFile(tplFile, 'utf8', (err, buffer)=> {
                if (err) throw err;
                log("The tpl file was loaded!");
                buffer = buffer.replace(/__buffer__/g, clean);
                //log(buffer);
                fs.writeFile(preview, buffer, (err) => {
                    if (err) {
                        return console.log(err);
                    }
                    log("The preview file was saved!");
                });
            });
        });


    })


