import React, { useRef } from "react";
import ChildButton from "./ChildButton"; // ChildButton 컴포넌트 임포트

// 부모 컴포넌트 정의
function ParentComponent() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    // 부모 컴포넌트에서 자식 컴포넌트의 버튼 클릭하기
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <div>
      <h2>Forward Ref Example</h2>
      <ChildButton ref={buttonRef} /> {/* 자식 컴포넌트에 ref 전달 */}
      <button onClick={handleClick}>Click Child Button</button>{" "}
      {/* 부모의 버튼 */}
    </div>
  );
}

export default ParentComponent;
