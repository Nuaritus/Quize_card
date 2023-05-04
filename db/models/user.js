"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.TEXT,
      },
      score1: {
        type: DataTypes.INTEGER,
      },
      score2: {
        type: DataTypes.INTEGER,
      },
      score3: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
