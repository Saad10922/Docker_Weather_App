from flask import Flask, request, jsonify
import requests

app = Flask(__name__)
API_KEY = 'a4e234f06ac906ed2817f35f306e6283'

@app.route('/api/location', methods=['GET'])
def get_location():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    if not lat or not lon:
        return jsonify({"error": "Latitude and Longitude are required"}), 400

    url = f'https://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit=1&appid={API_KEY}'
    response = requests.get(url)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6000)
