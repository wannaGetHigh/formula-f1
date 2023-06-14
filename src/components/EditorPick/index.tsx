import React from 'react';

import CardItem from 'components/shared/CardItem';

import EditorPickImg from 'assets/images/editor-pick/editor-pick.jpg';
import RaceWeekImg from 'assets/images/editor-pick/canada-race-week.jpg'
import ZhouGuanyuImg from 'assets/images/editor-pick/Zhou Guanyu.jpg'

const editorPickList = [
    {
        type: 'FEATURE',
        src: ZhouGuanyuImg,
        showBadge: true,
        desc: 'DRIVING STYLE: Zhou Guanyu reveals his style icons, his golden fashion rules – and why he needs a bigger wardrobe',
    },
    {
        type: 'FEATURE',
        src: RaceWeekImg,
        desc: 'IT’S RACE WEEK: 5 storylines we’re excited about ahead of the 2023 Canadian Grand Prix',
    },
    {
        type: 'TECHNICAL',
        showBadge: true,
        desc: 'TECH TUESDAY: The secrets behind Red Bull’s floor design and how it differs to rival teams’',
    },
    {
        type: 'FEATURE',
        showBadge: true,
        desc: 'Behind the scenes with Pierre Gasly: The Alpine racer on football, fans and frustration in Spain and Monaco',
    },
]

const EditorPick = () => {
    return (
        <div className="container py-10 mx-auto">
            <div className="flex flex-col lg:flex-row p-5 pl-0 border-[10px] border-l-0 border-red-main rounded-tr-2xl rounded-br-2xl">
                <CardItem
                    type="VIDEO"
                    desc="WATCH: F1 for beginners – Everything you need to know about F1"
                    icon="icon-play"
                    descClass='text-lg f1'
                    src={EditorPickImg}
                />
                <div className='grid grid-cols-2'>
                    {editorPickList.map((item, i) => (
                        <CardItem key={i} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EditorPick;
