
console.log("index.js");

// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')



client.on('message', function (topic, message) {
  console.log('connected')

 $('table tbody').append('<tr><td>'+topic +'</td><td>' +message+'</td><tr>')

})
var pub_payload = document.getElementById('pubPayload');
var sub_button = document.getElementById('subButton');
var sub_topic = document.getElementById('subTopic');
var pub_button = document.getElementById('pubButton');
var pub_topic = document.getElementById('pubTopic');
pub_button.addEventListener('click', () => {
  if(sub_topic.value==pub_topic.value){
    client.publish(pub_topic.value,pub_payload.value)
  }

})

sub_button.addEventListener('click', () => {
  if(sub_topic.value==pub_topic.value){
client.subscribe(sub_topic.value)
  }
  })