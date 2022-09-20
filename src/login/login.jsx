import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledLogin = styled.div`
  margin: 32px auto;
  padding: 77px 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  font-size: 14px;
  .left {
    background: url("/phone.png");
    padding: 26px 20px 20px 160px;
    @media (max-width: 750px) {
      display: none;
    }
  }
  .right {
    max-width: 350px;
  }
  @media (max-width: 992px) {
    gap: 16px;
    .left,
    .right {
      transform: scale(0.8);
    }
  }
`;
const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  padding: 47px 42px 20px;
  background-color: white;
  input {
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: 12px;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
  .form-username,
  .form-password {
    box-sizing: border-box;
    width: 100%;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0 8px;
    color: rgb(96, 99, 102);
    position: relative;
    margin-bottom: 5px;
    background: #fafafa;
    position: relative;
    label {
      /* display:none; */
      padding: 2px 1px;
      font-size: 11px;
      color: transparent;
      transition: 0.5s;
    }
    input{
      transform:translateY(-10px);
      transition: 0.5s;
    }
    &.active {
      label {
        color: rgb(107, 108, 109);
      }
      input{
      transform:translateY(0px);
    }
    }
  }
  .show-pass {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    background: transparent;
    font-size: 14px;
    font-weight: 600;
    color: rgb(83, 81, 81);
  }
`;
const ButtonSignIn = styled.button`
  width: 100%;
  border-radius: 4px;
  color: white;
  background: #b2defc;
  text-align: center;
  padding: 8px 0;
  margin-top: 10px;
  margin-bottom: 18px;
  &.active {
    background: #0a95f6;
  }
`;
const Or = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
  color: #8e8f9d;
  span {
    width: 30%;
    border-top: 1px solid #ccc;
  }
`;
const SignInWithFB = styled.button`
  width: 100%;
  display: flex;
  aligh-items: center;
  justify-content: center;
  background: transparent;
  margin-top: 27px;
  color: #475993;
  font-weight: bold;
  img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
`;
const ForgotPassword = styled.a`
  color: rgb(8, 8, 105);
  text-decoration: none;
  font-size: 12px;
  margin-top: 20px;
`;
const ToSignUp = styled.div`
  text-align: center;
  padding: 20px 0;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-top: 10px;
  a {
    text-decoration: none;
    margin-left: 3px;
    color: #0a95f6;
    font-weight: 600;
  }
`;
const DownloadApp = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  a {
    width: 136px;
    height: 40px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
const Footer = styled.div`
  margin-top: 90px;
  @media (max-width: 750px) {
    margin-top: 20px;
  }
`;
const MenuFooter = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 16px;
  font-weight: 400;
  color: #858080;
  font-size: 12px;
`;
const CoppyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: #858080;
  font-size: 12px;
`;
const ChangeLanguage = styled.div``;

const changeLabelInput = (e) => {
  e.target.closest(".form-field").classList.remove('active')
  if(e.target.value){
    e.target.closest(".form-field").classList.add('active')
  }
};

const login = () => {
  return (
    <div style={{ width: "100%", maxWidth: "1180px", margin: "0 auto" }}>
      <StyledLogin>
        <div className="left">
          <img src="/img2.png" alt="" />
        </div>
        <div className="right">
          <SignInForm>
            <a href="#" style={{ marginBottom: "37px" }}>
              <img src="/instagram.png" alt="INSTAGRAM" />
            </a>
            <div className="form-field form-username">
              <label htmlFor="">Số điện thoại, tên người dùng hoặc email</label>
              <input
                type="text"
                placeholder="Số điện thoại, tên người dùng hoặc email"
                onChange={changeLabelInput}
              />
            </div>
            <div className="form-field form-password">
              <label htmlFor="">Mật khẩu</label>
              <input type="password" placeholder="Mật khẩu" onChange={changeLabelInput} />
              <button className="show-pass">Hiển thị</button>
            </div>
            <ButtonSignIn>Đăng nhập</ButtonSignIn>
            <Or>
              <span></span>
              HOẶC
              <span></span>
            </Or>
            <SignInWithFB>
              <img src="/facebook.png" alt="icon-fb" />
              Đăng nhập bằng FaceBook
            </SignInWithFB>
            <ForgotPassword href="#">Quên mật khẩu?</ForgotPassword>
          </SignInForm>
          <ToSignUp>
            Bạn chưa có tài khoản ư?<a href="#">Đăng ký</a>
          </ToSignUp>
          <p style={{ textAlign: "center", margin: "15px 0" }}>Tải ứng dụng</p>
          <DownloadApp>
            <a href="#">
              <img src="/apple-store.png" alt="App-Store" />
            </a>
            <a href="#">
              <img src="/ch-play.png" alt="CH-Play" />
            </a>
          </DownloadApp>
        </div>
      </StyledLogin>
      <Footer>
        <MenuFooter>
          <li>Meta</li>
          <li>Giới thiệu</li>
          <li>Blog</li>
          <li>Việc làm</li>
          <li>Trợ giúp</li>
          <li>API</li>
          <li>Quyền riêng tư</li>
          <li>Điều khoản</li>
          <li>Tài khoản liên quan nhất</li>
          <li>Hashtag</li>
          <li>Vị trí</li>
          <li>Instagram Lite</li>
          <li>Tải thông tin người liên hệ lên & người không phải người dùng</li>
          <li>Khiêu vũ</li>
          <li>Ẩm thực</li>
          <li>Nhà & vườn</li>
          <li>Âm nhạc</li>
          <li>Nghệ thuật thị giác</li>
        </MenuFooter>
        <CoppyRight>
          <ChangeLanguage>Tiếng Việt</ChangeLanguage>
          <p>© 2022 Instagram from Meta</p>
        </CoppyRight>
      </Footer>
    </div>
  );
};

export default login;
