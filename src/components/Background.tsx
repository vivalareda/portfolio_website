


const Background = ({ children }: { children: React.ReactNode }) => {
    return (
     <div className="bg-black">
        <div className=" bg-white h-[500px] aspect-square rounded-full absolute"></div>
        {children}
     </div>
     );
}

export default Background;
