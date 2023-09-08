from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/bfhl', methods=['GET', 'POST'])
def bfhl():
    if request.method == 'GET':
        # Handle GET request
        response_data = {"operation_code": 1}
        return jsonify(response_data), 200
    
    if request.method == 'POST':
        # Handle POST request
        try:
            # Get the JSON data from the POST request
            data = request.json
            
            # Extract data from the input
            input_data = data.get("data", [])
            
            # Initialize lists for numbers and alphabets
            numbers = []
            alphabets = []

            # Initialize a variable to keep track of the highest alphabet
            highest_alphabet = None

            # Loop through the data
            for item in input_data:
                if item.isdigit():
                    # If the item is a number, add it to the numbers list
                    numbers.append(item)
                elif item.isalpha():
                    # If the item is an alphabet, add it to the alphabets list
                    alphabets.append(item)

                    # Check if it's the highest alphabet
                    if highest_alphabet is None or item > highest_alphabet:
                        highest_alphabet = item
            true=True
            # Create the output dictionary
            output_data = {
                "is_success":true,
                "user_id":"Venkata_Naga_Kalyan_Puppala_15102003","email":"nagakalyan_puppala@srmap.edu.in",
                "roll_number":"AP20110010509",
                "numbers": numbers,
                "alphabets": alphabets,
                "highest_alphabet": [highest_alphabet] if highest_alphabet is not None else []
            }

            return jsonify(output_data), 200
        
        except Exception as e:
            return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
