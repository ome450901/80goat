var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var linebot = require('linebot');
var CHANNEL_ID = '1502675233';
var CHANNEL_SECRET = '69391ea39a6354288c6c1e468cb3c74a';
var CHANNEL_ACCESS_TOKEN = 'TOoLBV9gJlKI5LcLVtVUcjHJFZY0oz6E1xtShfRUsRgDxfc+nuFSsD9TqTaGXz8u5/Ev/nQf5G+n336JlWJejf21RtKpBFBGfpVy4Qn44dSN0lhxSEjQyc4/drj6CHAMCqvHhJKveCge2AdCQPE6FAdB04t89/1O/w1cDnyilFU=';

var bot = linebot({
    channelId: CHANNEL_ID,
    channelSecret: CHANNEL_SECRET,
    channelAccessToken: CHANNEL_ACCESS_TOKEN
});



bot.on('message', function (event) {
    event.reply(event.message.text).then(function (data) {
        // success
    }).catch(function (error) {
        // error
    });
    console.log(event);
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});

module.exports = router;
