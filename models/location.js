
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
    building_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    room_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [2, 14],
      },
    },
  });

  return Location;
}