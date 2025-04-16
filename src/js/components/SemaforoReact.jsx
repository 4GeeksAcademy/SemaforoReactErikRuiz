import React, { useState } from 'react';

const SemaforoReact = () => {
  const [color, setColor] = useState('red');
  const [colors, setColors] = useState(['red', 'yellow', 'green']);

  const toggleColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addPurple = () => {
    if (!colors.includes('purple')) {
      setColors([...colors, 'purple']);
    }
  };

  const getLightStyle = (lightColor) => ({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: lightColor,
    margin: '10px auto',
    opacity: color === lightColor ? 1 : 0.3,
    boxShadow: color === lightColor ? `0 0 30px ${lightColor}` : 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: '100px',
          background: 'black',
          padding: '10px',
          borderRadius: '10px',
          margin: '0 auto'
        }}
      >
        {colors.map((c) => (
          <div
            key={c}
            style={getLightStyle(c)}
            onClick={() => setColor(c)}
          ></div>
        ))}
      </div>
      <button onClick={toggleColor} style={{ marginTop: '20px', marginRight: '10px' }}>
        Cambiar Color
      </button>
      <button onClick={addPurple}>Agregar púrpura</button>
    </div>
  );
};

export default SemaforoReact;