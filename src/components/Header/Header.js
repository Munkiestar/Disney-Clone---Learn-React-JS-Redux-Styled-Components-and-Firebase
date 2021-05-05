import React, { useEffect } from "react";
import styled from "styled-components";

import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../../features/user/userSlice";

import { useSelector, useDispatch } from "react-redux";

import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const history = useHistory();
  const dispatch = useDispatch();

  // after page refresh stay logged in
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  // sign in
  const signIn = () => {
    auth.signInWithPopup(provider).then((res) => {
      let user = res.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    });
  };

  // sign out
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/");
    });
  };

  return (
    <Nav>
      <Logo src="./assets/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <img src="./assets/images/home-icon.svg" alt="home icon" />
              <span>Home</span>
            </a>
            <a href="/">
              <img src="./assets/images/search-icon.svg" alt="search icon" />
              <span>Search</span>
            </a>
            <a href="/">
              <img
                src="./assets/images/watchlist-icon.svg"
                alt="watchlist icon"
              />
              <span>Watchlist</span>
            </a>
            <a href="/">
              <img
                src="./assets/images/original-icon.svg"
                alt="original icon"
              />
              <span>originals</span>
            </a>
            <a href="/">
              <img src="./assets/images/movie-icon.svg" alt="movie icon" />
              <span>movies</span>
            </a>
            <a href="/">
              <img src="./assets/images/series-icon.svg" alt="series icon" />
              <span>series</span>
            </a>
          </NavMenu>

          <UserImg
            onClick={signOut}
            src="https://www.artistize.com/upload/26040/user_profile/1521836406_Xgz0TdeQSbkpB0jC5PPSRfzspez7KYPI.jpg"
          />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      align-self: center;
      font-size: 13px;
      margin-bottom: 2px;
      letter-spacing: 1.42px;
      color: #fff;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;
