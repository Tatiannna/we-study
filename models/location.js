
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    building_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    room_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [2, 14],
      },
    description: {
      type: DataTypes.String,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [10, 80],
      },
    },
    },
  });

  return Location;
}