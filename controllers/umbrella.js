var Umbrella = require('../models/umbrella'); 
// List of all Costumes 
exports.umbrella_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Umbrella list'); 
}; 
 
// for a specific Costume. 
exports.umbrella_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Umbrella.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
        theUmbrellas = await Umbrella.find(); 
        res.send(theUmbrellas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 



// VIEWS 
// Handle a show all view 
exports.umbrella_view_all_Page = async function(req, res) { 
    try{ 
        theUmbrellas = await Umbrella.find(); 
        res.render('umbrella', { title: 'Umbrella Search Results', results: theUmbrellas }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume create on POST. 
exports.umbrella_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Umbrella(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.color = req.body.color; 
    document.cost = req.body.cost; 
    document.hieght = req.body.hieght; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume update form on PUT. 
exports.umbrella_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Umbrella.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.color)  
               toUpdate.color = req.body.color; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.height) toUpdate.height = req.body.height5; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle Costume delete on DELETE. 
exports.umbrella_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Umbrella.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

 // Handle a show one view with id specified by query 
 exports.umbrella_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Umbrella.findById( req.query.id) 
        res.render('umbrelladetail',  
{ title: 'Umbrella Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
  
 // Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.umbrella_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('umbrellacreate', { title: 'Umbrella Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a costume. 
// query provides the id 
exports.umbrella_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Umbrella.findById(req.query.id) 
        res.render('umbrellaupdate', { title: 'Umbrella Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.umbrella_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Umbrella.findById(req.query.id) 
        res.render('umbrelladelete', { title: 'Umbrella Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 