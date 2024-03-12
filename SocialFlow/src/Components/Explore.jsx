import "./styles/explore.css"
import exlploreBackground from "./image/explore-img.png"
import exlploreBackground3 from "./image/explore-img3.jpg"
import exlploreBackground2 from "./image/explore-img2.png"
// import exlploreBackground5 from "./image/explore-img6.jpg"



const Explore=()=>{
    return(
        <div className="explore-main">
            <div className="main-image  ">
             <img className="image-3" src={exlploreBackground3} alt="" />
            <img className="image-2" src={exlploreBackground2} alt="" /> 
            <img className="image-1" src={exlploreBackground} alt="" />
            </div>
            <div className="main-text  ">
                    <h1 className=" text-4xl sm:text-4xl md:text-5xl lg:text-6xl pt-4 pb-4 ml-6 pr-4 text-red-400 ">Search for an idea</h1>
                   
                   <div className="text-p"  ><p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl ">
                    What do you want to try next? 
                    Think of something you’re into—like 
                    “easy chicken dinner”—and see what you find.</p>
                    <button className="bg-red-500 text-white mt-8 ml-40">Explore</button>
                    </div> 
            </div>
        </div>
    )
}
export default Explore;