import { useFormik } from 'formik';
import * as Yub from 'yup';
import '../style/Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const loginSchema = Yub.object().shape({
    email: Yub.string().email('Invalid email').required('Required'),
    password: Yub.string().min(8, "Password is too short").max(10, "Password is too long").required('Required')
  });

  const signUpSchema = Yub.object().shape({
    username: Yub.string().required("Required"),
    email: Yub.string().email('Invalid email').required("Required"),
    password: Yub.string().min(8, "Password is too short").max(10, "Password is too long").required('Required')
  });

  const formik = useFormik({
    initialValues: isSignUp ? { username: "", email: "", password: "" } : { email: "", password: "" },
    validationSchema: isSignUp ? signUpSchema : loginSchema,
    onSubmit: (values) => {
      const url = isSignUp ? 'https://pm.alexondev.net/api/signup' : 'https://pm.alexondev.net/api/login';
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      }).then(() => {
        if (isSignUp) {
          navigate('/');
        } else {
          navigate('/');
        }
      });
    }
  });

  return (
    <div className="auth-container">
      <form onSubmit={formik.handleSubmit} className="auth-form">
        <h1>{isSignUp ? "Sign Up" : "Login"} ──</h1>
        {isSignUp && (
          <div className="input-group">
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.username}
            />
            {formik.errors.username && <span className="error">{formik.errors.username}</span>}
          </div>
        )}
        <div className="input-group">
          <input 
            type="text" 
            name="email" 
            placeholder="Email" 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            value={formik.values.email}
          />
          {formik.errors.email && <span className="error">{formik.errors.email}</span>}
        </div>
        <div className="input-group">
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            value={formik.values.password}
          />
          {formik.errors.password && <span className="error">{formik.errors.password}</span>}
        </div>
        <div className="links">
          <p className='link'>Forgot your password?</p>
          <p className="link" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ?"Login Here" : "Create account"}
          </p>
        </div>
        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
      </form>
    </div>
  );
}

export default Auth;
