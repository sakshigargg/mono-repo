const csv = require('csvtojson');

class fileService {

    async readCSVFile(fileName) {
        try {
            let rootDirectory = __dirname.split('/services')[0];
            const csvFilePath = rootDirectory + "/" + "uploads/" + fileName
            const array = await csv().fromFile(csvFilePath);
            return array;
        }
        catch (err) {
            console.log("here")
            return new Error(err.message);
        }
    }
}

module.exports = new fileService();