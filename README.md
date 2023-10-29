# mono-repo
crud operation on csv formatter file

# Web Portal for CSV CRUD Operations
Overview
This web portal is designed to facilitate CRUD (Create, Read, Update, Delete) operations on a CSV-formatted file stored in the backend server's local storage.
It allows users to interact with the data in the CSV file, whether for viewing, updating, or adding new records.

# Features
Create: Add new records to the CSV file.
Read: View the content of the CSV file.
Update: add nw record within existing CSV file.
Delete: delete the CSV file. 

# Prerequisites
Before running this portal, ensure you have the following prerequisites installed:

Node.js: You can download it from nodejs.org.
NPM (Node Package Manager): Typically comes with Node.js.

# Installation
Clone this repository to your local machine: 
git clone https://github.com/sakshigargg/mono-repo.git

Navigate to the project directory:
cd mono-repo/backend

Install the project dependencies:
npm install

# Usage
Start the backend server to serve the portal:
npm start

Access the portal in your web browser:

URL: http://localhost:3000 

backend/: Contains the backend Node.js server code.
API Endpoints
POST /api/fileData: Upload a CSV file.
GET /api/fileData: Retrieve the content of the CSV file.
PUT /api/fileData: Update the CSV file.
DELETE /api/fileData: Delete the CSV file.

#CSV File Format
The portal expects the CSV file to have a specific format. Ensure that your CSV file meets these criteria:

It should include at least 5 columns.
The first row should contain column headers.
Data should be separated by commas (,).
Contributing
If you'd like to contribute to this project, please follow the contribution guidelines.

License
This project is licensed under the MIT License.

Contact
If you have any questions or need assistance, feel free to contact us at your-email@example.com.

