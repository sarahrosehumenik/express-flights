
const flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
}

function index(req, res) {
    flight.find({}, function(err, flights) {

        res.render('flights', {flights})
    })
}
function newFlight(req, res) {
    res.render('flights/new')
}
function create(req, res) {


  // remove any whitespace at start and end of cast
  
  // split cast into an array if it's not an empty string - using a regular expression as a separator
  
  const flight = new Flight(req.body);
  flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render('flight/new');
    console.log(flight);
    // for now, redirect right back to new.ejs
    res.redirect('/flights/new');
  });
}