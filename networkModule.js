const os = require('os');

function networkInfo() {

    console.log("Family: " + Object.entries(os.networkInterfaces())[0][1][0].family);
    console.log("Address: " + Object.entries(os.networkInterfaces())[0][1][0].address);
    console.log("Internal: " + Object.entries(os.networkInterfaces())[0][1][0].internal);

    console.log("Family: " + Object.entries(os.networkInterfaces())[0][1][1].family);
    console.log("Address: " + Object.entries(os.networkInterfaces())[0][1][1].address);
    console.log("Internal: " + Object.entries(os.networkInterfaces())[0][1][1].internal);

    console.log("Family: " + Object.entries(os.networkInterfaces())[1][1][0].family);
    console.log("Address: " + Object.entries(os.networkInterfaces())[1][1][0].address);
    console.log("Internal: " + Object.entries(os.networkInterfaces())[1][1][0].internal);

    console.log("Family: " + Object.entries(os.networkInterfaces())[1][1][1].family);
    console.log("Address: " + Object.entries(os.networkInterfaces())[1][1][1].address);
    console.log("Internal: " + Object.entries(os.networkInterfaces())[1][1][1].internal);

}

networkInfo()


module.exports = {networkInfo}