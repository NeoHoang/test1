/**
 * Created by NeoHoang-HomePC on 7/28/2016.
 */
'use strict';
const fs = require('fs');
const unzip = require('unzip');

const log = console.log;
const zipfile = './sample-prj/peace.zip';

fs.createReadStream(zipfile)
    .on('error', log)
    .pipe(unzip.Extract({path: './stores/peace'}));
