import app from './app';
import sequelize from './conexion/conexion';
import { config as dotenv } from 'dotenv';
dotenv();
const port = process.env.PORT || 1001;

app.listen(port,(err)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(`Server run on port ${port}`);
    sequelize.sync({ force: false }).then(()=>{
        console.log('Conect to database');
    }).catch(err=>{
        console.log(err)
    });
});