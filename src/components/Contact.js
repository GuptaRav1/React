const Contact = () => {
    return (
        <div>
            <div className="">
                <h1 className="text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 bg-green-700 py-28 md:text-5xl lg:text-6xl dark:text-white">
                    Contact Page
                </h1>
            </div>
            <div className="p-6 text-center">
                <form>
                    <input className="p-2 mx-2 border border-green-700" type="text" placeholder="name"></input>
                    <input className="p-2 mx-2 border border-green-700" type="text" placeholder="location"></input>
                    <button className="p-2 mx-2 font-bold text-white bg-green-700 border border-green-700">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact