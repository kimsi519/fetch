import React, { forwardRef } from "react";

// 자식 컴포넌트 정의 (forwardRef 사용)
const ChildButton = forwardRef<HTMLButtonElement>((props, ref) => {
  return (
    <button ref={ref} onClick={() => alert("Child Button Clicked!")}>
      Child Button
    </button>
  );
});

export default ChildButton;
