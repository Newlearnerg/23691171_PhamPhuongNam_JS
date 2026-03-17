import { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <form className="login-form">
            <button className="form-close-btn" type="button" onClick={() => setIsVisible(false)}>×</button>
            <h1 className="form-title">Đăng nhập</h1>
            <label className="username-label" htmlFor="username">Tên đăng nhập:</label>
            <input className="form-username" type="text" name="username" id="username" placeholder="Tên đăng nhập"/> 
            <label className="password-label" htmlFor="password">Mật khẩu:</label>
            <input className="form-password" type="password" name="password" id="password" placeholder="Mật khẩu" />
            <button className="form-button" type="submit">Login</button>
        </form>
    );
}

export default LoginForm;