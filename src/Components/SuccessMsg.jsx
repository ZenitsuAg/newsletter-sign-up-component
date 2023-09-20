import { useContext } from "react";
import { AppContext } from "./AppContext";
import Button from "./Button";
import iconSuccess from "./../../assets/images/icon-success.svg";

function SuccessMsg({ onDismiss }) {
    const { email } = useContext(AppContext);

    return (
        <div className="flex items-center justify-center h-screen md:bg-charcoal-grey">
            <div className="flex flex-col h-screen justify-around md:justify-center md:rounded-3xl md:p-10 p-5 max-w-[375px] md:max-h-[375px] md:bg-white">
                <div className="">
                    <img
                        src={iconSuccess}
                        className="max-w-[150px] md:max-w-[50px] self-start mb-9 md:mb-3"
                    />
                    <h1 className="mb-3 text-4xl font-bold text-dark-slate-grey">
                        Thanks for subscribing!
                    </h1>
                    <p className="text-sm text-charcoal-grey">
                        A confirmation email has been sent to{" "}
                        <strong>{email}. </strong>
                        Please open it and click the button inside to confirm
                        your subscription.
                    </p>
                </div>
                <div>
                    <Button
                        type={"reset"}
                        text={"Dismiss message"}
                        onClick={onDismiss}
                    />
                </div>
            </div>
        </div>
    );
}

export default SuccessMsg;
