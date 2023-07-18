import Footer from "./components/Footer"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {

  return (
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
  )
}

export default App
