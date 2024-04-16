const os = require('os')

function osInfo() {
    console.log("Name: " + os.arch());
    console.log("Type: " + os.type());
    console.log("Version: " + os.version())
    console.log("Architecture: " + os.arch());
    console.log("CPUs: " + os.cpus().length);

    const totalMem = Math.round(os.totalmem() * 1e-6);
    console.log("Memoria Total: " + totalMem + " MB");
    const freeMem = Math.round(os.freemem() * 1e-6);
    console.log("Memoria libre: " + freeMem + " MB");
}


osInfo()

module.exports = {osInfo}