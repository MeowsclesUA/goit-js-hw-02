function formatMessage(message, maxLength) {
    const message = "Curabitur ligula sapien";
    const maxLength = 16;
    if (message <= maxLength) {
        console.log("Curabitur ligula sapien");
    }
    else if (message > maxLength) {
        console.log(`${message.maxLength}...`)
    }
}
formatMessage()
 // "Curabitur ligula..."
 // console.log(formatMessage("Curabitur ligula sapien", 23));"Curabitur ligula sapien"
 // console.log(formatMessage("Vestibulum facilisis purus nec", 20));"Vestibulum facilisis..."
//console.log(formatMessage("Vestibulum facilisis purus nec", 30));  "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); "Nunc sed turpis..."
//console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));  "Nunc sed turpis a felis in nunc fringilla"
