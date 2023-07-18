import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { AiFillHeart } from 'react-icons/ai';


function App() {

  return (
    <div>
      <div className="min-h-screen min-w-full flex items-center justify-center bg-[url('https://img.freepik.com/free-photo/3d-illustration-pen-putting-blue-ticks-paper_107791-15675.jpg?w=996&t=st=1689690145~exp=1689690745~hmac=ee326e4b09aa8eb40882b4dc947417c78d1ec3b4055c8fa3f443ed2e667dde25')] bg-center bg-cover object-fit bg-no-repeat px-3 md:px-0">
        <div className="animate__animated animate__jackInTheBox w-96 rounded-md border border-2 border-white relative overflow-hidden" style={{ background: "#FAF0D7", minHeight: "600px", height: "600px" }}>

          {/* // header area start here ==========================> */}
          <Header />
          {/* // header area end here ==========================> */}

          {/* main (tasks) area start here =====================> */}
          <Tasks />
          {/* main (tasks) area end here =====================> */}

          {/* // footer area start here ==========================> */}
          <Footer />
          {/* // footer area end here ==========================> */}

        </div>

      </div>

      <div className="hidden md:block">
        <p className=" animate__animated animate__fadeInLeft animate__delay-4s bg-white px-5 py-3 flex items-center rounded-md inline absolute bottom-10 left-20 font-bold">Build With <AiFillHeart className="text-red-500 mx-3 text-2xl" /> by <a className="ml-5 text-blue-500 text-lg" href="https://mdmuzahid.netlify.app/" target="_blank" rel="noopener noreferrer">Md.Muzahid</a></p>
      </div>

    </div>
  )
}

export default App
