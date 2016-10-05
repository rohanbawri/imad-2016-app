var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articleOne = {
    title: 'Article one | rohan bawri',
    heading: "Article one",
    date: 'Sep 5, 2016',
    content: 
         `<p>
            This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. 
          </p> `
};
function createTemplate(data){
    
            var title = data.title;
            var heading = data.heading;
            var date = data.date;
            var content = data.content;
            var htmlTemplate = `
                      <html>
                <head>
                    <title>${title}</title>
                    <link href="/ui/style.css" rel="stylesheet" />
                <body>
                    <div class= "container">
                    <div>
                        <a href='/'>Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                       ${date}
                    </div>
                    <p>
                        ${content}
                    </p>
                    </div>
                </body>
            </html>
            
            `;
            return htmlTemplate;
}


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-one',function (req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two',function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function (req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
