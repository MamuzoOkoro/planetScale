
const Header = () => {
  return (
    <div className="w-[100%] py-[12px] flex items-center justify-center flex-col bg-[rgb(255,255,255)]">
        {/* main */}
        <div className="w-[90%]">
            {/* top */}
            <div className="w-[100%] py-[8px] rounded-[20px] flex items-center justify-center bg-[rgb(17,17,17)] my-4">
                <nav className="text-white text-[15px] hover:cursor-pointer hover:text-[#ff6a00e6]"> PlanetScale is bringing vector search and storage to MySQL</nav>
            </div>
            {/* bottom */}
            <div className="w-[100%] py-[5px] flex items-center justify-between">
                {/* navholder */}
                <div className="gap-[30px] flex text-[15px] text-[#000000b4]">
                {/* logo */}
                <div>logo</div>
                    <nav className="hover:cursor-pointer hover:text-[#ff6a00e6]">Products</nav>
                    <nav className="hover:cursor-pointer hover:text-[#ff6a00e6]">Solutions</nav>
                    <nav className="hover:cursor-pointer hover:text-[#ff6a00e6]">Resources</nav>
                    <nav className="hover:cursor-pointer hover:text-[#ff6a00e6]">Documentation</nav>
                    <nav className="hover:cursor-pointer hover:text-[#ff6a00e6]">Pricing</nav>
                </div>
                {/* hold */}
                <div className="gap-[30px] flex text-[15px] text-[#000000b4] items-center">
                <nav className="hover:cursor-pointer hover:text-[#ff6a00e6]">Contact</nav>
                <nav className="hover:cursor-pointer hover:text-[#ff6a00e6]">Sign in</nav>
                <button className="py-[8px] px-[15px] border-[1px] rounded-[20px] border-[rgb(201,201,201)] text-[black] hover:cursor-pointer hover:border-[1px] hover:border-[#ff6a00e6]">
                    Get started</button>
                </div>
            </div>
        </div>
        {/* main */}
    </div>
  )
}

export default Header