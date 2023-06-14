import React from 'react';

import Feature from 'components/Feature';
import Header from 'components/Header';
import EditorPick from 'components/EditorPick';
import MoreNews from 'components/MoreNews';

function App() {
    return (
        <>
            <Header />

            <main className='relative mt-24'>
                <Feature />

                <EditorPick />

                <MoreNews />
            </main>
        </>
    );
}

export default App;
