import { useState } from "react";
import { AppContext } from "./Components/AppContext";
import SignUp from "./Components/SignUp";
import SuccessMsg from "./Components/SuccessMsg";

function App() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false)

  function handleEmailValidation() {
      setEmailValid(true);
  };

  return (
      <main>
          <AppContext.Provider value={{ email, setEmail }}>
              <div className="App font-roboto">
                  {/* {email === 'a@b.com' ? <SignUp /> : <SuccessMsg />} */}
                  {emailValid ? (
                      <SuccessMsg />
                    ) : (
                      <SignUp onEmailValidation={handleEmailValidation} />
                    )}
              </div>
            </AppContext.Provider>
      </main>
  );
}

export default App;
