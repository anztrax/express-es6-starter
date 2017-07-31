import express from 'express';
import config from '../config/config';

const app = express();

app.get('/', (req,res) =>{
  res.send('server is up');
});

app.listen(config.PORT, (err) => {
  if(err){
    console.log('err : ', err);
  }

  console.log(`server is up  ${config.PORT} !`);
});