import React from "react";
import LifecycleDemo from "../components/LifecycleDemo";

const HomePage = () => {
  const [showLifecycle, setShowLifecycle] = React.useState(true);

  return (
    <div className="page-container">
      <h1>Home Page</h1>
      <p>Welcome to the home page</p>
      <button onClick={() => setShowLifecycle(!showLifecycle)}>
        {showLifecycle ? "Unmount" : "Mount"} LifecycleDemo
      </button>
      {showLifecycle && <LifecycleDemo />}
    </div>
  );
};

export default HomePage;
