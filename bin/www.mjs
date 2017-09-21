import express from 'express';
import fallback from 'express-history-api-fallback';

const app = express();
app.use('/', express.static('dist'));
app.use(fallback('index.html', { root: 'dist' }));
app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});
