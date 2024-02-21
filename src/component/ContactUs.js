const ContactUs = ()=> {
    return(
        <div>
            <h1>Welcome to contactUs page</h1>
            <form>
                <input type="text" placeholder="Message" className="border border-black p-2 m-2" ></input>
                <input type="text" placeholder="Message2" className="border border-black p-2 m-2" ></input>
                <button className="border border-black p-2 m-2 bg-green-200">Submit</button>
            </form>
        </div>
    )
}
export default ContactUs;