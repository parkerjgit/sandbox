from flask import Blueprint, render_template

client_app = Blueprint('client_app', __name__,
                        url_prefix='',
                        # static_url_path='/dist',
                        # static_folder='./app/dist',
                        # template_folder='./app/',
                        )

@client_app.route('/')
def index():
    # return render_template('index.html')
    return 'welcome to the client app!'