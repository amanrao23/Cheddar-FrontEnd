import openSocket from 'socket.io-client';
const ENDPOINT = "http://localhost:5000";

const socket = openSocket(ENDPOINT, { transports: ["websocket", "polling"] });

export default socket;