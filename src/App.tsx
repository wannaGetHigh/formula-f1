import React from 'react';

import Feature from 'components/Feature';
import Header from 'components/Header';
import EditorPick from 'components/EditorPick';
import MoreNews from 'components/MoreNews';
import RaceCalender from 'components/RaceCalender';
import BillBoard from 'components/BillBoard';
import Store from 'components/Store';
import Topic from 'components/Topic';
import Footer from 'components/Footer';

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

                <Store />

                <Topic />
            </main>

            <Footer />
        </>
    );
}

export default App;
