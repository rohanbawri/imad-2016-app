var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles = {
      'article-one' : {
        title: 'Article one | rohan bawri',
        heading: "Article one",
        date: 'Sep 5, 2016',
        content: 
             `<p>
                This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one. 
              </p> `
},
      'article-two' : {
          title: 'Article Two | rohan bawri',
            heading: "Article Two",
            date: 'Sep 10, 2016',
            content: 
                 `<p>
                    This is content of second article.
                  </p> `
      },
      'article-three' : {
          title: 'Article Three | rohan bawri',
            heading: "Article Three",
            date: 'Sep 14, 2016',
            content: 
                 `<p>
                    This is content of third article.
                  </p> `
      },

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
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter =0;
app.get('/counter',function(req,res){
   counter = counter +1;
   res.send(counter.toString());
});

app.get('/:articleName',function (req,res) {
    var articleName = req.params.articleName;
 res.send(createTemplate(articles[articleName]));
});

var names = [];
app.get('/submit-name/:name',function(req,res){
    
    var name = req.params.name;
    
    names.push(name);
    
    res.send(JSON.stringify(name));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
