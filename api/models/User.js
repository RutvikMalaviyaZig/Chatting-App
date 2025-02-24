"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
// const RoomUser = require("./RoomUser");
const Room = require("./Room");

const User = sequelize.define(
  "User",
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
      validate: {
        notNull: { msg: "Name is required" },
        notEmpty: { msg: "Name is required" },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: { msg: "Email is required" },
        notEmpty: { msg: "Email is required" },
        isEmail: { msg: "Invalid email" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
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
    modelName: "User",
    timestamps: true,
  }
);


User.hasMany(Room, {
  foreignKey : "senderId",
})
Room.belongsTo(User, {
  foreignKey: "senderId"
})

module.exports = User;
