import React from 'react';

import Feature from 'components/Feature';
import Header from 'components/Header';
import EditorPick from 'components/EditorPick';
import MoreNews from 'components/MoreNews';
import RaceCalender from 'components/RaceCalender';
import BillBoard from 'components/BillBoard';

function App() {
    return (
        <>
            <Header />

            <main className='relative mt-24'>
                <Feature />

                <EditorPick />

                <MoreNews />

                <RaceCalender />

                <BillBoard />
            </main>
        </>
    );
}

export default App;
