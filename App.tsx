// App.tsx
import React from 'react';
import Button from './components/Button'; // Button 컴포넌트 import

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>classnames 사용 예제</h1>
      
      {/* 기본 버튼 */}
      <Button label="기본 버튼" />
      
      {/* Primary 버튼 */}
      <Button label="Primary 버튼" primary />
      
      {/* Secondary 버튼 */}
      <Button label="Secondary 버튼" secondary />
      
      {/* Large 크기의 Primary 버튼 */}
      <Button label="Large Primary 버튼" primary large />
      
      {/* Disabled 버튼 */}
      <Button label="Disabled 버튼" disabled />
      
      {/* Large 크기의 Disabled Primary 버튼 */}
      <Button label="Large Disabled Primary 버튼" primary large disabled />
    </div>
  );
};

export default App;
