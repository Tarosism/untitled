import React, { useState } from "react";
import Nav from "../components/Nav";
import MainComp from "../components/MainComp";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import LoginMain from "../components/LoginMain";
import LoginNav from "../components/LoginNav";
import { useSelector, useDispatch } from "react-redux";

export default function index() {
  const state = useSelector((state) => state.userReducer);
  const { me, isLoggedIn } = state;

  const [loginModal, setLoginModal] = useState(false);
  const [singupModal, setSingupModal] = useState(false);

  return (
    <>
      {loginModal && (
        <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      )}
      {singupModal && (
        <SignupModal
          singupModal={singupModal}
          setSingupModal={setSingupModal}
        />
      )}
      {isLoggedIn ? (
        <>
          <LoginNav />
          <LoginMain />
        </>
      ) : (
        <>
          <Nav setLoginModal={setLoginModal} setSingupModal={setSingupModal} />
          <MainComp />
        </>
      )}
    </>
  );
}
