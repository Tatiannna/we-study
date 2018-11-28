module.exports = (sequelize, DataTypes) => {
    const UserSessions = sequelize.define('usersessions');

    UserSessions.associate = (models) => {
        models.UserSessions.belongsTo(models.Session);
        models.UserSessions.belongsTo(models.User);
    }
    
    return UserSessions;
}
