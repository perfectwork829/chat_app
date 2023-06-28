import { io } from 'socket.io-client';

const isDev = process.env.NODE_ENV === 'development';

const socket = io(isDev ? 'ws://chapapp11111178.onrender.com' : '/');
export default socket;
