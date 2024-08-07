import { dashboardNavigation } from "./components/Navigation"

export default function RootLayout({ children }) {
    return (
        <div className="gap-3">
            <div className="flex gap-5 bg-[#e9edf3]">
                <aside className="w-[260px] h-full bg-[#fff] fixed top-0 left-0 py-3 px-3 shadow-custom">
                    <div className="flex flex-col">
                        <img src="/kursbu-logo.webp" alt="" /> 
                        <div className="mt-6">
                            <h3 className="text-2xl text-black mb-[15px] font-bold">Yönetim</h3>
                            {dashboardNavigation.map(dasNavigate => (
                                <div key={dasNavigate.dashid} className="mb-[10px]">
                                    {dasNavigate.link}
                                </div>
                            ))}
                        </div>
                    </div>  
                </aside>
                <div className="w-full h-screen ml-[260px]">
                    {children}
                </div>
            </div>
        </div>
    )
}