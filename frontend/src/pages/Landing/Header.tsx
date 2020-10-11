import { useBSSession } from "src/stores/BlockstackSessionStore";
import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {

  const session = useBSSession();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-blue fixed-top">
      <Link className="navbar-brand" to="/">PKU Cert Centre</Link>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">网站首页</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">验证证书</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">关于我们</Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link pointer"
              onClick={() => session.redirectToSignIn()}
            >
              使用BlockStack ID登录
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
