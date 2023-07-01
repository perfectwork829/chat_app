import React, { useState } from 'react';
import * as comp from '../components/auth';
import config from '../config';
import '../public/assets/css/custom.css';
import myImage from '../public/assets/images/login-sign.jpg';

function Auth() {
  const [respond, setRespond] = useState({ success: true, message: null });
  const [login, setLogin] = useState(true);

  return (
    <div className="absolute w-full h-full flex justify-center overflow-auto bg-white sm:bg-spill-100 custom-bg-sign">
      <h1 className="font-bold text-2xl font-display text-center">
        {config.brandName}
      </h1>
      <div className="md:container md:mx-auto p-6 w-[886px] grid-flow-row auto-rows-auto flex inner-sign-form">
        {/* body */}
        <div
          className="w-full h-full justify-center basis-3/5"
          style={{ backgroundImage: `url(${myImage})` }}
        ></div>
        <div className="p-6 rounded-md bg-white basis-2/5">
          {/* header */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold">
              {login ? 'Sign in' : 'Sign up'}
            </h1>
            {respond.message && (
              <p
                className={`${
                  !respond.success && 'text-rose-800'
                } text-sm mt-1`}
              >
                {respond.message}
              </p>
            )}
          </div>
          {login ? (
            <comp.login setRespond={setRespond} />
          ) : (
            <comp.register setRespond={setRespond} />
          )}
          <div className="pb-6 pt-6">
            <p className="sm:text-center">
              <span>
                {login ? "Don't have an account? " : 'Have an account? '}
              </span>
              <button
                type="button"
                className="font-bold inline-block hover:underline"
                onClick={() => {
                  setRespond({ success: true, message: null });
                  setLogin((prev) => !prev);
                }}
              >
                {login ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
