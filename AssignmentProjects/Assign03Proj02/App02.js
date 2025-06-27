import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="clickLogo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/014/797/998/original/logo-design-template-free-vector.jpg"
          alt="Logo"
        />
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <img
          className="user-icon"
          src="https://tse3.mm.bing.net/th?id=OIP.6Rg_k8aQuRkZaBYnzOUJVwHaHa&pid=Api&P=0&h=180"
          alt="User Icon"
        />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
