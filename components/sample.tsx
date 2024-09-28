import React from "react";

function MyComponent({ name, age }) {
  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </div>
  );
}

// prop-types가 정의되지 않은 경우 ESLint 경고 발생
export default MyComponent;
