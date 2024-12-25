import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const openFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61565379877004",
      "_blank"
    ); // Opens Facebook in a new tab
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/fuzedminds", "_blank"); // Replace with the desired Instagram profile URL
  };

  const openTwitter = () => {
    window.open("https://x.com/fuzedMindsTech", "_blank"); // Replace with the desired Twitter profile URL
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/company/fuzedminds-technologies/",
      "_blank"
    );
  };

  return (
    <>
      <footer>
        <div className=" max-w-full mx-auto px-4 sm:px-6 bg-gradient-to-tr from-blue-400 via-blue-300 to-gray-100 border-t border-b py-30 font-sans">
          {/* Top area: Blocks */}
          <div className="flex flex-wrap justify-center p-3">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4 w-[257px] m-3 text-center">
              <div className="box-border  text-gray-600 text-center  xl:w-80 mx-auto">
                <h3 className="text-black text-4xl mb-4">fuzedMinds</h3>
                <div className="text-md font-medium text-gray-600">
                  <h5>Bhubaneswar</h5>
                  <p>Odisha</p>
                  <p>India</p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 w-[257px] m-3 text-center">
              <h6 className="text-[#013289] text-xl font-semibold mb-4">
                LINKS
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="/#about"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/#services"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/contact#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-5 md:col-span-6 lg:col-span-4 w-[257px] m-3 text-center">
              <h6 className="text-[#013289] text-xl font-semibold mb-4">
                OUR SERVICES
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="/career#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Career
                  </HashLink>
                </li>
                {
                  // <li className="mb-2">
                  //   <HashLink
                  //     to="/training#"
                  //     className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  //   >
                  //     Training
                  //   </HashLink>
                  // </li>
                }
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Application Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    General IT Consultations
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center lg:col-span-3 font-bold uppercase text-blue-900 w-[257px] m-3">
              <div className="text-xl mb-6 font-semibold">
                Social Media Links
              </div>

              <div className="text-md font-light mb-6">
                Follow us on social media.
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <Link
                      to="#"
                      onClick={openInstagram}
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <radialGradient
                          id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                          cx="19.38"
                          cy="42.035"
                          r="44.899"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#fd5"></stop>
                          <stop offset=".328" stop-color="#ff543f"></stop>
                          <stop offset=".348" stop-color="#fc5245"></stop>
                          <stop offset=".504" stop-color="#e64771"></stop>
                          <stop offset=".643" stop-color="#d53e91"></stop>
                          <stop offset=".761" stop-color="#cc39a4"></stop>
                          <stop offset=".841" stop-color="#c837ab"></stop>
                        </radialGradient>
                        <path
                          fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                        ></path>
                        <radialGradient
                          id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                          cx="11.786"
                          cy="5.54"
                          r="29.813"
                          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#4168c9"></stop>
                          <stop
                            offset=".999"
                            stop-color="#4168c9"
                            stop-opacity="0"
                          ></stop>
                        </radialGradient>
                        <path
                          fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                        ></path>
                        <circle
                          cx="31.5"
                          cy="16.5"
                          r="1.5"
                          fill="#fff"
                        ></circle>
                        <path
                          fill="#fff"
                          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      onClick={openTwitter}
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#212121"
                          fill-rule="evenodd"
                          d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                          clip-rule="evenodd"
                        ></path>
                        <path
                          fill="#fff"
                          d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                        ></path>
                        <polygon
                          fill="#fff"
                          points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                        ></polygon>
                        <polygon
                          fill="#fff"
                          points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                        ></polygon>
                      </svg>
                    </Link>
                  </li>

                  <li className="ml-4">
                    <Link
                      to="/"
                      onClick={openLinkedIn}
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="X"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#0288D1"
                          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="/"
                      onClick={openFacebook}
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="X"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#039be5"
                          d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/5 px-4 mx-auto text-center py-2">
              <div className="text-sm text-black font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <HashLink to="#" className=" hover:text-yellow-900">
                  fuzedMinds technologis pvt ltd
                </HashLink>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
