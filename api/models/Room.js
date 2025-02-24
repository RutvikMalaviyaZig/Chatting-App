"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Message = require('./Message');
const RoomUser = require('./RoomUser');
const User = require('./User')

const Room = sequelize.define(
  "Room",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    modelName: "Room",
    timestamps: true,
  }
);

Room.hasMany(Message, { foreignKey: "roomId" });

Room.belongsToMany(User, { through: RoomUser, foreignKey: "roomId" });
User.belongsToMany(Room, { through: RoomUser, foreignKey: "userId" });

module.exports = Room;
