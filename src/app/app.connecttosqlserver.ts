  var Connection = require('tedious').Connection;  
    var config = {  
        //userName: 'yourusername',  
        //password: 'yourpassword',  
        domain: 'ihc.co.nz',
        //server: 'yourserver.database.windows.net',  
        server: 'dmsql003-001.ihcdev.co.nz.billing'          
        // If you are on Microsoft Azure, you need this:  
        //options: {encrypt: true, database: 'AdventureWorks'}  
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
        console.log("Connected");  
    });  