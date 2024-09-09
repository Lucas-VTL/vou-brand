import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "../src/Components/Sidebar";
import Homepage from "./Components/Homepage.jsx";
import VoucherManage from "./Components/VoucherManage.jsx";
import UserManage from "./Components/EventManage.jsx";
import Statistics from "./Components/Statistics.jsx";

function App() {
    const [selectedIndex, setSelected] = useState(0);

    useEffect(() => {
        return () => {};
    }, [selectedIndex]);

    const RenderComponent = ({ index }) => {
        switch (index) {
            case 0:
                return <Homepage setSelected={setSelected} />;
            case 1:
                return <UserManage />;
            case 2:
                return <VoucherManage />;
            case 3:
                return <Statistics />;
            default:
                return <Homepage />;
        }
    };

    return (
        <div>
            <div className="bg-white h-screen ">
                <Sidebar setSelected={setSelected} />
                <RenderComponent index={selectedIndex} />
            </div>
        </div>
    );
}

export default App;
