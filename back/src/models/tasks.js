import { DataTypes, Model } from 'sequelize';
import sequelize from '../conexion/conexion';
class Tasks extends Model {};

Tasks.init({
    id_task:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title_task:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    text_task:{
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
    }
},{
    sequelize,
    modelName:'task',
    timestamps:false,
})

export default Tasks;