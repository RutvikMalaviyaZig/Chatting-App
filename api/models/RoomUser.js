"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const RoomUser = sequelize.define(
  "RoomUser",
  {
    roomId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Room",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    modelName: "RoomUser",
    timestamps: false,
  }
);

module.exports = RoomUser;
