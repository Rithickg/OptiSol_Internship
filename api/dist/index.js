"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const jwtUtils_1 = require("./utils/jwtUtils");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const mongo_url = process.env.MONGO_URL;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose_1.default.connect(mongo_url, options)
    .then(() => {
    console.log('Connected to the database');
})
    .catch((error) => {
    console.error('Error connecting to the database:', error);
});
const port = process.env.PORT;
app.use(jwtUtils_1.verifyToken);
app.use('/api', user_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
