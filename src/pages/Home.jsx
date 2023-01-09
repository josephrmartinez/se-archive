import Header from "../components/Header"

export default function Home() {
    return (
    <>
        <Header
            searchClass="displayNone" 
            pageTitle={"self-empathy"}
            icon="src/assets/icons/info-circle.svg"/>
        
        <div className="container">
           <SectionButton
            text="They're being"
            buttonClass="complaint"/>
            <SectionButton
            text="I'm feeling"
            buttonClass="feeling"/>     
        </div>
            
        
        </>
    )
}

function SectionButton({text, buttonClass}) {
    return (
        <div className={`sectionButton ${buttonClass}`}>{text}</div>
    )
}