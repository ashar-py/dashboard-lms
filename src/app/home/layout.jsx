
import Footer from "@/ui/footer/footer";
import Navbar from "@/ui/navbar/navbar";
import Breadcrumbs from "../../components/Breadcrumbs";

const Layout = ({children}) => {
    return (
        <div>
            
            <div >
                <Navbar/>
                <Breadcrumbs/>
                {children}
                <Footer/>
            </div>
        </div>
    )
}

export default Layout