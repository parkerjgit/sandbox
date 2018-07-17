from flask import Blueprint, render_template
from flask_restful import Api
from app.api.resources import Quotes, Project, Projects

api_app = Blueprint('api_app', __name__,
					# template_folder='templates',
					url_prefix='/api')

api = Api(api_app)

@api_app.route('/')
def api():
	# return render_template('api.html')
	return 'welcome to the api app!'

api.add_resource(Quotes, '/quote')
api.add_resource(Project, '/project/<int:id>')
api.add_resource(Projects, '/projects')
