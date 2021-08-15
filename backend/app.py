import flask
from flask import jsonify, request

from dotenv import load_dotenv

load_dotenv()

from database import database

from guesslang import Guess

guesser = Guess()

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route("/")
def home():
	return "Hi"

@app.route("/guesslang", methods=["POST"])
def guesslang():
	code = request.get_json()["code"]
	language = guesser.language_name(code)

	return jsonify({ "language": language }), 200

app.run()