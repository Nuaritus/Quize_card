"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      this.belongsTo(Topic, { foreignKey: "idTopic" });
    }
  }
  QA.init(
    {
      question: {
        type: DataTypes.TEXT,
      },
      answ1: {
        type: DataTypes.TEXT,
      },
      answ2: {
        type: DataTypes.TEXT,
      },
      answ3: {
        type: DataTypes.TEXT,
      },
      answ4: {
        type: DataTypes.TEXT,
      },
      correctAnsw: {
        type: DataTypes.TEXT,
      },
      idTopic: {
        type: DataTypes.INTEGER,
        references: {
          model: "Topics",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "QA",
    }
  );
  return QA;
};
