loginUser("pramod@example.com", "password123", function (loginError, user) {

    if (loginError) {
        console.log("Login failed:", loginError);
        return;
    }

    console.log("User logged in:", user.id);

    getUserProfile(user.id, function (profileError, profile) {

        if (profileError) {
            console.log("Failed to get profile:", profileError);
            return;
        }

        console.log("Profile received");

        getUserOrders(user.id, function (ordersError, orders) {

            if (ordersError) {
                console.log("Failed to get orders:", ordersError);
                return;
            }

            console.log("Orders received");

            getOrderDetails(orders[0].id, function (orderError, order) {

                if (orderError) {
                    console.log("Failed to get order:", orderError);
                    return;
                }

                console.log("Order details received");

                getPaymentDetails(order.paymentId, function (paymentError, payment) {

                    if (paymentError) {
                        console.log("Failed to get payment:", paymentError);
                        return;
                    }

                    console.log("Payment details received");

                    getShippingDetails(order.shippingId, function (shippingError, shipping) {

                        if (shippingError) {
                            console.log("Failed to get shipping:", shippingError);
                            return;
                        }

                        console.log("Shipping details received");

                        getProductDetails(order.productId, function (productError, product) {

                            if (productError) {
                                console.log("Failed to get product:", productError);
                                return;
                            }

                            console.log("Product details received");

                            sendConfirmationEmail(
                                user.email,
                                order,
                                payment,
                                shipping,
                                product,
                                function (emailError, emailResult) {

                                    if (emailError) {
                                        console.log(
                                            "Failed to send email:",
                                            emailError
                                        );
                                        return;
                                    }

                                    console.log("Confirmation email sent");

                                    updateNotificationStatus(
                                        user.id,
                                        function (notificationError, result) {

                                            if (notificationError) {
                                                console.log(
                                                    "Failed to update notification:",
                                                    notificationError
                                                );
                                                return;
                                            }

                                            console.log(
                                                "Notification status updated"
                                            );

                                            generateReport(
                                                user,
                                                profile,
                                                order,
                                                payment,
                                                shipping,
                                                product,
                                                function (reportError, report) {

                                                    if (reportError) {
                                                        console.log(
                                                            "Failed to generate report:",
                                                            reportError
                                                        );
                                                        return;
                                                    }

                                                    console.log(
                                                        "Everything completed!"
                                                    );

                                                    console.log(report);
                                                }
                                            );
                                        }
                                    );
                                }
                            );
                        });
                    });
                });
            });
        });
    });
});