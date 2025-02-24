const HTTP_STATUS_CODE = require("../../utils/HttpStatusCodes");
const Messages = require("../../utils/Messages");

const Room = require("../../models/Room");

module.exports = {

    
  createRoom: async (req, res) => {
    try {
      const { name } = req.body;

      const room = await Room.create({ name });

      res.status(HTTP_STATUS_CODE.CREATED).json({
        status: HTTP_STATUS_CODE.CREATED,
        errorCode: "",
        message: Messages.ROOM_CREATED,
        error: "",
      });
    } catch (error) {
      res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
        status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
        errorCode: "",
        message: "",
        error: error.message,
      });
    }
  },

  joinRoom: async (req, res) => {
    try {
      const { roomId, userId } = req.body;

      const findRoom = await Room.findOne({ where: { id: roomId } });

      if (!findRoom) {
        res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
          status: HTTP_STATUS_CODE.BAD_REQUEST,
          message: Messages.ROOM_NOT_FOUND,
          data: "",
          error: "",
        });
      }
     
    } catch (error) {
      res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
        status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
        errorCode: "",
        message: "",
        error: error.message,
      });
    }
  },


  leaveRoom : async (req,res) => {
    try {
        const { roomId } = req.body;

        const findRoom = await Room.findOne({ where: { id: roomId } });

      if (!findRoom) {
        res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
          status: HTTP_STATUS_CODE.BAD_REQUEST,
          message: Messages.ROOM_NOT_FOUND,
          data: "",
          error: "",
        });
      }

    } catch (error) {
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
            status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
            errorCode: "",
            message: "",
            error: error.message,
          });
    }
  }
};
