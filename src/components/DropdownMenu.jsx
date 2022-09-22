import React, { useState } from "react";
import styled from "styled-components";

const StyledDropdownMenu = styled.ul`
  position: absolute;
  top: calc(100% + 15px);
  right: -10%;
  background-color: #fff;
  border-radius: 6px;
  list-style: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;
const DropdownItem = styled.li`
  padding: 8px 16px;
  display: flex;
  gap: 12px;
  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
  svg {
    flex-shrink: 0;
  }
  span {
    white-space: nowrap;
    min-width: 170px;
    font-size: 14px;
  }
`;
const DropdownMenu = () => {
  const [opened, setOpened] = useState(true);
  return (
    <>
      {opened && (
        <StyledDropdownMenu>
          <DropdownItem>
            <svg
              aria-label="Trang cá nhân"
              class="_ab6-"
              color="#262626"
              fill="#262626"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            >
              <circle
                cx="12.004"
                cy="12.004"
                fill="none"
                r="10.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
              ></circle>
              <path
                d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
              ></path>
              <circle
                cx="12.006"
                cy="9.718"
                fill="none"
                r="4.109"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
              ></circle>
            </svg>
            <span>Trang cá nhân</span>
          </DropdownItem>
          <DropdownItem>
            <svg
              aria-label="Đã lưu"
              class="_ab6-"
              color="#262626"
              fill="#262626"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            >
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
            <span>Đã lưu</span>
          </DropdownItem>
          <DropdownItem>
            <svg
              aria-label="Cài đặt"
              class="_ab6-"
              color="#262626"
              fill="#262626"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            >
              <circle
                cx="12"
                cy="12"
                fill="none"
                r="8.635"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
              <path
                d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
            <span>Cài Đặt</span>
          </DropdownItem>
          <DropdownItem>
            <svg
              aria-label="Báo cáo sự cố"
              class="_ab6-"
              color="#262626"
              fill="#262626"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            >
              <path d="M18.001 1h-12a5.006 5.006 0 00-5 5v9.005a5.006 5.006 0 005 5h2.514l2.789 2.712a1 1 0 001.394 0l2.787-2.712h2.516a5.006 5.006 0 005-5V6a5.006 5.006 0 00-5-5zm3 14.005a3.003 3.003 0 01-3 3h-2.936a1 1 0 00-.79.387l-2.274 2.212-2.276-2.212a1 1 0 00-.79-.387H6a3.003 3.003 0 01-3-3V6a3.003 3.003 0 013-3h12a3.003 3.003 0 013 3zm-9-1.66a1.229 1.229 0 101.228 1.228A1.23 1.23 0 0012 13.344zm0-8.117a1.274 1.274 0 00-.933.396 1.108 1.108 0 00-.3.838l.347 4.861a.892.892 0 001.77 0l.348-4.86a1.106 1.106 0 00-.3-.838A1.272 1.272 0 0012 5.228z"></path>
            </svg>
            <span>Báo cáo sự cố</span>
          </DropdownItem>
          <DropdownItem>
            <svg
              aria-label="Chuyển tài khoản"
              class="_ab6-"
              color="#262626"
              fill="#262626"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            >
              <path d="M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z"></path>
            </svg>
            <span>Chuyển tài khoản</span>
          </DropdownItem>
        </StyledDropdownMenu>
      )}
    </>
  );
};

export default DropdownMenu;
