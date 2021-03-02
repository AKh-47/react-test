import React from "react";
import AllFunds from "./AllFunds";

const store = {
    userInfo: {
        userId: 1,
        userType: "GP",
        firstName: "Scott",
        lastName: "Willington",
        teamIds: [1,2,3,4,5],
        fundIds: [10,11,12,13,20,21,22]
    },
    fundsOverview: {
        active: 4,
        closed: 3,
    },
    funds: [
        {
            id: 10,
            fundName: "Fund A1",
            RegNumber: "IND#1234",
            Corpus: 2021,
            Continent: "Asia",
            DisplayAddress: "45A Block 5, Lal Street, Bombay, India",
            IncorporationYear: 2015,
            pinned: true,
            active: true
        },
        {
            id: 11,
            fundName: "Fund A2",
            RegNumber: "SG#2025",
            Continent: "Asia",
            Corpus: 2020,
            DisplayAddress: "Block 3, Orchard Boulevard, Singapore",
            IncorporationYear: 2016,
            pinned: true,
            active: false 
        },
        {
            id: 12,
            fundName: "Fund A3",
            RegNumber: "IND#3131",
            Corpus: 2020,
            Continent: "Asia",
            DisplayAddress: "40A Block 5, Lal Street, Bombay, India",
            IncorporationYear: 2018,
            pinned: true,
            active: false 
        },
        {
            id: 13,
            fundName: "Fund A4",
            RegNumber: "SG#0004",
            Continent: "Asia",
            Corpus: 2021,
            DisplayAddress: "Block 5, Orchard Boulevard, Singapore",
            IncorporationYear: 2017,
            pinned: true,
            active: true
        },
        {
            id: 20,
            fundName: "Fund B1",
            RegNumber: "MA#1234",
            Corpus: 2021,
            Continent: "Africa",
            DisplayAddress: "A.ENL HOUSE, Vivea Business Park, Moka, Mauritius",
            IncorporationYear: 2012,
            pinned: true,
            active: true
        },
        {
            id: 21,
            fundName: "Fund B2",
            RegNumber: "MA#2025",
            Continent: "Africa",
            Corpus: 2020,
            DisplayAddress: "Block 3, Vivea Business Park, Moka, Mauritius",
            IncorporationYear: 2016,
            pinned: true,
            active: false 
        },
        {
            id: 22,
            fundName: "Fund B3",
            RegNumber: "MA#3131",
            Corpus: 2021,
            Continent: "Africa",
            DisplayAddress: "VC Building, Vivea Business Park, Moka, Mauritius",
            IncorporationYear: 2018,
            pinned: true,
            active: true
        },
    ]
}

const GP = () => {
    return <AllFunds store={store} />;
}

export default GP;