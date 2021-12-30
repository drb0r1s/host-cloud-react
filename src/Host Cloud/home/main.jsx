import React, { useState, useRef } from "react";
import { homeMainData } from "../data";

const Main = () => {
    const [value, setValue] = useState("");
    const [isShowing, setIsShowing] = useState(false);
    
    const domainSearch = useRef(null);
    
    function submitDomain(event) {
        event.preventDefault();
        setIsShowing(true);
        
        setTimeout(() => {
            typing(value);
            setValue("");

            setTimeout(() => domainSearch.current.style.opacity = "0", 9500);
            setTimeout(() => setIsShowing(false), 10000);
        }, 500);
    }

    function typing(domain) {
        const text = `Searching for ${domain}...`;
        const textField = domainSearch.current;
        let i = 0;
        let j = 0;

        textField.style.opacity = "1";

        startTyping();

        function startTyping() {
            if(text.length > i) {
                textField.innerHTML += text.charAt(i);
                i++;
            }

            if(text.length === i) deleteTyped();

            setTimeout(startTyping, text.length === i ? 50 : 100);
        }

        function deleteTyped() {
            if(domain.length + 4 > j) {
                const deleteText = text.substring(0, text.length - j);
                textField.innerHTML = deleteText;
                j++;
            }

            if(domain.length + 4 === j) {
                i = 13;
                j = 0;
            }
        }
    }
    
    return(
        <div className="main" id="main">
            <h1>search your domain</h1>

            <form onSubmit={submitDomain}>
                <input
                    type="text"
                    id="domain"
                    placeholder="Enter your domain here..."
                    maxLength="16"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />

                <button>search now</button>
            </form>

            {isShowing && <strong ref={domainSearch}></strong>}

            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 checkbox-holder d-flex align-items-center justify-content-between">
                        {homeMainData.map((input) => {
                            return(
                                <div key={input.id} className="main-checkbox">
                                    <input
                                        type="checkbox"
                                        id={input.name}

                                    />

                                    <label
                                        htmlFor={input.name}
                                    >{`.${input.name} ($${input.price}/yr)`}</label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;