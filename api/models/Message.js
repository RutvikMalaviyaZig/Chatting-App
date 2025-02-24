"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Room = require('./Room');
const User = require('./User');

const Message = sequelize.define(
  "Message",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, 
    },
    description: {
      type: DataTypes.TEXT,
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
    roomId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Room",
        key: "id",
      },
    },
    isRead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    fileUrl: {
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
  },
  {
    freezeTableName: true,
    modelName: "Message",
    timestamps: true,
  }
);



module.exports = Message;
