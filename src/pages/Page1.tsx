import img from "../assets/image (2).jpeg";
// import img1 from "../assets/myfitnesspal-full.svg";
// import img2 from "../assets/e5ab317b-c9e0-4f5f-a85f-ed79790457f0.svg";
// import img3 from "../assets/6b8f7839-67bc-4c8c-98ab-a6cd0c652035.svg";
// import img4 from "../assets/af49a51f-3654-45e9-ba80-70bf940eb3d8.svg";

const Page1 = () => {
  return (
    <div className="w-[100%] py-[150px] flex items-center justify-center bg-[#f5f5f559] medium:py-[40px] small:hidden flex-col">
    <div className="w-[100%] h-[650px] medium:h-[420px] flex items-center justify-center "
    style={{
      background: "linear-gradient(to right top, #6f6bd1, #af60c0, #d859a4, #ef5e83, #f56f63, #f27355, #ee7847, #e77d39, #e66e35, #e55e34, #e34c34, #e13636)"
    }}
    >
      <div className="w-[90%] items-center flex justify-center">
        <div
          className="py-4 px-8 h-full w-full bg-gray-200 rounded-[10px]  backdrop-filter backdrop-blur-md bg-opacity-70 border border-gray-100
          ">
          <div className="py-4 px-4 bg-[#f7f7f7de] rounded-[10px]">
            <img src={img} className="rounded-[10px]" style={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            }} />
          </div>
        </div>
      </div>
    </div>
      {/* <div className="w-[90%] mt-20 h-[200px] bg-slate-400 items-center flex justify-center flex-col">
        <span>planetscale is trusted by</span>
        <div className="flex w-[50%] gap-[5px] flex-wrap bg-[red]">
          <img src={img1} className=""/>
          <img src={img2} className="w-[10%]"/>
          <img src={img1} className="w-[25%]"/>
          <img src={img1} className="w-[25%]"/>
          <img src={img3} className="w-[25%]"/>
          <img src={img1} className="w-[20%]"/>
          <img src={img1} className="w-[25%]"/>
        </div>
      </div> */}
    </div>
  );
};

export default Page1;

// background: rgb(244,16,36);
// background: linear-gradient(90deg, rgba(244,16,36,0.8491771708683473) 12%, rgba(214,82,202,0.8911939775910365) 54%, rgba(241,216,21,0.8379726890756303) 84%);

// boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
// backdrop-filter: "blur(5px)",
// -webkit-backdrop-filter: "blur(5px)",
// border: 1px solid "rgba(255, 255, 255, 0.3)",
// background: "rgba(255, 255, 255, 0.2)",