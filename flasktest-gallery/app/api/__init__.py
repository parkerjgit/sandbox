from flask import Blueprint

api_app = Blueprint('api_app', __name__,
                   # template_folder='templates',
                   url_prefix='/api')

@api_app.route('/')
def api():
	return 'welcome to the api!'
    # return render_template('api.html', msg='API Blueprint View')

from flask_restful import Resource, Api

api = Api(api_app)

# put this test resource here for now
class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/one')