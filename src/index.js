import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
    BrowserRouter,
    Routes,
    Route,
   } from "react-router-dom";
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Library } from './NewLibrary';
import { Gallery } from './Gallery';
import { ContactForm } from './ContactForm';
import { Galleries } from './Galleries';
import { 
    EventOneImages, 
    EventOneImageNames, 
    EventTwoImages, 
    EventTwoImageNames, 
    EventThreeImages, 
    EventThreeImageNames, 
    EventFourImages, 
    EventFourImageNames 
} from './imageFiles';
import { gameInfo, smallGameInfo } from './data/gameInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/get-gaming/" element={<App />} />
            <Route path="/get-gaming/Library" element={<Library />} />
            <Route path="/get-gaming/Gallery" element={<Galleries />} />
            <Route 
                path="/Aug26-2022-Gallery" 
                element={
                    <Gallery 
                        header='Get Coding - August 26 2022' 
                        images={EventOneImages} 
                        imageNames={EventOneImageNames} 
                        gameSiteURLOne={gameInfo.cosmicEncounter.gameSiteURL}
                        gameImgURLOne={gameInfo.cosmicEncounter.gameImgURL}
                        altOne={gameInfo.cosmicEncounter.alt}
                    />} 
            />
            <Route 
                path="/Sept14-2022-Gallery" 
                element={
                    <Gallery 
                        header='NetBenefit &amp; Get Coding - Sept 14 2022' 
                        images={EventTwoImages} 
                        imageNames={EventTwoImageNames} 
                        gameSiteURLOne={gameInfo.cosmicEncounter.gameSiteURL}
                        gameImgURLOne={gameInfo.cosmicEncounter.gameImgURL}
                        altOne={gameInfo.cosmicEncounter.alt}
                    />} 
            />
            <Route 
                path="/Oct13-2022-Gallery" 
                element={
                    <Gallery 
                        header='Mysa &amp; Get Coding - Oct 13 2022' 
                        images={EventThreeImages} 
                        imageNames={EventThreeImageNames} 
                        gameSiteURLOne={gameInfo.cosmicEncounter.gameSiteURL}
                        gameImgURLOne={gameInfo.cosmicEncounter.gameImgURL}
                        altOne={gameInfo.cosmicEncounter.alt}
                        gameSiteURLTwo={smallGameInfo.theResistance.gameSiteURL}
                        gameImgURLTwo={smallGameInfo.theResistance.gameImgURL}
                        altTwo={smallGameInfo.theResistance.alt}
                    />} 
            />
            <Route 
                path="/Mar27-2023-Gallery" 
                element={
                    <Gallery 
                        header='Get Gaming with NDev - Mar 27 2023' 
                        images={EventFourImages} 
                        imageNames={EventFourImageNames} 
                        gameSiteURLOne={gameInfo.cosmicEncounter.gameSiteURL}
                        gameImgURLOne={gameInfo.cosmicEncounter.gameImgURL}
                        altOne={gameInfo.cosmicEncounter.alt}
                        gameSiteURLTwo={gameInfo.mindmgmt.gameSiteURL}
                        gameImgURLTwo={gameInfo.mindmgmt.gameImgURL}
                        altTwo={gameInfo.mindmgmt.alt}
                    />} 
            />
            <Route path="/get-gaming/ContactForm" element={<ContactForm />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                    <p>Hmm.. something is missing..</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>
    // <React.StrictMode >
    //     <App / >
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();