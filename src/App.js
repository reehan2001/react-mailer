import { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendMail = () => {
    axios
      .get("http://localhost:5000/", {
        params: {
          email,
          subject,
          message,
        },
      })
      .then(() => {
        
        console.log("success");
      })
      .catch(() => {
        console.log("failure");
      });
  };

  return (
    <div>
      <h2 className='mt-5 text-white text-3xl font-medium capitalize mb-8 text-center'>Send Mail</h2>
      <form className="max-w-3xl mx-auto flex flex-col justify-center dark:text-black">
      <input className="h-16 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        type="text"
        placeholder="Recipient Emails (comma separated)"
        onChange={(e) => setEmail(e.target.value.split(","))}
      />
      <br />
      <input  className="h-16 px-4   rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        type='text'
        placeholder="Subject"
        onChange={(e) => setSubject(e.target.value)}
      />
      <br />
      <textarea  className="h-52   rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none "
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
        maxLength={500}
      />
      <br />
      <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#FC2E20] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-1" onClick={sendMail}>Send Email</button>
      </form>
    </div>
  );
}

export default App;
