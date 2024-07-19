import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
    const handleBuy = async (price) => {
        const data = await fetch("http://localhost:4000/api/checkout", {
            method: 'POST',
            mode:'cors',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ price: price })
        })
        const res = await data.json()
        const order = res.order
        // console.log(order);  
        const options = {
            key: res.keyId, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Hemant Goutam",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }
    return (
        <div className="App" style={{ margin: '1rem', display: 'flex' }}>
            <Card img={"https://picsum.photos/200/300"} handleBuy={handleBuy} price={"1000"} />
        </div>
    );
}

export default App;
