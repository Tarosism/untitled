import React, { useState } from "react";
import Nav from "../components/Nav";
import MainComp from "../components/MainComp";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import LoginMain from "../components/LoginMain";
import LoginNav from "../components/LoginNav";

export default function index() {
  const [loginModal, setLoginModal] = useState(false);
  const [singupModal, setSingupModal] = useState(false);
  const [loginState, setLoginState] = useState(false);

  return (
    <>
      {loginModal && (
        <LoginModal
          loginModal={loginModal}
          setLoginModal={setLoginModal}
          setLoginState={setLoginState}
        />
      )}
      {singupModal && (
        <SignupModal
          singupModal={singupModal}
          setSingupModal={setSingupModal}
        />
      )}
      {loginState ? (
        <>
          <LoginNav setLoginState={setLoginState} />
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
