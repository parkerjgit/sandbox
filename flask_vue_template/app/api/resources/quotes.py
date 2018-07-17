from flask_restful import Resource

#---
quotes = [
	{
		"author" : "Elbert Hubbard",
		"body" : "Do not take life too seriously. You will never get out of it alive."
	},
	{
		"author" : "Mark Twain",
		"body" : "Get your facts first, then you can distort them as you please."
	},
	{
		"author" : "Benjamin Franklin",
		"body" : "Wine is constant proof that God loves us and loves to see us happy."
	}
]


class Quotes(Resource):
	def get(self):
		return quotes


