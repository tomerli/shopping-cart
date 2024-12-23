import React, { useState } from 'react';
import { Lock, ShoppingCart, LogOut, CreditCard } from 'lucide-react';

// Mock product data
const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999.99, description: 'Powerful laptop for all your needs' },
  { id: 2, name: 'Smartphone', price: 699.99, description: 'Latest smartphone model' },
  { id: 3, name: 'Headphones', price: 199.99, description: 'Noise-cancelling wireless headphones' },
  { id: 4, name: 'Tablet', price: 499.99, description: 'Portable tablet for work and entertainment' },
];

// New Checkout Component
const Checkout = ({ total, items, onBack, onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim().slice(0, 19);
    }
    // Format expiry date
    if (name === 'expiry') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2').slice(0, 5);
    }
    // Limit CVV to 3 or 4 digits
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // In a real app, you would process the payment here
      onComplete();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-800"
        >
          Back to Cart
        </button>
      </div>

      {/* Order Summary */}
      <div className="mb-6 p-4 bg-gray-50 rounded">
        <h3 className="font-semibold mb-2">Order Summary</h3>
        {items.map((item, index) => (
          <div key={index} className="flex justify-between text-sm mb-1">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))}
        <div className="border-t mt-2 pt-2 font-bold">
          <span>Total: ${total.toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            <h3 className="font-semibold">Shipping Information</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </>
        ) : (
          <>
            <h3 className="font-semibold">Payment Information</h3>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded pl-10"
                  maxLength="19"
                />
                <CreditCard className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  required
                  className="w-1/2 p-2 border rounded"
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  className="w-1/2 p-2 border rounded"
                />
              </div>
            </div>
          </>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
        >
          {step === 1 ? 'Continue to Payment' : 'Complete Purchase'}
        </button>
      </form>
    </div>
  );
};

// Update Cart Component to include checkout flow
const Cart = ({ items, removeFromCart, onCheckout }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleCheckoutComplete = () => {
    onCheckout();
    setIsCheckingOut(false);
  };

  if (isCheckingOut) {
    return (
      <Checkout
        total={total}
        items={items}
        onBack={() => setIsCheckingOut(false)}
        onComplete={handleCheckoutComplete}
      />
    );
  }

  return (
    <div className="border rounded-lg p-4 m-6 bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={() => setIsCheckingOut(true)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Login Component
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd validate credentials against a backend
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-center mb-6">
          <Lock className="h-12 w-12 text-blue-500" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

// Product List Component
const ProductList = ({ addToCart }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {PRODUCTS.map((product) => (
      <div key={product.id} className="border rounded-lg p-4 shadow">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-bold mt-2">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
);

// Main App Component
//const App = () => {
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setCartItems([]);
    setShowCart(false);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    setCartItems([]);
    setShowCart(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Online Shop</h1>
          <div className="flex items-center space-x-4">
            <span>Welcome, {username}!</span>
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <LogOut className="h-6 w-6" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto">
        <div className="flex">
          <div className={`flex-1 ${showCart ? 'w-2/3' : 'w-full'}`}>
            <ProductList addToCart={addToCart} />
          </div>
          {showCart && (
            <div className="w-1/3">
              <Cart
                items={cartItems}
                removeFromCart={removeFromCart}
                onCheckout={handleCheckout}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;