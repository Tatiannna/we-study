module.exports = (sequelize, DataTypes) => {
    
    const Session = sequelize.define('session', {
        date: {
            type: DataTypes.DATE,
        },
        cap: {
            type: DataTypes.INTEGER,
        },
        start_time: {
            type: DataTypes.TIME,
        },
        description: {
            type: DataTypes.STRING,
        }
    });

    Session.associate = (models) => {
        models.Session.belongsTo(models.User, {as: 'creator'});
        models.Session.belongsTo(models.Course);
        models.Session.belongsTo(models.Location);
    }
    
    return Session;
}