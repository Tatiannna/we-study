module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('course', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
        },
        department_id: {
            //how to reference a foreign key
            //see if i should implement it here or in associates
            type: DataTypes.INTEGER,
        }
        name: {
            type: DataTypes.TEXT,
        }
    });

    Course.associate = (models) => {
        //figure out how to use foreign key
        models.Course.belongsTo(Department);
    }

}