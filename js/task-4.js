const country = "Australia";
function getShippingCost(country) {
    switch (country) {
        case "Australia":
            console.log("Shipping to Australia will cost 170 credits")
            break;
        case "Germany":
            console.log("Sorry, there is no delivery to your country")
            break;
        case "China":
            console.log("Shipping to China will cost 100 credits")
            break;
        case "Chile":
            console.log("Shipping to Chile will cost 250 credits")
            break;
        case "Jamaica":
            console.log("Shipping to Jamaica will cost 120 credits")
            break;
        case "Sweden":
            console.log("Sorry, there is no delivery to your country")
            break;
        default:
            console.log("We cant do delivery in your country")
    }
}
getShippingCost()
