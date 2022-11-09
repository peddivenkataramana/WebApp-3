var Umbrella = require('../models/umbrella'); 
// List of all Costumes 
exports.umbrella_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Umbrella list'); 
}; 
 
// for a specific Costume. 
exports.umbrella_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Umbrella detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.umbrella_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Umbrella create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.umbrella_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Umbrella delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.umbrella_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Umbrella update PUT' + req.params.id); 
}; 

// List of all Costumes 
exports.umbrella_list = async function(req, res) { 
    try{ 
        theUmbrella = await Umbrella.find(); 
        res.send(theUmbrella); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 