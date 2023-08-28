"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stripe_1 = __importDefault(require("stripe"));
const router = express_1.default.Router();
const stripeKey = process.env.STRIPE_SECRET_TEST_KEY;
const stripe = new stripe_1.default(stripeKey);
router.post("/payment", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { amount, id } = req.body
    try {
        const paymentIntent = yield stripe.paymentIntents.create({
            currency: "eur",
            amount: 1999,
            automatic_payment_methods: {
                enabled: true
            }
            // description: "Cricket Bat",
            // payment_method: id,
            // confirm: true
        });
        console.log("Payment", paymentIntent);
        res.send({ clientSecret: paymentIntent.client_secret });
        // res.json({
        //     message: "Payment Successful",
        //     success: true
        // })
    }
    catch (error) {
        console.log("Error", error);
        res.json({
            message: "Payment Failed",
            success: false
        });
    }
}));
exports.default = router;
