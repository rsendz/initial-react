// filepath: /Users/luisresendez/Code/React/initial-react/src/components/LifecycleDemo.jsx
import React, { useEffect } from "react";

const LifecycleDemo = () => {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component updated");
  });

  return (
    <div>
      <h2>Lifecycle Demo Component</h2>
      <p>Check the console for lifecycle logs.</p>
    </div>
  );
};

export default LifecycleDemo;
