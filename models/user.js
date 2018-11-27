const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
        notContains: 'password',
      },
    },
    
    password_hash: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      },
    },
  });
  
  // User.associate = (models) => {
  //   models.User.hasMany(models.Session)
  // }
  
  User.beforeCreate((user) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      user.password_hash = hashedPw;
    })
  );

  // User.create({
  //   first_name: 'Tatianna', 
  //   last_name: 'Robinson', 
  //   email: 'email1@email.com', 
  //   password_hash: 'ctpuser'})
  //   .then(user => {
  //     console.log(user.get({plain: true}))
  // })

  return User;
}