"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/database");


const Message = sequelize.define(
  "Message",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, 
    },
   
    description:{
        type: DataTypes.STRING
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


module.exportsMessage;
