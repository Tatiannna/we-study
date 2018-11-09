module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('course', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
        },
        department_id: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.TEXT,
        },
    });

    Course.associate = (models) => {
        //adds foreign key to Course
        //should i be using the attribute name of the foreign key in dept?
        department_id: {
        models.Course.belongsTo(Department, {foreignKey: 'id', targetKey: 'department_id'});
    }

    return Course;

}