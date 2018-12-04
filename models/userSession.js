module.exports = (sequelize, DataTypes) => {
    const UserSession = sequelize.define('userSession');

    UserSession.associate = (models) => {
        models.UserSession.belongsTo(models.Session);
        models.UserSession.belongsTo(models.User);
    }
    
    return UserSession;
}

