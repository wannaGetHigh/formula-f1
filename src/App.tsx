import React from 'react';

import Feature from 'components/Feature';
import Header from 'components/Header';
import EditorPick from 'components/EditorPick';
import MoreNews from 'components/MoreNews';
import RaceCalender from 'components/RaceCalender';

function App() {
    return (
        <>
            <Header />

            <main className='relative mt-24'>
                <Feature />

                <EditorPick />

                <MoreNews />

                <RaceCalender />
            </main>
        </>
    );
}

export default App;
