import { useState } from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";

export default function ComplaintEmpathySliders() {
    return (
        <>
            <Header
                searchClass="displayNone"
                pageTitle={SELECTED WORD FROM PREVIOUS MODULE}
                icon="src/assets/icons/arrow-left-short.svg"
            />
            <Slider
                sectionHeaderText="INITIAL FEELINGS"
                slidesArray={ }
                divClass="initialFeeling"
            />
            <Slider
                sectionHeaderText="UNDERLYING FEELINGS"
                slidesArray={ }
                divClass="underlyingFeeling"
            />
            <Slider
                sectionHeaderText="NEEDS"
                slidesArray={ }
                divClass="need"
            />
           
        </>
    )
}
