 
const promise = createOrder(cart);
promise.then(function(orderId) {
    return proceedToPayment(orderId);
})

.then(function(paymentInfo) {
    console.log(paymentInfo);
})
.catch(function(err) {
      console.log("Error:", err);
  });
