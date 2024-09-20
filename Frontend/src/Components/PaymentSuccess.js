import React from 'react';
import { useSearchParams } from 'react-router-dom';
const PaymentSuccess = () => {
     const searchquery = useSearchParams()[0]

     const refrenceNum = searchquery.get("reference")
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.checkmarkCircle}>
          <span style={styles.checkmark}>&#10003;</span>
        </div>
        <h1 style={styles.title}>Order Successfully Placed!</h1>
        <p style={styles.message}>
          Thank you for your purchase! Your order has been successfully processed. A confirmation email with your order details has been sent to your inbox.
        </p>
        <div style={styles.orderDetails}>
          <h2 style={styles.orderTitle}>Order Summary</h2>
          <p><strong>Refrence ID:</strong> {refrenceNum}</p>
          <p><strong>Total Amount:</strong> ₹ 2999.00</p>
          <p><strong>Payment Method:</strong> Credit Card</p>
        </div>
        <button style={styles.button} onClick={() => window.location.href = '/'}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

// Inline styling for simplicity
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
  },
  checkmarkCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#4caf50',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 20px',
  },
  checkmark: {
    fontSize: '40px',
    color: 'white',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  message: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  orderDetails: {
    textAlign: 'left',
    margin: '20px 0',
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '8px',
  },
  orderTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  }
};

export default PaymentSuccess;
