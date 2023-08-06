# DevGossip App
This is a console application that allows software developers from different tech companies or tech spaces to converge and share anything, gists such as gossip about, bosses and their collegues, pop cultures, even their personal lives and relationships. This will be a realtime chat application for casual discussions.

There are 8 functions in the main python file that makes the functionality of this app.

1. homepage:
2. signup:
3. verify_username: 
4. login:
5. select_chatroom:
6. connection_manager:
7. server_response:
8. get_userinput:

# Requirements
1. python 3.x
2. pip

# Prerequisites
1. Set up pusher:
if you dont already have a pusher account, create a free account at https//:pusher.com/signup.
login to your account dashboard and create an app. save your app credentials (app_id, app_key, app_secret and app_cluster)
2. install virtualenv package. this is to help manage environments. To avoid conflitcting libries among different projects due to installations.
pip install virtualenv in terminal


# Set Up
1. Create a virtual enviroment for project
2. Clone the project repository into a folder on your computer.
3. cd into the project folder.
4. install update version of pysher from the github link
	pip install git+https://github.com/nlsdfnbch/Pysher.git
5. install requirements.txt
	pip install requirements.txt
6. Head to the project and fill in your pusher app creadentials into the .env file:
PUSHER_APP_ID = XXX_APP_ID
PUSHER_APP_KEY = XXX_APP_KEY
PUSHER_APP_SECRET = XXX_APP_SECRET
PUSHER_APP_CLUSTER = XXX_APP_CLUSTER

# Run the app
run python main.py in commandline/terminal