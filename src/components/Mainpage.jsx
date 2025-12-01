import React from "react";
import "./MainPage.css";

function Main() {
  return (
    <main className="main-page">
      <h1>Welcome to My Website</h1>
      <p>
        This is the main page of our React website. You can explore different
        sections using the navigation bar above.
      </p>
      <button className="explore-btn">Explore More</button>
    </main>
  );
}

export default Main;