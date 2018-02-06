import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.js';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(express.static('public'));

app.get('*', function(req, res){
    console.log(path.join(__dirname,'public'));
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if (err){
        console.log(err);
    }
});