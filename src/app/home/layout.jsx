import Footer from "@/ui/footer/footer";
import Navbar from "@/ui/navbar/navbar";

const Layout = ({children}) => {
    return (
        <div>
            
            <div >
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </div>
    )
}

export default Layout