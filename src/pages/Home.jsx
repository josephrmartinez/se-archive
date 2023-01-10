import Header from "../components/Header"
import feelings from "../assets/feelings"
import complaints from "../assets/complaints"
import ReactDOM from 'react-dom/client'


const feelingList = []
for (var key of Object.keys(feelings)) {
    feelingList.push(key)
}

const complaintList = []
for (var key of Object.keys(complaints)) {
    complaintList.push(key)
}



export default function Home() {
    
    function loadFeelingDivList() {
        ReactDOM.render(
            <DivList
                wordList={feelingList}
                divClass="feeling" />, document.getElementById('root'));
    }

    function loadComplaintDivList() {
        ReactDOM.render(<DivList wordList={complaintList}
            divClass="complaint" />, document.getElementById("root"))
    }
    


    return (
    <>
        <Header
            searchClass="displayNone" 
            pageTitle={"self-empathy"}
            icon="src/assets/icons/info-circle.svg"/>
        
        <div className="container">
           <SectionButton
                    text="They're being"
                    buttonClass="complaint"
                    onClick={loadComplaintDivList} />
            <SectionButton
                    text="I'm feeling"
                    buttonClass="feeling"
                    onClick={loadFeelingDivList} />     
        </div>
            
        
        </>
    )
}

function SectionButton({onClick, text, buttonClass}) {
    return (
        <div onClick={onClick} className={`sectionButton ${buttonClass}`}>{text}</div>
    )
}