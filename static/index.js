document.addEventListener('DOMContentLoaded', () => {



    // Connect to websocket
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);

    var channel_list = document.querySelector('#mydata').innerHTML;
    document.querySelector('#mydata').hidden = true;
    var something = document.querySelector('#mydata1').innerHTML;
    document.querySelector('#mydata1').hidden = true;





var z = 0;


var channel_list1 = new Array(channel_list);

//document.querySelector('#displayb').innerHTML = channel_list1;

var message_list = ["Message"];


    // When connected, configure buttons
    socket.on('connect', () => {



         document.querySelector('#submit').disabled = true;

                    document.querySelector('#name1').onkeyup = () => {
                    if (document.querySelector('#name1').value.length > 0)
                        document.querySelector('#submit').disabled = false;
                    else
                        document.querySelector('#submit').disabled = true;
                };

                  document.querySelector('#form').onsubmit = () => {


                       var name = document.querySelector('#name1').value;

                      //var i;
                     // var b;

                       // b=0;

                       // var n = document.querySelector('#mydata2').innerHTML;
                       // console.log(n, "n");



                        /*for (i = 0; i < n; i++) {
                        if(name === channel_list[i]){
                            b++;
                        }
                        }*/
                        localStorage.setItem("name", name);

                        document.querySelector('#channelname').innerHTML = localStorage.getItem("name");

        console.log(channel_list, "jj;l;ij;oih");

                   //if(b === 0){
   socket.emit('submitname', {'name': name});
                  //}
                   // else{
                      //  alert('The name exists already');
                  //  }


                       //  document.querySelector('#displayb').innerHTML = passdata.something;

                       document.querySelector('#name1').value = '';
                    document.querySelector('#submit').disabled = true;

                      return false;
                  };




                    document.querySelector('#submit1').disabled = true;

                    document.querySelector('#message').onkeyup = () => {
                    if (document.querySelector('#message').value.length > 0)
                        document.querySelector('#submit1').disabled = false;
                    else
                        document.querySelector('#submit1').disabled = true;
                };




                  document.querySelector('#form1').onsubmit = () => {

                    var message = document.querySelector('#message').value;

                    message_list.push(message);

                     console.log(message_list, "jj;l;ij;oih");

                       socket.emit('submitmessage', {'message': message});

                   localStorage.setItem("messagelist", JSON.stringify(message_list));

                    //z++;



                   /* var i;
                    for(i=0; i<z; i++){
                    const li = document.createElement('li');
                    li.innerHTML = qw1[0];
                    document.querySelector('#messages').append(li);
                    console.log(z, "z");
                    console.log(qw1[0], "qw1");
                    }*/

                    //var message_list, text, fLen, i;



                       //  document.querySelector('#displayb').innerHTML = passdata.something;

                       document.querySelector('#message').value = '';
                    document.querySelector('#submit1').disabled = true;

                      return false;
                  };

           /*    var retrievedData = localStorage.getItem("messagelist");
                  //var qw1 = new Array(qw);
                var qw = JSON.parse(retrievedData);
                console.log(typeof qw, qw, "type of qw");

                   var fLen, i, text;

                fLen = qw.length;
                text = "<ul>";
                for (i = 0; i < fLen; i++) {
                 text += "<li>" + qw[i] + "</li>";
                }
                text += "</ul>";
                document.getElementById("messages").innerHTML = text;*/


    });



    // When a new vote is announced, increase the count
     socket.on('channel list', data1 => {
          const li = document.createElement('li');
                    li.innerHTML = data1.name;
                    document.querySelector('#tasks').append(li);
                   // n++;
                    //channel_list.append(data1.name);

    });
     socket.on('message list', data2 => {
          const li = document.createElement('li');
                    li.innerHTML = data2.message;
                    document.querySelector('#messages').append(li);
        const li1 = document.createElement('li');
                    li1.innerHTML = localStorage.getItem("name");
                    document.querySelector('#channelm').append(li1);

    });

});


