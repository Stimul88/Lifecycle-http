
import './App.css'
import {Top, Watches} from "./components";
import {Input} from "./components/input/Input.tsx";
import React, {useEffect, useState} from "react";
import moment = require("moment");

function App() {
  // const [count, setCount] = useState(0)

    const loadData = () => {
        console.log(moment())

        // setTimeout(() => {
        //     fetchApi()
        //         .then(data => {
        //             console.log('Data is loaded at ' + new Date());
        //             const usd = data.find(c => c.title === 'usd');
        //
        //             setUsd(usd.value);
        //             setLoading(false);
        //             setUpdated(new Date().getTime());
        //         })
        // }, 1000);
    }

    useEffect(loadData, []);
    useEffect(loadData, [updated]);

    return (
    <>
        <div className="container">
            <Top>
                <Input title={"Название"} name={"name"}/>
                <Input title={"Временная зона"} name={"time-zone"}/>
                <div className="button-box">
                    <button className="add"> Добавить</button>
                </div>
            </Top>
            <Watches>
                <time className="clock">
                    <span className="clock__hand clock__hand--hour"></span>
                    <span className="clock__hand clock__hand--minute"></span>
                    <span className="clock__hand clock__hand--second"></span>
                </time>
            </Watches>

        </div>
    </>
  )
}

export default App
