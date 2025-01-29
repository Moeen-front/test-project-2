import aks1 from "./assets/home.jpg"
const Home = () => {
  return (
    <div className="home-text" style={{textAlign:"center"}}>
        <h1> کتابخانه کانون فرهنگی قلم </h1>
        <img src={aks1} alt=""  width={"700px"}/>
        
    </div>
  )
}

export default Home