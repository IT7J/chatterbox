import os
import requests

from flask import Flask, jsonify, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)



channel_list = ["General"]

n=1;

something = "soeifjsoiefj"

@app.route("/")
def index():
    global channel_list
    global something
    global n
    return render_template("channels.html", channel_list=channel_list, something=something, n=n)




@socketio.on("submitname")
def vote1(data1):

    global n
    global something
    global channel_list

    name = data1["name"]
    name1 = {"name": name}

    n+=1

    channel_list.append(name)

    emit("channel list", name1, broadcast=True)


@socketio.on("submitmessage")
def vote2(data2):

    message = data2["message"]
    messagedictionary = {"message": message}


    emit("message list", messagedictionary, broadcast=True)



