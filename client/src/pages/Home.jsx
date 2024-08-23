import React from "react";

const Home = () => {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold  my-4 text-slate-800">
        Authentication App
      </h1>
      <p className="mb-4 text-[#254E70]">
        This project is a simple authentication application built using React
        and Node.js, designed to securely manage user login and logout flows.
        The front-end of the application is built with React and uses React
        Router for client-side routing and Tailwind CSS for styling. The
        back-end is built with Node.js and Express, and uses MongoDB as the
        database. Authentication is implemented using JSON Web Tokens (JWT) and
        user state management using Redux Toolkit.
      </p>
      <p className="mb-4 text-[#254E70]">
        This authentication app provides a secure and user-friendly login
        experience, with features such as client-side and server-side
        validation, token-based authentication, and session management. The
        project leverages modern tools and libraries to ensure a smooth
        development experience while maintaining high security standards. The
        trade-offs made, such as client-side session management and the use of
        Redux Toolkit, are balanced by the benefits of simplicity,
        maintainability, and scalability.
      </p>
    </div>
  );
};

export default Home;
