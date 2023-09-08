import app from './app.js';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App running in ${app.get('env')} mode on http://localhost:${port}`);
});

