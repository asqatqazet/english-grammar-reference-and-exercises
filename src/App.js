import './App.css';
import grammarItems from "./routes.json"
import List from "./components/list/List";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SimplePresent} from "./components/VerbTense/SimplePresent/SimplePresent";


const layout = () => (
    <div className="flex flex-col flex-wrap h-screen justify-start  gap-5">
        {
            grammarItems.map((value, index) => <List key={index} {...value} index={index}/>)
        }
    </div>
)

function App() {

    return (
        <BrowserRouter>
            <div className="md:container m-auto p-9">
                <Routes>

                    <Route path="/" element={layout()}/>
                    <Route path="/Simple-Present-Verb-Tense" element={<SimplePresent/>}/>
                    <Route path="/*" element={<div>Ops, I will constantly update the relevant pages</div>}/>

                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
