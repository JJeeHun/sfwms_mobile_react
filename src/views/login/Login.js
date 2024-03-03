import { useNavigate } from "react-router-dom";
import css from "./Login.module.css";

const Login = () => {
    const nav = useNavigate();

    return (
        <div className="container" style={{ justifyContent: "center" }}>
            <header>Warehouse Management System</header>
            <div className={css["title-img"]}>
                <img
                    src="https://img.freepik.com/free-photo/close-up-warehouse-view_23-2148923142.jpg?size=626&ext=jpg"
                    alt=""
                />
            </div>
            <form action="">
                <section className={css["login-info"]}>
                    <input type="text" placeholder="Id" />
                    <input type="password" placeholder="Password" />
                </section>
                <section className={css["login-option"]}>
                    <div className={css["option-box"]}>
                        <input type="checkbox" name="" id="autoLogin" />
                        <label htmlFor="autoLogin">Auto Login</label>
                    </div>
                    <div className={css["option-box"]}>
                        <input type="checkbox" name="" id="saveId" />
                        <label htmlFor="saveId">Save ID</label>
                    </div>
                </section>

                <button
                    className={css["login-btn"]}
                    onClick={() => {
                        nav("/");
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
