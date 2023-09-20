import { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import Button from "./Button";
import List from "./List";
import bgMobile from "./../../assets/images/illustration-sign-up-mobile.svg";
import bgDesktop from "./../../assets/images/illustration-sign-up-desktop.svg";

export default function SignUp({ onEmailValidation }) {
    const [status, setStatus] = useState("typing");
    const { email, setEmail } = useContext(AppContext);

    function handleChange(e) {
        setEmail(e.target.value);
        setStatus("typing");
    }

    function checkEmail(e) {
        e.preventDefault();
        const regexPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (regexPattern.test(email)) {
            onEmailValidation(true);
        } else {
            setStatus("error");
            return false;
        }
    }

    return (
        <div className="h-screen md:bg-charcoal-grey md:h-screen md:flex md:justify-center md:items-center">
            <div className="max-w-[375px] mx-auto bg-white md:max-w-[800px] md:flex md:p-5 md:justify-center md:items-center md:rounded-3xl md:flex-row-reverse md:text-sm">
                <div>
                    <picture>
                        <source media="(min-width:768px)" srcSet={bgDesktop} />
                        <img src={bgMobile} alt="sign-up-illustration" />
                    </picture>
                </div>
                <div>
                    <div className="p-6 text-charcoal-grey">
                        <h1 className="my-4 text-5xl font-bold text-dark-slate-grey">
                            Stay updated!
                        </h1>
                        <p className="my-4 ">
                            Join 60,000+ product managers receiving monthly
                            updates on:
                        </p>

                        <div>
                            <List text={"Product discovery and building what matters"} />
                            <List text={"Measuring to ensure updates are a success"} />
                            <List text={"And much more!"} />
                        </div>

                        <form className="mt-9">
                            <div className="flex items-center justify-between text-xs">
                                <label htmlFor="email" className="font-bold">
                                    Email address
                                </label>
                                {status === "error" && (
                                    <p className="text-red-600">
                                        Valid email required
                                    </p>
                                )}
                            </div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="email@company.com"
                                onChange={handleChange}
                                className={`block p-3 border rounded-lg w-full mt-1 ${
                                    status === "error" &&
                                    "bg-red-300 text-pink-500"
                                }`}
                            />

                            <Button
                                type={"submit"}
                                // disabled={email.length === 0}
                                text={"Subscribe to monthly newsletter"}
                                onClick={checkEmail}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
