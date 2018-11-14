module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('department', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique: true,
        },
        name: {
            type: DataTypes.ENUM,
            values: ['CSCI', 'ENG', 'CHEM', 'BIOL', 'MATH', 'CHIN']
        },
    });

    Department.associate = (models) => {
        models.Department.hasMany(models.Course, {foreignKey: 'id', sourceKey: 'id'});
        return Department;
    }
}