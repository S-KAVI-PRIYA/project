from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/generate-plan', methods=['POST'])

def generate_plan():

    data = request.json

    subjects = data['subjects']
    hours = data['hours']

    total_weight = 0

    # Calculate total weight
    for sub in subjects:

        if sub['difficulty'] == "easy":
            total_weight += 1

        elif sub['difficulty'] == "medium":
            total_weight += 2

        else:
            total_weight += 3

    plan = []

    # Generate plan
    for sub in subjects:

        if sub['difficulty'] == "easy":
            weight = 1

        elif sub['difficulty'] == "medium":
            weight = 2

        else:
            weight = 3

        time = (weight / total_weight) * hours

        plan.append({

            "name": sub['name'],
            "difficulty": sub['difficulty'],
            "time": round(time, 2)

        })

    return jsonify(plan)

if __name__ == '__main__':
    app.run(debug=True)
