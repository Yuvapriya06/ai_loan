import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import ChatMessage from "./ChatMessage";
import LoanForm from "./LoanForm";
import ResultCard from "./ResultCard";
import { predictLoan } from "../services/api";

function ChatBot() {

    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "👋 Hello! Welcome to the AI Loan Assistant.\n\nType 'apply loan' to begin your application."
        }
    ]);

    const [input, setInput] = useState("");

    const [showForm, setShowForm] = useState(false);

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const chatEndRef = useRef(null);

    useEffect(() => {

        chatEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });

    }, [messages, result]);

    const sendMessage = () => {

        if (input.trim() === "") return;

        const userMessage = {

            sender: "user",

            text: input

        };

        setMessages(prev => [...prev, userMessage]);

        if (input.toLowerCase().includes("apply")) {

            setTimeout(() => {

                setMessages(prev => [

                    ...prev,

                    {

                        sender: "bot",

                        text: "Great! Please complete the loan application below."

                    }

                ]);

                setShowForm(true);

            }, 500);

        }

        else {

            setTimeout(() => {

                setMessages(prev => [

                    ...prev,

                    {

                        sender: "bot",

                        text: "Please type 'Apply Loan' to start a new application."

                    }

                ]);

            }, 500);

        }

        setInput("");

    };
        const handlePrediction = async (formData) => {

        try {

            setLoading(true);

            const response = await predictLoan(formData);

            setResult(response);

            setMessages(prev => [

                ...prev,

                {

                    sender: "bot",

                    text: "✅ Loan prediction completed successfully."

                }

            ]);

        }

        catch (error) {

            console.log(error);

            setMessages(prev => [

                ...prev,

                {

                    sender: "bot",

                    text: "❌ Unable to connect to the prediction server."

                }

            ]);

        }

        finally {

            setLoading(false);

        }

    };
        return (

        <div className="chat-container">

            <Header />

            <div className="chat-body">

                {

                    messages.map((msg, index) => (

                        <ChatMessage

                            key={index}

                            message={msg}

                        />

                    ))

                }

                {

                    showForm && (

                        <LoanForm

                            onPredict={handlePrediction}

                        />

                    )

                }

                {

                    loading && (

                        <ChatMessage

                            message={{

                                sender: "bot",

                                text: "⏳ Processing your application..."

                            }}

                        />

                    )

                }

                {

                    result && (

                        <ResultCard

                            result={result}

                        />

                    )

                }

                <div ref={chatEndRef}></div>

            </div>
                        <div className="chat-input">

                <input

                    type="text"

                    placeholder="Type a message..."

                    value={input}

                    onChange={(e) => setInput(e.target.value)}

                    onKeyDown={(e) => {

                        if (e.key === "Enter") {

                            sendMessage();

                        }

                    }}

                />

                <button

                    onClick={sendMessage}

                >

                    ➤

                </button>

            </div>

        </div>

    );

}

export default ChatBot;