from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


# @app.route('/')
# def hello_world():
# 	return 'Hello'

from app.api import api_app
from app.client import client_app

app.register_blueprint(api_app)
app.register_blueprint(client_app)