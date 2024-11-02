from flask import Flask, jsonify, request, render_template
from flask_sqlalchemy import SQLAlchemy

"""Use http://127.0.0.1:5000/items to access items"""

# Create an instance of Flask
app = Flask(__name__)

@app.route('/')
def index():
    # This will serve the "index.html" file when the user visits "/"
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///marketplace.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Represents an Item and all the attributes associated with it
class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(200), nullable=True)

# Create the database tables for Item
with app.app_context():
    db.create_all()

# Define the home route
@app.route('/')
def home():
    return "Welcome to the College Marketplace!"

# Define a route to get all items (Read)
@app.route('/items', methods=['GET'])
def get_items():
    items = Item.query.all()
    items_list = [{'id': item.id, 'name': item.name, 'price': item.price, 'description': item.description} for item in items]
    return jsonify(items_list)

# Define a route to add a new item (Create)
@app.route('/items', methods=['POST'])
def add_item():
    data = request.get_json()
    new_item = Item(
        name=data['name'],
        price=data['price'],
        description=data.get('description', 'No description available')
    )
    db.session.add(new_item)
    db.session.commit()
    return jsonify({'id': new_item.id, 'name': new_item.name, 'price': new_item.price, 'description': new_item.description}), 201

# Define a route to update an existing item (Update)
@app.route('/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    item = Item.query.get_or_404(item_id)
    data = request.get_json()
    item.name = data['name']
    item.price = data['price']
    item.description = data['description']
    db.session.commit()
    return jsonify({'id': item.id, 'name': item.name, 'price': item.price, 'description': item.description})

# Define a route to delete an item (Delete)
@app.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    item = Item.query.get_or_404(item_id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({'message': 'Item deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)