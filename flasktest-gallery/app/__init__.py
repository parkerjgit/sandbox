from flask import Flask
from app.api import api_bp
from app.client import client_bp

app = Flask(__name__)

app.register_blueprint(api_app)
app.register_blueprint(client_app)

# @app.route('/')
# def home():
# 	return 'welcome home!'