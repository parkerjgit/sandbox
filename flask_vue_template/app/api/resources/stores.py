from flask_restful import Resource

stores = [
	{
  	'name': 'My Store',
  	'items': [
  		{
  			'name':'myitem', 
  			'price': 15.99 
  		}
  	]
	}
]

# #post /store data: {name :}
# @api_app.route('/store' , methods=['POST'])
# def create_store():
#   request_data = request.get_json()
#   new_store = {
#     'name':request_data['name'],
#     'items':[]
#   }
#   stores.append(new_store)
#   return jsonify(new_store)

# #get /store/<string:name>
# @api_app.route('/store/<string:name>')
# def get_store(name):
#   for store in stores:
#     if store['name'] == name:
#           return jsonify(store)
#   return jsonify ({'message': 'store not found'})

# #get /store
# @api_app.route('/store')
# def get_stores():
#   return jsonify({'stores': stores})

# #post /store/<string:name>/item data: {name :}
# @api_app.route('/store/<string:name>/item' , methods=['POST'])
# def create_item_in_store(name):
#   request_data = request.get_json()
#   for store in stores:
#     if store['name'] == name:
#         new_item = {
#             'name': request_data['name'],
#             'price': request_data['price']
#         }
#         store['items'].append(new_item)
#         return jsonify(new_item)
#   return jsonify ({'message' :'store not found'})

# #get /store/<string:name>/item
# @api_app.route('/store/<string:name>/item')
# def get_item_in_store(name):
#   for store in stores:
#     if store['name'] == name:
#         return jsonify( {'items':store['items'] } )
#   return jsonify ({'message':'store not found'})