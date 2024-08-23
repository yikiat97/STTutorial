protocol - rules both side agree when communicating

// how communication works in client server model //
browser <-- socket --> web server (information format: HTTP, FTP, SMTP all these are protocol, These are called "TCP") 
TCP - spilt the information into packet and sent one by one like stream, onde has this abiliy
port - compuuter receive a packet and know what program to send to
MiMe type: standard for specifying the type of data being sent: application/json, text/html, image/jpeg
API - a set of tools for building software application, a set of urls which accpet and send only data via http & TCP/IP

node package can change dependencies auto version update from moment: "^2.10.6" --> "~2.10.6"(more strict on updates, can only update last digi) 

npm install <name> --save , need it to run
npm install <name> --save -dev, this will save it in devDependencies telling node this dun be use production so dun go up server
npm install -g nodemon , this will allow globel node from anywhere to access and use it
npm update , to update the version
nodemon - can use in cmd line, help to start server and watch changes and refresh, nodemon app.js