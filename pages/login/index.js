import React, { useState } from 'react';
import Select from 'react-select'
import { useTranslation } from "react-i18next";
import { loginApi, registerApi } from "../../api/api_auth";
import { toast } from "react-toastify";
import FormData from 'form-data'

function SignInPage() {
  const { t } = useTranslation()
  const [openTab, setOpenTab] = React.useState(1);

  const [loginType,setLoginType] = useState("Username");

  //login state
  const [usernameLogin, setUsernameLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();

  //register state 
  const [phoneRegister, setPhoneRegister] = useState();
  const [emailRegister, setEmailRegister] = useState();
  const [usernameRegister, setUsernameRegister] = useState();
  const [passwordRegister, setPasswordRegister] = useState();

  function handelLoginWithUsername() {
    const fdLogin = new FormData()
    fdLogin.append("username", usernameLogin)
    fdLogin.append("password", passwordLogin)

    loginApi(fdLogin, (isOk, data) => {
      if (!isOk) return console.log("وارد نشد");

      // toast.success("شما با موفقیت وارد شدید");
      localStorage.setItem("username", data.username);
      localStorage.setItem("phone", data.phone);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
      console.log("وارد شد");
      // window.location.reload();
    });
  }

  function handelLoginWithPhoneNumber() {
    const fdLogin = new FormData()
    fdLogin.append("username", usernameLogin)
    fdLogin.append("password", passwordLogin)

    // loginApi(fdLogin, (isOk, data) => {
    //   if (!isOk) return console.log("خطا");

    setOpenTab(3);
    // });
  }

  function handelLoginVerifyCode() {
    const fdLogin = new FormData()
    fdLogin.append("username", usernameLogin)
    fdLogin.append("password", passwordLogin)

    loginApi(fdLogin, (isOk, data) => {
      if (!isOk) return console.log("وارد نشد");

      // toast.success("شما با موفقیت وارد شدید");
      localStorage.setItem("username", data.username);
      localStorage.setItem("phone", data.phone);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
      console.log("وارد شد");
      // window.location.reload();
    });
  }


  function handelRegister() {
    const fdRegister = new FormData()
    fdRegister.append("username", usernameRegister)
    fdRegister.append("email", emailRegister)
    fdRegister.append("phone_number", phoneRegister)
    fdRegister.append("password", passwordRegister)

    registerApi(fdRegister, (isOk, data) => {
      if (!isOk) return toast.error(data);
      // toast.success("شما با موفقیت ثبت نام شدید");
      localStorage.setItem("username", data.username);
      localStorage.setItem("email", data.email);
      localStorage.setItem("phone", data.phone);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
      // window.location.reload();
    });

  }
  return (
    <div className="flex flex-wrap content-center justify-center w-full h-full " >
      <div className="w-1/3 ">
        <div className={openTab === 1 ? "block border rounded bg-white mt-36 shadow-xl border-body" : "hidden"} id="link1">
          <div>
            <div className="flex justify-center">
              <h2 className="w-4/5 pb-3 mt-4 mb-8 text-3xl font-extrabold leading-9 text-center text-gray-800 border-b"
              >
                Sign In
              </h2>
            </div>
            <div class="mb-4">
            <ul class='flex cursor-pointer'>
                <li className={`py-2 px-6 ${loginType === "Username" ? "border-b" : ""}`} onClick={() => setLoginType("Username")}>With Username</li>
                <li className={`py-2 px-6 ${loginType === "Phone" ? "border-b" : ""}`} onClick={() => setLoginType("Phone")}>With Phone Number</li>
            </ul>
          </div>
            <div>

            {loginType === "Username" ? (
              <>
              <div className="flex justify-center">
                <div className="w-full md:w-2/3">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="username"
                  >
                    username
                  </label>
                  <input
                    onChange={(e) => setUsernameLogin(e.target.value)}
                    type="username"
                    name="username"
                    id="username"
                    placeholder="username"
                    className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <div className="w-full md:w-2/3">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => setPasswordLogin(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*********"
                    className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500"
                    required
                  />
                </div>
              </div>
              </>
            ) : (
              <div className="flex justify-center mt-4">
              <div className="w-full md:w-2/3">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="password"
                >
                  Phone Number
                </label>
                <input
                  onChange={(e) => setPhoneRegister(e.target.value)}
                  type="number"
                  name="number"
                  id="number"
                  placeholder="09210000000"
                  className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500"
                  required
                />
              </div>
            </div>
            )}

              {/** submit button */}
              <div className="flex justify-center mt-8">
                <button
                  // type="submit" 
                  onClick={loginType === "Username" ? handelLoginWithUsername : handelLoginWithPhoneNumber}
                  className="w-1/2 px-4 py-2 text-white rounded bg-content"
                >
                  Sign In
                </button>
              </div>
              <div className="flex justify-center my-4">
                <p class="mt-2">Need an account?
                  <a
                    className="px-2 text-xs font-bold leading-normal "
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >Create an account</a>
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className={openTab === 2 ? "block py-6  border rounded bg-white mt-28 shadow-xl border-body" : "hidden"} id="link2">
          <div className="">
            <div className="flex justify-center">
              <h2 className="w-4/5 pb-3 mb-8 text-3xl font-extrabold leading-9 text-center text-gray-800 border-b"
              >
                {t("sign_up")}
              </h2>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="w-full md:w-2/3">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="username"
                  >
                    username
                  </label>
                  <input
                    onChange={(e) => setUsernameRegister(e.target.value)}
                    type="username"
                    name="username"
                    id="username"
                    placeholder="username"
                    className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <div className="w-full md:w-2/3">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => setPasswordRegister(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*********"
                    className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <div className="w-full md:w-2/3">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="password"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmailRegister(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="test@gmail.com"
                    className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <div className="w-full md:w-2/3">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="password"
                  >
                    Phone Number
                  </label>
                  <input
                    onChange={(e) => setPhoneRegister(e.target.value)}
                    type="number"
                    name="number"
                    id="number"
                    placeholder="09210000000"
                    className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500"
                    required
                  />
                </div>
              </div>
              {/** submit button */}
              <div className="flex justify-center my-4">
                <button
                  // type="submit"
                  onClick={handelRegister}
                  className="w-1/2 px-4 py-2 mt-4 text-white rounded bg-content"
                >
                  Sign In
                </button>
              </div>
              <div className="flex justify-center">
                <p class="mt-2">You have a account?
                  <a
                    className="px-2 text-xs font-bold leading-normal "
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className={openTab === 3 ? "block py-6  border rounded bg-white mt-28 shadow-xl border-body" : "hidden"} id="link3">
          <div className="">
            <div className="flex justify-center">
              <h2 className="w-4/5 pb-3 mb-8 text-3xl font-extrabold leading-9 text-center text-gray-800 border-b"
              >
                {t("sign_in")}
              </h2>
            </div>
            <div>
              <div className="flex justify-center mt-4">
                <div className="w-full md:w-2/3">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="password"
                  >
                    Verify Code
                  </label>
                  <input
                    onChange={(e) => setPhoneRegister(e.target.value)}
                    type="number"
                    name="code"
                    id="code"
                    placeholder=""
                    className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-teal-500"
                    required
                  />
                </div>
              </div>
              {/** submit button */}
              <div className="flex justify-center my-4">
                <button
                  // type="submit"
                  onClick={handelLoginVerifyCode}
                  className="w-1/2 px-4 py-2 mt-4 text-white rounded bg-content"
                >
                  Verify Code
                </button>
              </div>
              <div className="flex justify-center">
                <p class="mt-2">You want to go to login section?
                  <a
                    className="px-2 text-xs font-bold leading-normal "
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>

  )
}
export default SignInPage;
