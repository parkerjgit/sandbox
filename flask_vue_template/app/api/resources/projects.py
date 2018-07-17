from flask import request
from flask_restful import Resource

# projects = [
#   {
#     'id': 34587934,
#     'name': 'My Project',
#     ---tbd:
#     'factsheet': ...,
#     'credits': ...,
#     'colaborators': ...
#   }
# ]
projects = []

class Projects(Resource):

	# get  /projects

	def get(self):
		return {'projects': projects}

class Project(Resource):

	# get  /project/<id>
	# post /project/<id>
	# put  /project/<id>
	# del  /project/<id>

	def get(self, id):

		project = next(filter(lambda x: x['id'] == id, projects), None)
		return {'project': None}, 200 if project else 404

	def post(self, id):

		# if id already exists
		if next(filter(lambda x: x['id'] == id, projects), None):
			# bad request
			return {'msg': 'project with id {} already exists'.format(id)}, 400

		data = request.get_json()
		project = {
			'id': id,
			'name': data['name']
		}
		projects.append(project)
		return {'project': project}, 201

	def delete(self, id):

		global projects		
		projects = list(filter(lambda x: x['id'] != id, projects))
		return {'msg':'project deleted'}

	def put(self, id):
	
		project = next(filter(lambda x: x['id'] == id, projects), None)

		data = request.get_json()
		if project is None:
			project = {
				'id': id,
				'name': data['name']
			}
			projects.append(project)
		else:
			project.update(data)

		return {'project': project}

# tasks = [
#   {
#     'id': 93872390,
#     'name': 'Some Task',
#     'parent_projects': [...]
#     ---
#     'published_on': ...,
#     'modified_on': ...,
#     'privacy': 'public',
#     'tags': ['big', 'brown', 'bear'],
#     'thumbs': [...]
#   }
# ]

tasks = []

class Tasks(Resource):

	# get  /tasks

	def get(self):
		return {'tasks': tasks}

class Task(Resource):

	# get  /task/<id>
	# post /task/<id>
	# put  /task/<id>
	# del  /task/<id>

	def get(self, id):
		pass

	def post(self, id):
		pass

	def put(self, id):
		pass

	def delete(self, id):
		pass

# images = [
#   {
#     'id': 94837562
#     'parent_tasks': [...]
#     'caption': 'Here is a caption'
#   }
# ]

# get  /images
# get  /images/<task_id>

# get  /image/<id>
# post /image/<id>
# put  /image/<id>
# del  /image/<id>