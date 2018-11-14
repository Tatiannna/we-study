module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('department', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     unique: true,
        // },
        name: {
            type: DataTypes.ENUM,
            values: ['CSCI', 'ENG', 'CHEM', 'BIOL', 'MATH', 'CHIN']
        },
    });

    Department.associate = (models) => {
        models.Department.hasMany(models.Course);
    }

    return Department;
}