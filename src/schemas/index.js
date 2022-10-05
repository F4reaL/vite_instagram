import * as Yup from "yup";

export const yupValidate = Yup.object().shape({
  phoneOrEmail: Yup.string().required("Yêu cầu nhập").min(4, "Quá ngắn"),
  fullname: Yup.string()
    .required("Yêu cầu nhập")
    .min(3, "Tên không được quá ngắn"),
  username: Yup.string().required("Yêu cầu nhập").min(6, "Không được quá ngắn"),
  password: Yup.string()
    .required("Yêu cầu nhập")
    .min(6, "Không được quá ngắn, tối thiểu 6 ký tự"),
});
