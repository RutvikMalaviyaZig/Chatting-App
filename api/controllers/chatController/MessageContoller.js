const HTTP_STATUS_CODE = require("../../utils/HttpStatusCodes");
const Messages = require("../../utils/Messages");

const Room = require("../../models/Room");
const Message = require("../../models/Message");

const  express  = require("../../utils/Constants");
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);

module.exports = {
  sendMessage: async (req, res) => {
    try {
      const { description, roomId } = req.body;

      const findRoom = await Room.findOne({ where: { id: roomId } });
      if (!findRoom) {
        res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
          status: HTTP_STATUS_CODE.BAD_REQUEST,
          message: Messages.ROOM_NOT_FOUND,
          data: "",
          error: "",
        });
      }

      const createmsg = await Message.create({ description });

      io.sockets.in(roomId).emit('message',description);

      res.status(HTTP_STATUS_CODE.CREATED).json({
        status: HTTP_STATUS_CODE.CREATED,
        message: Messages.MESSAGES_CREATED,
        data: createmsg,
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

  isRead: async (req, res) => {
    try {
      const { id } = req.body;

      const findMsg = await Message.findOne({ where: { id } });

      if (!findMsg) {
        res.status(HTTP_STATUS_CODE.NOT_FOUND).json({
          status: HTTP_STATUS_CODE.NOT_FOUND,
          message: Messages.MESSAGE_NOT_FOUND,
          data: "",
          error: "",
        });
      }

      findMsg.set({
        isRead : true,
      });

      await findMsg.save()

    } catch (error) {
      res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
        status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
        errorCode: "",
        message: "",
        error: error.message,
      });
    }
  },
};
