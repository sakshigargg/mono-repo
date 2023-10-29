const fileServices = require("../services/fileServices");
const fs = require('fs');

class FileController {
    async addFile(req, res) {
        try {
            const data = req.file;
            if (!data) {
                console.log("Please upload csv format file");
                return res.status(403).json({
                    status: 403,
                    isSucess: false,
                    message: "Please upload csv format file"
                })
            }
            let csvData = await fileServices.readCSVFile(data.filename);
            if (csvData.length < 2) {
                console.log("Please upload csv file with atleast one entry");
                let rootDirectory = __dirname.split('/controllers')[0];
                const csvFilePath = rootDirectory + "/" + data.path
                fs.unlink(csvFilePath, function () { });
                return res.status(403).json({
                    status: 403,
                    isSucess: false,
                    message: "Please upload csv format file with atleast one entry"
                })
            }
            if (Object.keys(csvData[0]).length < 5) {
                console.log("Please upload csv file which have atleast five column");

                let rootDirectory = __dirname.split('/controllers')[0];
                const csvFilePath = rootDirectory + "/" + data.path
                fs.unlink(csvFilePath, function () { });
                return res.status(403).json({
                    status: 403,
                    isSucess: false,
                    message: "Please upload csv format file which have atleast five column"
                })
            }
            return res.status(200).json({
                status: 200,
                isSucess: true,
                message: "Successfully upload csv file",
                data: { filename: data.filename }
            })

        }
        catch (err) {
            console.log(err);
            return res.status(500).json({
                status: 500,
                isSucess: false,
                message: "Something went wrong at server end"
            })
        }
    }

    async getFileData(req, res) {
        try {
            const { fileName } = req.query;
            if (!fileName) {
                console.log("fileName is mendatory field, please enter the same");
                return res.status(403).json({
                    status: 403,
                    isSucess: false,
                    message: "fileName is mendatory field, please enter the same"
                })
            }
            let rootDirectory = __dirname.split('/controllers')[0];
            const csvFilePath = rootDirectory + "/" + "uploads/" + fileName
            if (fs.existsSync(csvFilePath)) {
                let csvData = await fileServices.readCSVFile(data.filename);
                return res.status(200).json({
                    status: 200,
                    isSucess: true,
                    message: "Successfully get csv file data",
                    data: csvData
                })
            }
            else {
                return res.status(404).json({
                    status: 404,
                    isSucess: false,
                    message: "File not found"
                });
            }
        }
        catch (err) {
            console.log(err.message);
            return res.status(500).json({
                status: 500,
                isSucess: false,
                message: "Something went wrong at server end"
            })
        }
    }

    async updateFileData(req, res) {
        try {
            const { fileName, editList } = req.query;
            if (!fileName) {
                console.log("fileName is mendatory field, please enter the same");
                return res.status(403).json({
                    status: 403,
                    isSucess: false,
                    message: "fileName is mendatory field, please enter the same"
                })
            }
            if (!editList) {
                console.log("editList is mendatory field, please enter the same");
                return res.status(403).json({
                    status: 403,
                    isSucess: false,
                    message: "editList is mendatory field, please enter the same"
                })
            }
            let rootDirectory = __dirname.split('/controllers')[0];
            const csvFilePath = rootDirectory + "/" + "uploads/" + fileName
            if (fs.existsSync(csvFilePath)) {
                let csvData = await fileServices.readCSVFile(data.filename);
                if (Object.keys(csvData[0]).length > editList.split(",").length) {
                    return res.status(403).json({
                        status: 403,
                        isSucess: false,
                        message: "Invalid editList, length does nt match with column"
                    })
                }
                const existingData = await new Promise((resolve, reject) => {
                    fs.readFile(csvFilePath, 'utf-8', (err, data) => {
                        if (err)
                            reject(err)
                        resolve(data)

                    });
                })

                const updatedCsvData = existingData + '\n' + editList;

                fs.writeFile(csvFilePath, updatedCsvData, 'utf-8', (err) => {
                    throw err(err.message);
                });

                return res.status(200).json({
                    status: 200,
                    isSucess: true,
                    message: "CSV file updated successfully",
                    data: fileName
                })
            }
            else {
                return res.status(404).json({
                    status: 404,
                    isSucess: false,
                    message: "File not found"
                });
            }
        }
        catch (err) {
            console.log(err.message);
            return res.status(500).json({
                status: 500,
                isSucess: false,
                message: "Something went wrong at server end"
            })
        }
    }

    async deleteFile(req, res) {
        try {
            const { fileName } = req.query;
            if (!fileName) {
                console.log("fileName is mendatory field, please enter the same");
                return res.status(403).json({
                    status: 403,
                    isSucess: false,
                    message: "fileName is mendatory field, please enter the same"
                })
            }
            let rootDirectory = __dirname.split('/controllers')[0];
            const csvFilePath = rootDirectory + "/" + "uploads/" + fileName
            if (fs.existsSync(csvFilePath)) {
                fs.unlink(csvFilePath, function () { });
                return res.status(200).json({
                    status: 200,
                    isSucess: true,
                    message: "Successfully delete csv file",
                    data: csvData
                })
            }
            else {
                return res.status(404).json({
                    status: 404,
                    isSucess: false,
                    message: "File not found"
                });
            }
        }
        catch (err) {
            console.log(err.message);
            return res.status(500).json({
                status: 500,
                isSucess: false,
                message: "Something went wrong at server end"
            })
        }
    }

}

module.exports = new FileController();