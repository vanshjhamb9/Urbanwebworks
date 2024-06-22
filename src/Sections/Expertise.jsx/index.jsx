import image from "../../assets/Illustration & Title.png"
import Rectangle from "../../assets/Rectangle.png"
import Rectangle2 from "../../assets/Rectangle (1).png"

const Expertise = () => {
    return (
        <div id="expertise">
        <div className="relative z-50 flex md:flex-row sm:flex-col xs:flex-col gap-10 justify-evenly items-center p-[2rem] mt-20 md:-mx-10 xs:-mx-4 py-8 " >
            <img src={image} className="md:w-[55%] sm:w-[65%] xs:w-[75%] " />
            <div className="flex flex-col z-100 gap-10 p-8 ">
                <h1 className="font-semibold font-intern text-[2.5rem] text-richblack-5 gap-2 ">Our Journey: Building a Digital Empire with <span className="font-bold text-[#A020F0]">URBAN WEBWORKS </span> </h1>
                <div className="font-intern text-richblack-200 text-[1rem]">Building beyond boundaries, we engineer custom web and app solutions tailored to your unique needs. Leveraging the latest technologies and best practices, we code with precision to elevate your digital presence to new heights.</div>
                
                <div class="grid md:grid-cols-3 md:grid-row-3 xs:grid-cols-2 gap-2 md:w-[80%] xs:w-[110%]">
  <div class="p-3 font-mono border bg-purple text-richblack-900 border-richblack-800 border-richblack-5 rounded-2xl text-richblack-25 h-12 align-center text-center inline-block" style={{ width: 'min-content', whiteSpace: 'nowrap'}}>
    Marketing
  </div>
  <div class="p-3 font-mono border border-richblack-5 rounded-2xl text-richblack-25 h-12 align-center text-center inline-block" style={{ width: 'min-content', whiteSpace: 'nowrap'}}>
    SEO
  </div>
  <div class="p-3 font-mono border border-richblack-5 rounded-2xl text-richblack-25 h-12 align-center text-center inline-block " style={{ width: 'min-content', whiteSpace: 'nowrap'}}>
   Company profile
  </div>
  <div class="p-3 font-mono border border-richblack-5 rounded-2xl text-richblack-25 h-12 align-center text-center inline-block col-span-3 md:col-span-1 xs:col-span-1" style={{ width: 'min-content', whiteSpace: 'nowrap'}}>
    Social Media
  </div>
  <div class="p-3 font-mono border bg-purple text-richblack-900 border-richblack-800 rounded-2xl text-richblack-25 h-12 align-center text-center inline-block md:col-span-2 xs:col-span-2" style={{ width: 'min-content', whiteSpace: 'nowrap'}}>
  Webflow Maintenance
  </div>
  <div class="p-3 font-mono border border-richblack-5 rounded-2xl text-richblack-25 h-12 align-center text-center inline-block" style={{ width: 'min-content', whiteSpace: 'nowrap'}}>
    UI Design
  </div>
  <div class="p-3 font-mono border border-richblack-5 rounded-2xl text-richblack-25 h-12 align-center text-center inline-block" style={{ width: 'min-content', whiteSpace: 'nowrap'}}>
    Mobile Apps
  </div>
  <div class="p-3 font-mono border bg-purple text-richblack-900 border-richblack-800 border-richblack-5 rounded-2xl text-richblack-25 h-12 align-center text-center inline-block md:col-span-2 xs:col-span-1" style={{ width: 'min-content', whiteSpace: 'nowrap'}}>
  Web development
  </div>
  <div class="p-3 font-mono border border-richblack-5 rounded-2xl text-richblack-25 h-12 align-center text-center inline-block" style={{ width: 'min-content', whiteSpace: 'nowrap'}}>
    Visual Editing
  </div>
</div>






            </div>
            <p className=" absolute z-10 border-2 -right-[14rem] -top-40 opacity-[20%] border-white rounded-full w-[30rem] h-[30rem] rotate-45"></p>
            <img className="absolute z-1 w-[60%] -left-[12%] top-[30%]" src={Rectangle} />
            <img className="absolute z-1 w-[50%] z-10 opacity-[80%] -right-[12%] -top-[40%]" src={Rectangle2} />
        </div>
        </div>
    );
}

export default Expertise;