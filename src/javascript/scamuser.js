import React from 'react';

const scamuser = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#00a2ff',
      color: '#fff',
      flexDirection: 'column',
      textAlign: 'center',
    },
    textSection: {
      margin: '20px 0',
    },
    heading: {
      fontSize: '2em',
      fontWeight: 'bold',
    },
    paragraph: {
      fontSize: '1.2em',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1em',
      backgroundColor: '#fff',
      color: '#00a2ff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    imageSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: '50px',
      height: '50px',
      margin: '0 10px',
    },
    checkIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#00ff00',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    alertIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#ff0000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.textSection}>
        <h1 style={styles.heading}>Help us keep you safe from scams</h1>
        <p style={styles.paragraph}>
          At TruckShare, we're working hard to make our platform as secure as it
          can be. But when scams do happen, we want you to know exactly how to
          avoid and report them. Follow our tips to help us keep you safe.
        </p>
        <button style={styles.button}>Learn more</button>
      </div>
      <div style={styles.imageSection}>
        <div style={styles.checkIcon}>
          <img
            style={styles.icon}
            src="https://via.placeholder.com/50"
            alt="User 1"
          />
        </div>
        <div style={styles.checkIcon}>
          <img
            style={styles.icon}
            src="https://via.placeholder.com/50"
            alt="User 2"
          />
        </div>
        <div style={styles.checkIcon}>
          <img
            style={styles.icon}
            src="https://via.placeholder.com/50"
            alt="User 3"
          />
        </div>
        <div style={styles.alertIcon}>
          <img
            style={styles.icon}
            src="https://via.placeholder.com/50"
            alt="Scammer"
          />
        </div>
      </div>
    </div>
  );
};

export default scamuser;
