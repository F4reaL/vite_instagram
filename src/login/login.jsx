import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import imgPhone1 from '/img1.png'
import imgPhone2 from '/img2.png'
import imgPhone3 from '/img3.png'
import imgPhone4 from '/img4.png'
import '../css/animation.css'
import '../utils/showhidePassword.js'
import showhidePassword from "../utils/showhidePassword.js";
import { useFormik } from "formik";
import * as Yup from "yup"

const StyledLogin = styled.div`
  margin: 0 auto;
  padding: 6vh 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  font-size: 14px;
  @media (max-width: 750px) {
    padding: 0;
  }
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
      transform: scale(0.9);
    }
  }
`;
const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  padding: 47px 42px 20px;
  background-color: white;
  @media (max-width: 750px) {
    border: none;
  }
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
  .form-field {
    box-sizing: border-box;
    width: 100%;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0 8px;
    color: rgb(96, 99, 102);
    position: relative;
    margin-bottom: 10px;
    background: #fafafa;
    position: relative;
    label {
      /* display:none; */
      padding: 2px 1px;
      font-size: 11px;
      color: transparent;
      transition: 0.5s;
    }
    input {
      transform: translateY(-10px);
      transition: 0.5s;
    }
    &.active {
      label {
        color: rgb(107, 108, 109);
      }
      input {
        transform: translateY(0px);
      }
    }
    &:focus-within {
      border: 1px solid #0c0c0c;
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
    display: none;
    &.show{
      display: inline-block;
    }
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
`
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
  @media (max-width:750px) {
   border:none; 
  }
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
  margin-top: 6vh;
  margin-bottom: 30px;
  @media (max-width: 750px) {
    margin-top: 20px;
    padding: 0 10px;
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
  margin-top: 15px;
`;
const ChangeLanguage = styled.div``;
const Title = styled.div`
  color: #9e9b9b;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  padding: 0 10px;
`;
const NoticeText = styled.p`
  text-align: center;
  font-size: 12px;
  color: #858080;
  margin-top: 15px;
  a {
    text-decoration: none;
    color: #6d6c6c;
    font-size: 13px;
    font-weight: 500;
  }
`;
const changeLabelInput = (e) => {
  var button_showpass = e.target.closest(".form-field").querySelector(".show-pass");
  e.target.closest(".form-field").classList.remove("active");
  if (e.target.value) e.target.closest(".form-field").classList.add("active");
  if(button_showpass) button_showpass.classList.remove('show')
  if(e.target.value && button_showpass) {
    button_showpass.classList.add('show')
    showhidePassword()
  }
};
const imgPhones = [imgPhone1,imgPhone2,imgPhone3,imgPhone4]
// const showPassword = (e)=>{
//   e.target.closest(".form-field").querySelector("input").setAttribute('type','text');
// }

const login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [imgPhoneIndex,setImgPhoneIndex] = useState(0)

  const formik = useFormik({
    initialValues:{
      phoneOrEmail:"",
      fullname:"",
      username:"",
      password:"",
    },
    validationSchema: Yup.object({
      phoneOrEmail: Yup.string().required("Yêu cầu nhập").min(4,'Quá ngắn'),
      fullname: Yup.string().required("Yêu cầu nhập").min(3,'Tên không được quá ngắn'),
      username: Yup.string().required("Yêu cầu nhập").min(3,"Không được quá ngắn"),
      password: Yup.string().required("Yêu cầu nhập").min(6,"Không được quá ngắn, tối thiểu 6 ký tự"),
    }),
    onSubmit:(values)=>{
      console.log(values);
    }
  })
  // console.log(formik.handleBlur)
  console.log(formik.errors)

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setImgPhoneIndex(preState => {
  //       return (preState +1)%4
  //     })
  //   }, 3000);
  
  //   return () => {
  //     clearInterval(timerId)
  //   }
  // }, [])
  

  return (
    <>
      {isSignIn ? (
        <div
          className="signin"
          style={{ width: "100%", maxWidth: "1180px", margin: "0 auto" }}
        >
          <StyledLogin>
            <div className="left">
              <img src={imgPhones[imgPhoneIndex]} style={{animation:'appearImg 3s infinite'}} alt="" />
            </div>
            <div className="right">
              <SignInForm>
                <a href="#" style={{ marginBottom: "37px" }}>
                  <img src="/instagram.png" alt="INSTAGRAM" />
                </a>
                <div className="form-field form-username">
                  <label htmlFor="">
                    Số điện thoại, tên người dùng hoặc email
                  </label>
                  <input
                    type="text"
                    placeholder="Số điện thoại, tên người dùng hoặc email"
                    onChange={changeLabelInput}
                  />
                </div>
                <div className="form-field form-password">
                  <label htmlFor="">Mật khẩu</label>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={changeLabelInput}
                  />
                  <button className="show-pass" style={{transition:'all 0.5s ease'}} >Hiển thị</button>
                </div>
                <ButtonSignIn >Đăng nhập</ButtonSignIn>
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
                Bạn chưa có tài khoản ư?
                <a href="#" onClick={() => setIsSignIn(false)}>
                  Đăng ký
                </a>
              </ToSignUp>
              <p style={{ textAlign: "center", margin: "15px 0" }}>
                Tải ứng dụng
              </p>
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
              <li>
                Tải thông tin người liên hệ lên & người không phải người dùng
              </li>
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
      ) : (
        <div className="signup">
          <StyledLogin>
            <div className="right">
              <SignInForm onSubmit={formik.handleSubmit}>
                <a href="#">
                  <img
                    src="/instagram.png"
                    alt="INSTAGRAM"
                    style={{ marginBottom: "15px" }}
                  />
                </a>
                <Title>Đăng ký để xem ảnh và video từ bạn bè.</Title>

                <SignInWithFB style={{ marginBottom: "18px" }}>
                  <img src="/facebook.png" alt="icon-fb" />
                  Đăng nhập bằng FaceBook
                </SignInWithFB>
                <Or style={{ marginBottom: "19px" }}>
                  <span></span>
                  HOẶC
                  <span></span>
                </Or>
                <div className="form-field form-phonenumber">
                  <label htmlFor="">Số di động hoặc email</label>
                  <input
                    id="phoneOrEmail"
                    name="phoneOrEmail"
                    type="text"
                    placeholder="Số di động hoặc email"
                    value={formik.values.phoneOrEmail}
                    onChange={(e)=>{
                      changeLabelInput(e)
                      formik.handleChange(e)
                    }}
                  />
                  {formik.errors.phoneOrEmail && <p>{formik.errors.phoneOrEmail}</p>}
                </div>
                <div className="form-field form-fullname">
                  <label htmlFor="">Tên đầy đủ</label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder="Tên đầy đủ"
                    value={formik.values.fullname}
                    onChange={(e)=>{
                      changeLabelInput(e)
                      formik.handleChange(e)
                    }}
                  />
                </div>
                <div className="form-field form-username">
                  <label htmlFor="">Tên người dùng</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Tên người dùng"
                    value={formik.values.username}
                    onChange={(e)=>{
                      changeLabelInput(e)
                      formik.handleChange(e)
                    }}
                  />
                </div>
                <div className="form-field form-password">
                  <label htmlFor="">Mật khẩu</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Mật khẩu"
                    value={formik.values.password}
                    onChange={(e)=>{
                      changeLabelInput(e)
                      formik.handleChange(e)
                    }}
                  />
                  <button className="show-pass">Hiển thị</button>
                </div>
                <NoticeText>
                  Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin
                  liên hệ của bạn lên Instagram. <a href="#">Tìm hiểu thêm</a>
                </NoticeText>
                <NoticeText>
                  Bằng cách đăng ký, bạn đồng ý với{" "}
                  <a href="#">Điều khoản, Chính sách quyền riêng tư</a> và{" "}
                  <a href="#">Chính sách cookie</a> của chúng tôi.
                </NoticeText>
                <ButtonSignIn>Đăng ký</ButtonSignIn>
              </SignInForm>
              <ToSignUp>
                Bạn có tài khoản?
                <a href="#" onClick={() => setIsSignIn(true)}>
                  Đăng nhập
                </a>
              </ToSignUp>
              <p style={{ textAlign: "center", margin: "15px 0" }}>
                Tải ứng dụng
              </p>
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
              <li>
                Tải thông tin người liên hệ lên & người không phải người dùng
              </li>
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
      )}
    </>
  );
};

export default login;
