var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title:'Article one | Karthik Suresh',
        heading:'Article one',
        date:'February 4,2017',
        content:`
                <p>
                    This is the content for my first article.
                </p>
                <p>
                    This is some random stuff I am typing.
                </p>
                <p> This is also random.
                </p>`
    },
    'article-two':{
        title:'Article two | Karthik Suresh',
        heading:'Article two',
        date:'February 14,2017',
        content:`
                <p>
                    This is the content for my second article.
                </p>
                <p>
                    Digital Design by Mano and Ciletti
                </p>
                <p> Signals and systems by Oppenheim and Wilsky.
                </p>`
    },
    'article-three':{ 
        title:'Article three | Karthik Suresh',
        heading:'Article three',
        date:'February 24,2017',
        content:`
                <p>
                    This is the content for my third article.
                </p>
                <p>
                    Digital Design by Wakerly
                </p>
                <p> Signals and systems by B P Lathi.
                </p>`
    },
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var heading=data.heading;

var htmlTemplate =`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale-1"/>
         <link href="/ui/style.css" rel="stylesheet" />           
        </style>
    </head>
    <body>
        <div class="container">
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
            <div>
                 ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
   //articleName=article-one
    var articleName=req.params.articleName;
     res.send(createTemplate(articles[articleName]));
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
