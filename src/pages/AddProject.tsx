export default function AddProjects(){
    return(
        <div className="flex flex-col justify-start items-start w-full max-w-[1200px] px-10 mx-auto font-saira">
            <h1 className="text-4xl font-bold">Add a new project:</h1>

            <div className="flex flex-col w-full gap-5">
                <input
                    type="text"
                    placeholder="Your github username:"
                    className="w-full p-3 rounded-full bg-[rgba(255,255,255,0.05)] border border-teal-200 outline-none "
                />

                <input
                    type="text"
                    placeholder="The repo name:"
                    className="w-full p-3 rounded-full bg-[rgba(255,255,255,0.05)] border border-teal-200 outline-none "
                />
        </div>
        </div>
    );

}