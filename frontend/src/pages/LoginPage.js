// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'animate.css';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === 'admin123') {
//       navigate('/home');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100 bg-light"
//       style={{ fontFamily: 'Arial, sans-serif' }}
//     >
//       <div
//         className="card shadow-lg p-4 animate__animated animate__fadeIn"
//         style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
//       >
//         <h2 className="text-center mb-4 text-primary">Welcome Back</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your username"
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="form-control"
//               required
//             />
//           </div>
//           {error && (
//             <div className="alert alert-danger text-center animate__animated animate__shakeX">
//               {error}
//             </div>
//           )}
//           <button type="submit" className="btn btn-primary w-100">
//             Login
//           </button>
//         </form>
//         <div className="mt-3 text-center">
//           <a href="#" className="text-secondary">
//             Forgot Password?
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin123') {
      navigate('/home', { state: { role: 'admin' } });
    } else if (username !== 'admin') {
      navigate('/home', { state: { role: 'customer' } });
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <div
        className="card shadow-lg p-4 animate__animated animate__fadeIn"
        style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
      >
        <h2 className="text-center mb-4 text-primary">Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="form-control"
              required
            />
          </div>
          {error && (
            <div className="alert alert-danger text-center animate__animated animate__shakeX">
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          <a href="#" className="text-secondary">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
