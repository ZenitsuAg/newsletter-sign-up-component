import { useContext } from "react"
import { AppContext } from "./AppContext"
import Button from "./Button"

function SuccessMsg({ onDismiss }) {
    const { email } = useContext(AppContext);

    return (
        <div className="flex flex-col justify-around h-screen p-5">
            <div>
                <img src="./assets/images/icon-success.svg" 
                alt="success-icon" 
                className="max-w-[150px] self-start mb-9"
                />
                <h1 className="text-4xl font-bold text-dark-slate-grey">
                    Thanks for subscribing!
                </h1>
                <p className="text-charcoal-grey">
                    A confirmation email has been sent to <strong>{email}. </strong>  
                    Please open it and click the button inside to confirm your subscription.
                </p>
            </div>
            <div>
                <Button type={'reset'} text={'Dismiss message'} onClick={onDismiss}/>
            </div>
            
        </div>
    )
}

export default SuccessMsg