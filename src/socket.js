import { io } from "socket.io-client";

const socket = io("http://3.140.110.186:3000", {
  transports: ["websocket"]
});

export default socket;
