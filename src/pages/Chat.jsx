import { useState, useEffect } from "react";
import oilers from "../assets/oilers.png";
import panthers from "../assets/panthers.png";
import { Link } from "react-router-dom";
import { t } from "../i18n";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Chat() {
  const notify = () => {
    toast.error("Format du message incorrect!", {
      position: "top-right",
    });
  };

  const [messages1, setMessages1] = useState([
    { id: 1, user: "John Doe", text: "La partie hier soir était incroyable!" },
    { id: 2, user: "Mary Doe", text: "As-tu vu le but en fin de match!" },
    {
      id: 3,
      user: "John Doe",
      text: "Oui, c'était spectaculaire. J'ai hâte pour la prochaine partie.",
    },
    { id: 4, user: "Mary Doe", text: "....." },
  ]);

  const [newMessage1, setNewMessage1] = useState("");

  const handleSendMessage1 = () => {
    if (newMessage1.trim() && newMessage1.length < 100) {
      setMessages1([
        ...messages1,
        { id: messages1.length + 1, user: "Vous", text: newMessage1 },
      ]);
      setNewMessage1("");
    } else {
      notify();
    }
  };

  // -------------------------------------

  useEffect(() => {
    const scroller1 = document.getElementById("scroller1");
    scroller1.scrollTop = scroller1.scrollHeight;
    const scroller2 = document.getElementById("scroller2");
    scroller2.scrollTop = scroller2.scrollHeight;
  });

  const [messages2, setMessages2] = useState([
    { id: 1, user: "Mark Doe", text: "Les Panthers vont gagner ce soir!" },
    { id: 2, user: "Jeremiah Doe", text: "Je parie que non!" },
    {
      id: 3,
      user: "Mark Doe",
      text: "Tu vas voir, ils vont gagner par un écart de 2 buts!",
    },
    { id: 4, user: "Jeremiah Doe", text: "....." },
  ]);

  const [newMessage2, setNewMessage2] = useState("");

  const handleSendMessage2 = () => {
    if (newMessage2.trim() && newMessage2.length < 100) {
      setMessages2([
        ...messages2,
        { id: messages2.length + 1, user: "Vous", text: newMessage2 },
      ]);
      setNewMessage2("");
    } else {
      notify();
    }
  };

  return (
    <section className="w-full h-full flex flex-col items-center bg-slate-200  py-16">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center p-4 mb-10">
        {t("chat.title")}
      </h1>
      <div className="flex flex-col items-center justify-center w-10/12">
        <div className="flex justify-between items-center mb-6 w-full">
          <h2 className="text-2xl font-bold">Chat</h2>
          <Link to="/">
            <button className="bg-blue-500 text-white py-2 px-4 rounded duration-200 hover:bg-hover">
              {t("chat.leave")}
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
          <div className="bg-oilers text-white py-8 px-4 rounded-t-lg flex items-center justify-center gap-2">
            <img src={oilers} alt="Oilers Logo" className="w-12 h-12" />
            <h3 className="text-xl font-bold">{t("chat.oilersHub")}</h3>
          </div>
          <div
            id="scroller1"
            className="bg-gray-200 p-4 h-64 overflow-y-scroll"
          >
            {messages1.map((message) => (
              <div key={message.id} className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                    <span className="text-sm">{message.user.charAt(0)}</span>
                  </div>
                  <span className="ml-2 font-bold">{message.user}</span>
                </div>
                <p>{message.text}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center mt-4 p-4 bg-gray-300 rounded-b-lg">
            <input
              type="text"
              className="flex-1 p-2 border rounded mr-4"
              placeholder={t("chat.type")}
              value={newMessage1}
              onChange={(e) => setNewMessage1(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage1()}
            />
            <button
              className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center duration-200 hover:bg-hover"
              onClick={handleSendMessage1}
            >
              <span>&#9650;</span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-full mt-12">
          <div className="bg-panthers text-white py-8 px-4 rounded-t-lg flex items-center justify-center gap-2">
            <img src={panthers} alt="Panthers Logo" className="w-12 h-12" />
            <h3 className="text-xl font-bold">{t("chat.panthersHub")}</h3>
          </div>
          <div
            id="scroller2"
            className="bg-gray-200 p-4 h-64 overflow-y-scroll"
          >
            {messages2.map((message) => (
              <div key={message.id} className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                    <span className="text-sm">{message.user.charAt(0)}</span>
                  </div>
                  <span className="ml-2 font-bold">{message.user}</span>
                </div>
                <p>{message.text}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center mt-4 p-4 bg-gray-300 rounded-b-lg">
            <input
              type="text"
              className="flex-1 p-2 border rounded mr-4"
              placeholder={t("chat.type")}
              value={newMessage2}
              onChange={(e) => setNewMessage2(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage2()}
            />
            <button
              className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center duration-200 hover:bg-hover"
              onClick={handleSendMessage2}
            >
              <span>&#9650;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
