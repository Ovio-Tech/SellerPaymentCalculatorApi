exports.feeCalculator = (req, res, next) => {
    const cartPrice = + req.query.cartPrice;
    var fixedFee = 20;
    var deliveryCharge = 35;
    var razorPayfee = cartPrice * 0.02;
    var commissionFee = cartPrice * 0.03;
    var totalRevenue = fixedFee + deliveryCharge + razorPayfee + commissionFee;
    var gst = totalRevenue * 0.18;
    var totalCharge = totalRevenue + gst;
    var paymentToSeller = cartPrice - totalCharge;

    res.status(200).json({
        cartPrice: cartPrice,
        deliveryCharge: deliveryCharge,
        OnlinePaymentCharge: razorPayfee,
        paymentToSeller: paymentToSeller,
        "message": "Success"
    });
}