import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";

const Nav = styled.div`
  display: flex;
  height: 60px;
  border-bottom: 1px solid #cac9c9;
  justify-content: space-between;
  padding: 0 20%;
  align-items: center;
  @media (max-width: 750px) {
    height: 44px;
    padding: 0 16px;
  }
  .instagram {
    &-logo {
      width: 103px;
    }
  }
`;
const Tools = styled.div`
  display: flex;
  gap: 23px;
  svg:hover,
  .user:hover {
    cursor: pointer;
  }
  .user {
    position: relative;
    &-avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }
  @media (max-width: 750px) {
    svg:not(.message),
    .user {
      display: none;
    }
  }
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  width: 268px;
  box-sizing: border-box;
  padding: 3px 16px;
  position: relative;
  background-color: #e9e7e7;
  border-radius: 8px;
  @media (max-width: 750px) {
    display: none;
  }
  button {
    border: none;
    outline: none;
    background-color: transparent;
    display: none;
    box-sizing: border-box;
    height: 14px;
    cursor: pointer;
  }
  input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    line-height: 100%;
    font-size: 15px;
    padding-left: 26px;
    transition: all 0.1s ease;
  }
  &:focus-within img {
    display: none;
  }
  &:focus-within button {
    display: inline-block;
  }
  &:focus-within input {
    padding-left: 0px;
  }
`;
const Camera = styled.div`
  @media (min-width: 751px) {
    display: none;
  }
`;
const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [opened, setOpened] = useState(false);

  const inputRef = useRef();

  useEffect(()=>{
    // console.log(encodeURIComponent(searchValue))
  },[searchValue])
  return (
    <Nav>
     
      <Camera>
        <svg
          aria-label="Tin mới"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <circle
            cx="12"
            cy="13.191"
            fill="none"
            r="4.539"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
          ></circle>
          <path
            d="M18.592 21.374A3.408 3.408 0 0022 17.966V8.874a3.41 3.41 0 00-3.41-3.409h-.52a2.108 2.108 0 01-1.954-1.375 2.082 2.082 0 00-2.204-1.348h-3.824A2.082 2.082 0 007.884 4.09 2.108 2.108 0 015.93 5.465h-.52A3.41 3.41 0 002 8.875v9.091a3.408 3.408 0 003.408 3.408z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
      </Camera>

      <img src="/instagram.png" alt="" className="instagram-logo" />

      <SearchBar>
        <img
          style={{ width: "16px", position: "absolute", left: "16px" }}
          src="/search-icon.png"
          alt="search-icon"
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="Tìm kiếm"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          className="clear"
          onClick={() => {
            setSearchValue("");
            inputRef.current.focus()
          }}
        >
          <svg
            style={{ opacity: "0.4" }}
            width="14"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
        </button>
      </SearchBar>
      <Tools>
        <svg
          aria-label="Trang chủ"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path>
        </svg>
        <svg
          aria-label="Messenger"
          className="message"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="1.739"
          ></path>
          <path
            d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg
          aria-label="Bài viết mới"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="6.545"
            x2="17.455"
            y1="12.001"
            y2="12.001"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="12.003"
            x2="12.003"
            y1="6.545"
            y2="17.455"
          ></line>
        </svg>
        <svg
          aria-label="Tìm người"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <polygon
            fill="none"
            points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></polygon>
          <polygon
            fillRule="evenodd"
            points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
          ></polygon>
          <circle
            cx="12.001"
            cy="12.005"
            fill="none"
            r="10.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></circle>
        </svg>
        <svg
          aria-label="Nguồn cấp dữ liệu hoạt động"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
        </svg>
        <div className="user">
          <img
            className="user-avatar"
            src="/avatar.jpg"
            alt=""
            onClick={() => setOpened(!opened)}
          />
          <DropdownMenu opened={opened}></DropdownMenu>
        </div>
      </Tools>
    </Nav>
  );
};

export default Navbar;
