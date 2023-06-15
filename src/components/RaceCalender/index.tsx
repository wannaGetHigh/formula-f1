import React from 'react';

import BahrainImg from 'assets/images/flags/Bahrain.jpg'
import SaudiArabia from 'assets/images/flags/Saudi-Arabia.jpg'
import Australia from 'assets/images/flags/Australia.jpg'
import Azerbaijan from 'assets/images/flags/azerbaijan.jpg'
import Monaco from 'assets/images/flags/Monaco.jpg'
import Spain from 'assets/images/flags/spanish-flag.jpg'
import Canada from 'assets/images/flags/canada.jpg'
import Austria from 'assets/images/flags/austria.jpg'
import GreatBritain from 'assets/images/flags/uk.jpg'
import Hungary from 'assets/images/flags/hungary.jpg'
import Belgium from 'assets/images/flags/Belgium.jpg'
import Netherlands from 'assets/images/flags/Netherlands.jpg'
import Italy from 'assets/images/flags/Italy.jpg'
import Singapore from 'assets/images/flags/Singapore.jpg'
import Japan from 'assets/images/flags/Japan.jpg'
import Qatar from 'assets/images/flags/Qatar.jpg'
import UnitedStates from 'assets/images/flags/United-States.jpg'
import Mexico from 'assets/images/flags/mexico.jpg'
import Brazil from 'assets/images/flags/brazil.jpg'
import CalenderArticle from './CalenderArticle';

const raceCalenderList = [
    {
        city: 'Bahrain',
        linkText: 'FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2023',
        meetingKey: 1141,
        meetingNumber: 1,
        image: BahrainImg,
        startAndEndDate: 'March 03-05',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Saudi Arabia',
        linkText: 'FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2023',
        meetingKey: 1142,
        meetingNumber: 2,
        image: SaudiArabia,
        startAndEndDate: 'March 17-19',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Australia',
        linkText: 'FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2023',
        meetingKey: 1143,
        meetingNumber: 3,
        image: Australia,
        startAndEndDate: 'March 31-April 02',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Azerbaijan',
        linkText: 'FORMULA 1 AZERBAIJAN GRAND PRIX 2023',
        meetingKey: 1207,
        meetingNumber: 4,
        image: Azerbaijan,
        startAndEndDate: 'April 28-30',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Monaco',
        linkText: 'FORMULA 1 GRAND PRIX DE MONACO 2023',
        meetingKey: 1210,
        meetingNumber: 7,
        image: Monaco,
        startAndEndDate: 'May 26-28',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Spain',
        linkText: 'FORMULA 1 AWS GRAN PREMIO DE ESPAÑA 2023',
        meetingKey: 1211,
        meetingNumber: 8,
        image: Spain,
        startAndEndDate: 'June 02-04',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Canada',
        linkText: 'FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2023',
        meetingKey: 1212,
        meetingNumber: 9,
        image: Canada,
        startAndEndDate: 'June 16-18',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Austria',
        linkText: 'FORMULA 1 ROLEX GROSSER PREIS VON ÖSTERREICH 2023',
        meetingKey: 1213,
        meetingNumber: 10,
        image: Austria,
        startAndEndDate: 'June 30-July 02',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Great Britain',
        linkText: 'FORMULA 1 ARAMCO BRITISH GRAND PRIX 2023',
        meetingKey: 1214,
        meetingNumber: 11,
        image: GreatBritain,
        startAndEndDate: 'July 07-09',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Hungary',
        linkText: 'FORMULA 1 QATAR AIRWAYS HUNGARIAN GRAND PRIX 2023',
        meetingKey: 1215,
        meetingNumber: 12,
        image: Hungary,
        startAndEndDate: 'July 21-23',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Belgium',
        linkText: 'FORMULA 1 MSC CRUISES BELGIAN GRAND PRIX 2023',
        meetingKey: 1216,
        meetingNumber: 13,
        image: Belgium,
        startAndEndDate: 'July 28-30',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Netherlands',
        linkText: 'FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2023',
        meetingKey: 1217,
        meetingNumber: 14,
        image: Netherlands,
        startAndEndDate: 'August 25-27',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Italy',
        linkText: 'FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2023 ',
        meetingKey: 1218,
        meetingNumber: 15,
        image: Italy,
        startAndEndDate: 'September 01-03',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Singapore',
        linkText: 'FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2023 ',
        meetingKey: 1219,
        meetingNumber: 16,
        image: Singapore,
        startAndEndDate: 'September 15-17',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Japan',
        linkText: 'FORMULA 1 LENOVO JAPANESE GRAND PRIX 2023 ',
        meetingKey: 1220,
        meetingNumber: 17,
        image: Japan,
        startAndEndDate: 'September 22-24',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Qatar',
        linkText: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2023',
        meetingKey: 1221,
        meetingNumber: 18,
        image: Qatar,
        startAndEndDate: 'October 06-08',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'United States',
        linkText: 'FORMULA 1 LENOVO UNITED STATES GRAND PRIX 2023',
        meetingKey: 1222,
        meetingNumber: 19,
        image: UnitedStates,
        startAndEndDate: 'October 20-22',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Mexico',
        linkText: 'FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2023',
        meetingKey: 1223,
        meetingNumber: 20,
        image: Mexico,
        startAndEndDate: 'October 27-29',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
    {
        city: 'Brazil',
        linkText: 'FORMULA 1 ROLEX GRANDE PRÊMIO DE SÃO PAULO 2023',
        meetingKey: 1224,
        meetingNumber: 21,
        image: Brazil,
        startAndEndDate: 'November 03-05',
        driverOrTeamOrRaceSecondaryNavigation: false,
    },
];

const RaceCalender = () => {
    return (
        <div className="calender-container mt-10">
            <div className="flex overflow-x-auto h-full">
                {raceCalenderList.map((race, i) => (
                    <CalenderArticle key={i} {...race} />
                ))}
                <div className="my-5 border-r border-b rounded-br-2xl border-[#38383f] text-center min-w-[120px]" />
            </div>
        </div>
    );
};

export default RaceCalender;
