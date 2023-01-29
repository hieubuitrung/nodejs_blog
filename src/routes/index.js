const newsRoute = require('./news');
const siteRoute = require('./site');

function route(app) {
  
    app.use('/news', newsRoute);
    app.use('/', siteRoute);

}

// export route
module.exports = route;
