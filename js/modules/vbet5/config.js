angular.module('vbet5').constant('Config', {
    'main': {
        enableDomainFixesForPartners: [29, 33, 43, 50, 112, 117, 132, 137, 138, 151, 157, 158, 200, 204, 260, 263, 266, 275, 279, 294, 297, 311, 323, 372, 373, 397, 425, 460, 463, 543, 544, 566, 574, 575, 585, 607, 620, 621, 625, 627, 628, 631, 635, 640, 642, 647, 668, 678, 680, 706, 707, 722, 723, 732, 737, 744, 745, 749, 753, 780, 787, 814, 815, 816, 818, 822, 823, 837, 838, 846, 911],
        prefetchLeftMenuHoveredLivesGames: {
            enabled: false,
            prefetchAfter: 250
        },
        siteTitle: {
            'arm': '',
            'rus': '',
            'eng': ''
        },
        header: {
            version: 2,
            showHelpIcon: true,
            showFavoriteIcon: true,
            haveFaq: false,
            openFaqAsPopup: false,
            hideClock: false,
            enableTimeZoneSelect: false, // show time zone switcher or not
            hideTopMenu: false,
            disableRegistrationAndLogin: false,
            customTemplate: false,
            messageIcon: {
                enabled: true,
                alwaysShow: false
            },
            statisticsLink: false,
            enableSettings: {
                authorized: true,
                notAuthorized: true
            }
        },
        footer: {
            disable: false,
            ageRestriction: false, // false to disable, number, to display that number with plus sign in footer.  e.g. 18
            disableCopyrightBlock: false,
            copyrightSince: 2003,
            poweredBy: true,  // 0 - don't show,  1 -show with link,  2 - show without link, 3 - show only all right reserved
            feedbackButton: {
                enabledLogin: false,
                enabledLogOut: false
            },
            showPaymentSystems: true,
            enableToTopButton: true,
            enableLicenseRowVersion: false
            //license_logos: [], // {href: "", img: "", height: "", width: "", target: "", show_on: "", hide_on: "", iframe: "link", css: ""}
        },
        homepage: [
            {
                /*
                 fullWidth: true,
                 maxWidth: 1310px,
                 items {
                     {
                         class: "",
                         templateUrl: "",
                         maxHeight: "300px".
                         height: "300px".
                         mediaHeight: "300px".
                     }
                 }*/
                items: [
                    {
                        class: "size-7",
                        templateUrl: "templates/homepage/mainSlider.html"
                    },
                    {
                        class: "size-5",
                        sliderSlug: "homepageRightBanners"
                    }
                ]
            },
            {
                items: [
                    {
                        class: "size-12",
                        templateUrl: "templates/homepage/productsSlider.html"
                    }
                ]
            },
            {
                items: [
                    {
                        class: "size-12",
                        templateUrl: "templates/homepage/featuredGamesSlider.html"
                    }
                ]
            },
            {
                items: [
                    {
                        class: "size-7 size-m-12",
                        height: "360px",
                        templateUrl: "templates/homepage/newsWidget.html"
                    },
                    {
                        class: "size-5 size-m-12",
                        height: "360px",
                        templateUrl: "templates/homepage/lastMinuteBets.html"
                    }
                ]
            }
        ],
        asianShowTeamNames: true,
        asianLoadDays: 1, //   asianview# loads first loadDays for default, for the first time , when localstorage is not set yet
        skin: 'vbet.com',
        logo: {
            url: "#/",
            // image: "skins/vbet.com/logo.png",
            // imageFix: "skins/vbet.com/logo2.png",

            // width: 100,
            // widthFix: 200,

            // height: 300,
            // heightFix: 400,

            // secondImage: "skins/vbet.com/logo.png",

            // paddingMenu: 80,
            favicon: "favicon.ico"
        },
        appPokeristUrl: false,
        defaultTransLang: 'eng',  //default translation language: // translator will translate strings to default language if translation is not available for selected language
        site_id: '13', //13 is test id
        source: "1",
        calendarPrematchSelection: false,
        geoIPLangSwitch: {
            enabled: false
        },
        sportsWithAnimations: ['Soccer', 'Tennis', 'Basketball'],
        collapseMenuInLive: false,
        defaultTimeFormat: null,
        enableDownloadPDFInHelpPages: true,
        layoutTimeFormat: {asian: 'MM/DD'},
        enableMenuSearch: true,
        allowSiteIdOverride: false,
        googleAnalyticsId: false,
        classicViewDefaultType: 1,
        cegSealId: false,
        googleAnalyticsEnableDisplayFeatures: false, // enable GA display features plugin
        yandexMetricaId: false,
        redirectOnTablets: false, //  if URL is provided will redirect to that URL on tablet devices
        virtualsportsEnabled: true, //enable virtual sports
        sportsLeftMenuSortingFunctionName: 'orderSorting', // the name of sorting function 'orderSorting' or 'alphabeticalSorting'
        enableNewPoker: false,
        promotionalBonuses: {
            enable: true,
            sportsbook: true,
            casino: true
        },
        enableBonusSectionInWallet: true,
        enablePointsSectionInWallet: true,
        electronicSportAlias: ['CyberFootball', 'EBasketball', 'CounterStrike', 'Dota2', 'LeagueofLegends', 'Hearthstone', 'HeroesoftheStorm', 'StarCraft2', 'WorldofWarcraft', 'WorldofTanks', 'Smite', 'Overwatch'],
        homePageLastMinuteBets: {
            enable: false,
            timeOptions: [15, 30, 60]
        },
        idToken: {
            enabled: false,
            refreshPeriod: 2000,
            apiUrl: 'http://demostagingskillgames.betconstruct.com:5538'
        },
        drawDataUrl: 'https://cptca.betconstruct.com/niva/json.php',
        drawStreamUrl: 'rtmp://stream-eu2hz.betconstruct.com:1935/livedealer1/shanttv',
        gamesEnabled: true,
        virtualBettingEnabled: true,
        virtualBettingEnabledInTopMenu: false, // show/hide virtual betting in top menu
        backGammonEnabledInTopMenu: false, // show/hide backgammon in top menu
        beloteEnabledInTopMenu: false, // show/hide belote in top menu
        visibleItemsInTopMenu: 7, // visible items quantity in Top Menu in small view
        sportSavedGamesEnabled: true, //enable sports saved games slider tab
        casinoSavedGamesEnabled: true, //enable casino saved games slider tab
        enableBonusCancellation: false, // enable canceling bonus
        balanceSeparateDepositBanners: true,
        freeBet: {
            offsetDays: [0, 1, 2, 3, 4, 5, 6],
            disableDaysFilter: false
        },
        teamLogosPath: 'https://statistics.betcoapps.com/images/',
        disableAsianBetSlipTooltip: false,
        hideLiveCalendarNumber: false,
        betslipInputFieldCustomValue: 'Stake...',  //custom value for betslip input placeholder
        enableSystemCalculator: false,
        betHistoryEnabled: true,  //enable bet history in top menu
        enableCasinoBalanceHistory: false, //enable casino balance history in top menu
        enableCasinoBetHistory: false, //enable casino balance history in top menu
        enableMixedView: false,
        enableMixedViewBalance: true,
        showOnlyMainBalance: false, //to show Main Balance in all pages (for example in casino instead Casino balance will show Main balance)
        enableCommaSeparateNumber: false, // enable comma in input field
        bonusesEnabled: false, //enable bonuses (will show bonus amounts in bet/balance histories)
        openProfileMenuByHover: true,
        poolBettingPointsAmount: 10,
        disableDecimalSubMenu: false,
        disableDepositPage: false,
        disableWithdrawPage: false,
        recentBetsInSettings: false,
        forceNumpadAttr: false,
        showWithdrawRequestsTab: false,
        sportsAlwaysOnTop: false,
        competitionsOrderByTimeInAsianView: false, //for order competitions by time in Asian view, default value false
        customSelectedSequenceInAsianSportsbook: false,
        asian: {
            competitionsPerPage: 10,
            storageFilterData: 86400000,
            asianLeftMenuDefaultType: 1,
            asianDefaultTheme: false, //'black' or 'white'
            showOddEvenMarketsInOverview: false,
            showAllHandicapSigns: true,
            optimalMarkets: [1],
            countdown: {
                enabled: false,
                '0': 60, // seconds
                '1': 20, //seconds
                '2': 40 // seconds
            },
            daysToSelectByDefault: [1]
        },
        homepagePageType: 'sport',  // the type of home page (sport, casino, poker)
        disableEditingPersonalInfo: false,
        userTimeOut: { // uset timeout settings
            enabled: true,
            type: 6,
            options: [
                {
                    name: "24 hours",
                    limit: {
                        period: 1,
                        type: 'days'
                    }
                },
                {
                    name: "One week",
                    limit: {
                        period: 7,
                        type: 'days'
                    }
                },
                {
                    name: "One month",
                    limit: {
                        period: 1,
                        type: 'months'
                    }
                },
                {
                    name: "Two months",
                    limit: {
                        period: 2,
                        type: 'months'
                    }
                }
            ]
        },
        selfExclusion: { // uset self exclusion settings
            enabled: false,
            type: 2,
            options: [
                {
                    name: "6 months",
                    limit: {
                        period: 6,
                        type: 'months'
                    }
                },
                {
                    name: "1 year",
                    limit: {
                        period: 1,
                        type: 'years'
                    }
                },
                {
                    name: "2 years",
                    limit: {
                        period: 2,
                        type: 'years'
                    }
                },
                {
                    name: "5 years",
                    limit: {
                        period: 5,
                        type: 'years'
                    }
                }
            ]
        },
        realityCheck: { // type of value is seconds
            enabled: false,
            options: [
                {
                    name: "no limit",
                    value: 0
                },
                {
                    name: "10 mins",
                    value: 600
                },
                {
                    name: "20 mins",
                    value: 1200
                },
                {
                    name: "30 mins",
                    value: 1800
                },
                {
                    name: "1 hour",
                    value: 3600
                },
                {
                    name: "2 hours",
                    value: 7200
                },
                {
                    name: "4 hours",
                    value: 14400
                },
                {
                    name: "6 hours",
                    value: 21600
                },
                {
                    name: "8 hours",
                    value: 28800
                }
            ]
        },
        sportListColumnNumber: 6,    //number of columns in Sports  "more" dropdown block
        regionsListColumnNumber: 5,  //number of columns in Regions  "more" dropdown block
        sportListMaxVisibleItems: 7,  //maximum number of sports visible in explorer (the rest will go in "more" block)
        regionsListMaxVisibleItems: 6,  //maximum number of regions visible in explorer (the rest will go in "more" block)
        sportListMaxVisibleItemsWide: 13,  //maximum number of sports visible in explorer in wide screen mode (the rest will go in "more" block)
        regionsListMaxVisibleItemsWide: 11,  //maximum number of regions visible in explorer in wide screen mode (the rest will go in "more" block)
        authSessionLifetime: 600000, // in milliseconds,
        saveLoginDataLifeTime: 31540000000, // 1 year in milliseconds,
        showFavoriteGamesInSportList: false,
        separateFavoritesInClassic: false,  // if true, when adding game to favorite in classic view, it will *move* to favorites list. if false, it will be duplicated there(this is better for not reloading lists)
        showVirtualsInSportList: false,   // false to hide,  any number to show (number is used as 'order' field to define it's position among sports)
        todayBets: {
            enabled: false, // false to disable
            order: 1, //to show (number is used as 'order' field to define it's position among sports)

            timeShift: 0 // can change day shift starting from current time
        },
        showOutright: false,    // false to hide,  any number to show (number is used as 'order' field to define it's position among sports)
        showMapSection: false,   // false to hide,  any true to show Map Section in About Page
        showFavoriteCompetitions: false,
        favoriteCompetitionSportSorting: {
            enabled: false,
            sportsOrderList: {
                /*sport alias lowercase: order
                example:
               'icehockey': 1*/
            }
        },
        expandOnlyOneSport: false,
        expandMoreSportsByDefault: false,
        expandFirstSportByDefault: true,
        showPrematchLimit: 10, // 0 if disabled
        selectRegionsByDefault: false, // will filter by region
        forgetFiltersSettings: false, // when true untoggles video and regional filters on route change/page refresh
        hideP1XP2FromOpenGame: false,
        displayEventsMainBase: false, // if true priority will be 'base', if false then 'base1' 'base2'
        enableSportsbookLayoutSwitcher: false, //enable layout switcher
        enableSettingHideLabels: true,
        classicScrollToggleDefaultState: false,
        enableLiveSectionPin: true,
        friendReferral: { //{month: < functional start month >, year: < functional start year > } e.g. {month: 1, year: 2016}
            enabled: false,
            month: 1,
            year: 2016
        },
        availableSportsbookViews: {modern: true, classic: true, asian: false, external: false, euro2016: false},
        availableAsianViewThemes: [],
        sportsbookLayoutSwitcherTooltipTimeout: 3000, // number of milliseconds to show the hint
        loadNotificationsFromWP: false,
        hideExpressIds: false,  // hide chain icon and express ids in game view
        replaceP1P2WithTeamNames: true,
        enableNewHorseRacingTemplate: true,
        showEachWay: false,
        hideGmsMarketBase: false, //hides market base when new backend is on
        GmsPlatform: false,
        virtualSportIds: {
            virtualsports: [54, 55, 56, 57, 118, 150, 174],
            insvirtualsports: [132, 133, 134, 135, 136, 137, 138]
        },
        enableBetPrint: false,
        downloadPDFButtons: false,
        sportsLayout: "classic",
        customSportIds: {},
        openHelpAsPopup: 'OnlyHeaderPopup',
        messagesPageMenu: ['inbox', 'sent', 'new'],
        openFaqAsPopup: false,
        localStorageKeyNamePrefix: false,  // set a string to store all values in local storage with key prefixed with that string
        enableBetBooking: false,  //enable booking bets (get booking id instead of placing bet)
        enableBetBookingPopup: false,  //enable booking popup showing booking id
        bookingLogoUrl: 'logo.png', //booking print page logo
        bookingBetPrint: {
            showPrintButton: true,
            viewType: 1, // 1: for id only print view, 2: for full betslip print view
            message: 'This booking number does not determine the the  final odds of the betslip but only the exact selections of the bet. The odds of the betslip can constantly change and may only be confirmed by the cashier after the final acceptance of the bet.'
        },
        enableAccountVerification: false,
        accountVerificationMessage: false,
        enableDepositLimits: false,
        roundDecimalCoefficients: 3,  // rounding of coefficient, number of significant digits
        newMenuItems: {},
        displayEventsMaxBet: false, //  display event max bet on hover
        classicMarkets2ColSorting: false,  //sort markets of game by order in 2 columns ( 1-2, 3-4, 5-6  instead of  1-4, 2-5, 3-6)
        rememberMeCheckbox: {
            enabled: true,
            checked: false
        },
        showOfficeView: false,  // false for hide 360 Office View (or another url) on About Page
        liveModule: {
            enabled: false  //external (Gaspar's) sportsbook
        },
        multiLevelMenu: {},
        defaultAvailablePaths: ['/news', '/promos', '/cas-promos', '/about','/first_deposit_bonus', '/first_deposit_bonus_and_20_free_spins', '/404', '/draw', '/exchange-shop', '/registration'],
        disableLiveChatPaths: ['/popup', '/widget'],
        'rfid': {
            loginWIthRFID: false,
            promptRFIDPassword: false,
            allowAccessWithoutRfid: false
        },
        enableSubHeader: false,  // show 2nd level menu
        showResultsTabInSportsbook: false, //show results tab in sportsbook top tab
        showResultsMaxDays: 2, // current max is 2 days. This config doesn't function now, as "get_active_competitions" request can't show results for more than two days. May change in the future
        allowHidingUsernameAndBalance: true,
        allowTimeFormatChange: false,
        balanceDefaultPage: 'deposit', // balanceHistory, deposit, withdraw, cashier
        balanceHistoryDisabledOperations: [], // see available values in  js/modules/vbet5/controllers/balance.js
        balanceHistoryMonthCount: 1,
        countOfRecentBetsToShow: 4,
        casinoBalanceDefaultPage: 'cashier',
        buddyTransfer: {
            version: 2,
            enabled: false,
            iconInPayments: false,
            iconInTab: true,
            simple: true
        },
        enableLoyaltyPoints: false,
        loyaltyPointsShowAlwaysNextLevel: false,
        settingsDefaultPage: 'details', // details, changepassword
        passwordNewResetMode: false,
        enableFreeRenew: false,  //  'renew' for getting free money (available in free.vbet.com)
       //statsHostname: 'http://statistics.betconstruct.com/#/en/external/page/',  // hostname for statistics. when clicking on game statistics icon, popup on this hostname is open,
        statsHostname: {
            prefixUrl: 'https://statistics.betcoapps.com/#/',

            subUrl: '/external/page/'
        },
        enableH2HStat: false,
        enableTeamLogosOnHomepage: true,
        enableVisibleInPrematchGames: false,
        poolBettingResultsUrlPrefix: 'http://www.vbet.com/results/',
        horceRacingXmlUrl: 'https://data.vbet.com/horseracing-tmp/',
        virtualBettingUrl: '#/casino/?category=35',
        beloteUrl: '#/games/?game=547',
        backgammonUrl: '#/games/?game=599',
        monthNames: [{name: 'Jan', val: '01'}, {name: 'Feb', val: '02'}, {name: 'Mar', val: '03'}, {name: 'Apr', val: '04'}, {name: 'May', val: '05'}, {name: 'Jun', val: '06'}, {name: 'Jul', val: '07'}, {name: 'Aug', val: '08'}, {name: 'Sep', val: '09'}, {name: 'Oct', val: '10'}, {name: 'Nov', val: '11'}, {name: 'Dec', val: '12'}],
        showGameIds: false,  //show game ids
        trackingScripts: [],
        deleteInboxMessages: false,
        deleteSentMessages: false,
        maxMessageLength: 4000,
        offlineMessage: false,
        iovationLoginScripts: false,
        convertCurrencyName: {},
        search: {   //limits of search results
            limitGames: 15,
            limitCompetitions: 15,
            enableSearchByGameNumber: true
        },
        results: {
            version: 1
        },
        preventPuttingInIFrame: false, //if true, app will check if it's inside iframe and will redirect top window to iframe url
        liveChat: null,
        availableLanguages: {
            'eng': { 'short': 'EN', 'full': "English"},
            'arm': { 'short': 'HY', 'full': "Հայերեն"},
            'rus': { 'short': 'RU', 'full': "Русский"}
        },
        disableBracketsForLanguages: ['heb'],
        timeZonePerLanguage: {
//            'rus' : '+04:00',
//            'tur' : '+03:00'
        },
        allowCustomHtml: false, // allow custom html scripts and html tags
        poolBettingCurrencyName: 'EUR', //currency in which jackpot will be displayed in top menu
        availableCurrencies: ["AMD", "USD", "EUR", "GEL", "RUB", "UAH", "IRR", "GBP", "KGS", "KZT", "MDL", "LTL", "XAF", "TRY", "AZN", "BYR", "NGN", "VND", "KRW", "TJS", "RSD", "UGX", "LVL", "CHF", "MYR", "SGD", "HRK", "GHS", "RON", "CNY", "CPI", "BRL"],
        balanceFractionSize: 2, //number of decimal places to round the balance value to(when displaying)
        showPointsBalance: false, // show points balance in user dropdown menu
        registration: {
            enable: true,
            enableSignIn: true,
            enableRegisterByPhoneNumber: false,
            simplified: false, //simplified 2-step registration
            promoCodeLifetime: 2592000000, //(in milliseconds)  30 days
            defaultPromoCode: null,
            deaultPromocodePerDomain: null,  // see bt848.com skin for options
            defaultCurrency: 'USD',
            minimumAllowedAge: 18,
            suggestPokerRegistration: false,
            requireSmsValidation: false,
            phoneNumberPattern: '^[0-9 ]+$',
            phoneNumberLength: '20',
            replacePhoneNumberAreaCode: false,
            RegTimeSmsValidation: false,
            loginRightAfterRegistration: true,
            enablePassportValidation: true,
            termsLink: false,
            defaultCountryCode: null,
            loadExternalScriptAfterRegistration: null, //  script that will be loaded after registration is complete
            sliderPageAfterRegistration: 'deposit', // will open this page after completing registration and clicking "ok"
            //autoSetCurrency: {   //automatically sets currency in registration form based on selected country (only for selected country-currency pairs)
            //    enabled: true,
            //    disableChangeAfterSelect: true,   //will not let user change another currency for selected country
            //    availableList: {
            //        "AM" : "AMD",
            //        "US" : "EUR",
            //        "RU" : "RUB"
            //    }
            //}
            securityQuestion: {
                enabled: false,
                questions: ['What was the name of your first pet?', 'What age were you when you went to school?', 'What was the name of the city you were born in?', 'What was the number of your school?', 'What was the name of your first love?', 'What was the make and model of your first car?']
            },
            enableNotifySms: false,
            enableNotifyEmail: false,
            removeRestrictedCountries: true,
            defaults: {}
        },
        finbet: {
            topTab: false,
            pages: [
                {
                    css: 'finbet-version-1-t',
                    name: 'Version 1',
                    url: '#/financials/'
                    //iframeUrl: '//casino.vbet.com/global/betconstructGames.php?gameid=Financials&table_id=0&lan=eng&isNewSite=1&mode=fun&partnerid=4&fromstage=0&homeaction=&loginaction=&playerID='
                },
                {
                    css: 'finbet-version-2-t',
                    name: 'Version 2',
                    url: '#/game/TLCTLC/provider/TLC/exid/14000'
                    //iframeUrl: '//casino.vbet.com/global/integration/tradologic/index1.php?mode=fun&gameId=TLC&token={token}&lang=eng&currency=&userid={userId}'
                }
            ]
        },
        personalDetails: {
            readOnlyFields: ['user_id', 'first_name', 'sur_name', 'birth_date', 'gender'],
            editableFields: ['country_code', 'city', 'address', 'email', 'phone_number', 'subscribed_to_news'],
            requiredEditableFields: ['country_code', 'city', 'address', 'email'],
            disabledFields: [],
            patterns:  {
                email: "^([a-zA-Z0-9]+([_+\.-]?[a-zA-Z0-9]+)*)@([a-zA-Z0-9]+)([a-zA-Z0-9\\-\.]+)([\.])([a-z]+)([^~@!#$%^&*()_+|{}:<>?,/;'-=\\[\\]\\`\"\.\\\\])$",
                userName: "^[^0-9\\[\\]\\\\`~!@#$%^&*()_+={};:<>|./?,\"'-\\s]+$",
                docNumber: "^[A-Za-z\\u0400-\\u04FF0-9]*[0-9]+[A-Za-z\\u0400-\\u04FF0-9]*$",
                address: "[^~!@$%^&*()_+={};:<>|?\\[\\]\\'\\\"]*$"
            },
            validation: {
                email: "Invalid email",
                userName: "Please enter a valid last name: only letters - no space, no digits and/or symbols.",
                docNumber: "This field can contain only digits and English or Russian letters"
            },
            limits: {
                city: {
                    minlength: 2,
                    maxlength: 50
                },
                phone_number: {
                    minlength: 5,
                    maxlength: 20
                },
                first_name:{
                    maxlength: 50
                },
                sur_name:{
                    maxlength: 50
                }
            }
        },
        remindToRenewBalance: {
            enabled: false,
            page: 'renew', // renew or deposit or any other slider page
            threshold: 10,
            interval: 14400000 //4 hours
        },
        // custom sports book builder enable/disable parts
        customSportsBook: {
            enabled: false,
            classic: {
                showPrematch: true,
                showLive: true,
                showMarkets: true,
                showBetSlip: true
            },
            modern: {
                showPrematch: true,
                showLive: true
            },
            combo: {
                showPrematch: true,
                showLive: true
            },
            external: {
                showPrematch: true,
                showLive: true
            },
            asian: {
                showPrematch: true,
                showLive: true
            },
            euro2016: {
                showPrematch: true,
                showLive: true
            }
        },
        betTypes: [
            {name: 'single', value: 1},
            {name: 'express', value: 2},
            {name: 'system', 'value': 3},
            {'name': 'chain', 'value': 4}
            //{'name': 'Trixie', 'value': 10},
            //{'name': 'Patent', 'value': 11},
            //{'name': 'Yankee', 'value': 12},
            //{'name': 'Lucky 15', 'value': 13},
            //{'name': 'Canadian', 'value': 14},
            //{'name': 'Lucky 31', 'value': 15},
            //{'name': 'Heinz', 'value': 16},
            //{'name': 'Lucky 63', 'value': 17},
            //{'name': 'Super Heinz', 'value': 18},
            //{'name': 'Goliath', 'value': 19}
        ],
        enableMarketFiltering: true,
        marketFilterTypes: [
            {name: 'Match Result', type:'P1XP2'},
            {name: 'Total Goals', type: 'Total'},
            {name: 'Double Chance', type: '1X12X2'},
            {name: '1st Half Total Goals', type: 'FirstHalfTotal'},
            {name: '2nd Half Total Goals', type: 'SecondHalfTotal'},
            {name: 'Asian Handicap', type: 'Handicap'},
            {name: 'Handicap', type: 'AsianHandicap'}
        ],
        marketFilterTypesGms: [
            {name: 'Match Result', type:'P1XP2'},
            {name: 'Total Goals', type: 'OverUnder'},
            {name: 'Double Chance', type: '1X12X2'},
            {name: '1st Half Total Goals', type: 'HalfTimeOverUnder'},
            {name: '2nd Half Total Goals', type: '2ndHalfTotalOver/Under'},
            {name: 'Asian Handicap', type: 'Handicap'},
            {name: 'Handicap', type: 'AsianHandicap'}
        ],
        multiColumnMarketFilterTypes: {
            P1XP2: {key: 'WINNER'},
            Handicap: {key: 'HANDICAP', eventTypes: ['Home', 'Away']},
            OverUnder: {key: 'GOALS', eventTypes: ['Over', 'Under']}
        },
        multiColumnMarketFilterTypesGms: {
            P1XP2: {key: 'WINNER', subKey: 'MATCH'},
            Handicap: {key: 'HANDICAP', subKey: 'MATCH', eventTypes: ['Home', 'Away'], optimalMarkets: [1, 2, 3, 4]},
            OverUnder: {key: 'TOTALS', subKey: 'MATCH', eventTypes: ['Over', 'Under'], optimalMarkets: [1, 2, 3, 4]}
        },
        oddFormats: [
            {name: 'Decimal', format: 'decimal'},
            {name: 'Fractional', format: 'fractional'},
            {name: 'American', format: 'american'},
            {name: 'HongKong', format: 'hongkong'},
            {name: 'Malay', format: 'malay'},
            {name: 'Indo', format: 'indo'}
        ],
        upcomingGamesPeriods: [1, 2, 3, 6, 12, 24, 48, 72],  //periods available for user to select for upcoming games (hours)
        defaultBetHistoryPeriodIndex: 5,
        disableBetSlip: false, //disable news block on homepage
        enableNews: false, // enable news on sport page
        autoLoadNews: true,
        transferEnabled: true, //enable "transfer" tab
        enableBannerUnderBetslip: true, // enable banner under the betslip
        enableNewsInModernView: false,
        expandedRightInfoBlock: {
            live: true,
            prematch: false
        },
        showNewsInClassicView: false,  //show news block under betslip in classic view
        sportNewsLink: '',
        sportNewsBlockNewWindow: false,
        combo: {
            showMoreOdds: false
        },
        enableBSEventReplacingForSports: [3], // try to replace deleted event with another from same game with same market and event type using base
        enableMiniGameUnderBetslip: false, // enable mini casino game under the betslip
        hideBetslipBannerWhenBetslipIsNotEmpty: true,
        enableBannersInsideSportsbookGames: false, // enable banners under sportsbook game(classic view)
        showPromotedGames: {}, //  retrieve(from swarm) and show promoted games in specified location(s).   see bonanzawin config for example
        showPopularGames: false, //show "popular" games selector (as region)
        availableVideoProviderIds: [1, 3, 5, 7, 8, 11, 12, 15, 16, 19, 999999], //list of available providers
        videoProvidersThatWorkWithIframe: ['21', '22', '23', '24', '29', '30'],
        videoEnabled: true, //enable game videos
        video: {
            autoPlay: true //disable autoplaying implemented only for classic view
        },
        availableVideoProviderCountryFilters: { 1: ['AM'], 3: ['AM'], 5: ['AM'], 7: ['AM'], 8: ['AM'], 11: ['AM'], 12: ['AM'], 15: ['AM'], 16: ['AM']},
        availableVideoProviderCountryFiltersActive: false,
        detachedVideoSizes: {
            3: {
                maxWidth: 500,
                maxHeight: 400
            },
            25: {
                maxWidth: 800,
                maxHeight: 453
            }
        },
        featuredGames: {
            rotationPeriod: 5000,  // each featured game on homepage will be shown for this amount of time (in milliseconds)
            limitation: 9,
            backgroundsCompetitionsPath: 'images/featured-games-backgrounds/',
            backgroundsCompetitionsMaps: {
                '54297345': 'competitions-bg-bundesliga.png',
                '1351379392': 'competitions-bg-champions-league.png',
                '1961901776': 'competitions-bg-champions-league.png',
                '71143921': 'competitions-bg-copa-del-rey.png',
                '249661047': 'competitions-bg-coppa-italia.png',
                '80386691': 'competitions-bg-coupe-de-france.png',
                '71133646': 'competitions-bg-dfb-pokal-germany.png',
                '54139136': 'competitions-bg-europa-league.png',
                '1963328565': 'competitions-bg-europa-league.png',
                '54287323': 'competitions-bg-league-1.png',
                '54210798': 'competitions-bg-premier-league.png',
                '1397387603': 'FA-Community-shield-England.png',
                '54344509': 'competitions-bg-seria.png',
                '57290187': 'competitions-bg-fa-cup-england.png'
            },
            backgroundsCompetitionsMapsGms: {
                '541': 'competitions-bg-bundesliga.png',
                '566': 'competitions-bg-champions-league.png',
                '1961901776': 'competitions-bg-champions-league.png',
                '2991': 'competitions-bg-copa-del-rey.png',
                '572': 'competitions-bg-coppa-italia.png',
                '565': 'competitions-bg-coupe-de-france.png',
                '1876': 'competitions-bg-dfb-pokal-germany.png',
                '1861': 'competitions-bg-europa-league.png',
                '1963328565': 'competitions-bg-europa-league.png',
                '548': 'competitions-bg-league-1.png',
                '538': 'competitions-bg-premier-league.png',
                '545': 'FA-Community-shield-England.png',
                '543': 'competitions-bg-seria.png',
                '1840': 'competitions-bg-fa-cup-england.png'
            }
        },
        beloteSlidesRotationPeriod: 6000,  // each belote banner will be shown for this amount of time (in milliseconds)
        backgammonSlidesRotationPeriod: 4000,  // each backgammon banner will be shown for this amount of time (in milliseconds)
        underBetslipBannersRotationPeriod: null,   // period in milliseconds or null to disable rotation and show all at once

        enableFormUrl: false,
        showSearchInsideSportsbook: false, // will show search box inside sportsbook, under regions (needed for skins without menu)
        showSurveyPopup: false,
        loadLiveWidgetGamesFrom: {
            type: 'favorite' // promoted or favorite
        },
        showPromotedGamesOnHomepage: {
            enabled: false,
            level: 'game',  // game or competition
            type: 'promoted' // promoted or favorite
        },
        showPromotedGamesOnWidget: {
            enabled: false,
            quantity: 10,
            level: 'competition',  // game or competition
            type: 'promoted', // promoted or favorite
            timeFormat: false   // if false by default will be 'LT' or assign custom format ( 'full' )
        },
        loadPopularGamesForSportsBook: {
            enabled: false
        },
        dateFormat: {
            unixDate: 'DD.MM.YY',
            noLocaleTranslate: {
                '12h': 'DD/MM/YYYY LT',
                '24h': 'DD/MM/YYYY HH:mm'
            },
            datepicker: 'dd/MM/yyyy',
            historyBalanceFormatDate: 'MM/dd/yyyy',
            newsDataFormat: {
                'tur': 'DD MMMM YYYY',
                'default': 'MMMM DD YYYY',
                'newsDate': 'LT - ll'
            },
            liveCalendarDataFormat: 'D.MM',
            jpn: {
                default: 'YYYY年 MMM DD日 HH:mm',
                unixDate: 'YYYY年 MMM DD日',
                noLocaleTranslate: {
                    '12h': 'MM月 DD日 LT',
                    '24h': 'MM月 DD日 HH:mm'
                }
            }
        },
        facebookIntegration: {
            enable: false
        },
        odnoklassnikiIntegration: {
            enable: false,
            settings: {
                clientId: '1107409152',
                scopeType: 'VALUABLE_ACCESS',
                responseType: 'token',
                redirectUri: 'http://localhost:63342/vbet5/app/trunk/odnoklassniki.html'
            }
        },
        enableInvites: false,  //enable invite functionality
        paymentsDepositCompletedPopup: false,
        logoutTimeout: 1500,  // timeout to wait for logout command to complete after which logout actions(cleanup, etc) will be performed anyway
        buyVc: {     // enable buying virtual credit from renew tab (key) => VC amount
            enabled: false,
            points: {
                1000: '$9.99',
                5000: '$24.99',
                10000: '$24.99'
            }
        },
        customLanguageCss: ['arm', 'geo'],
        subHeaderItems: [
            {
                alias: "sport",
                displayName: "Event View",
                enabled: true
            },
            {
                alias: "dashboard",
                displayName: "Dashboard",
                enabledConfig: "dashboardEnabled"
            },
            {
                alias: "overview",
                displayName: "Live Overview",
                enabledConfig: "liveOverviewEnabled",
                exceptViews: ["modern", "euro2016"],
                disableForEuro2016: true
            },
            {
                alias: "multiview",
                displayName: "Live MultiView",
                enabledConfig: 'liveMultiViewEnabled',
                exceptViews: "modern"
            },
            {
                alias: "livecalendar",
                displayName: "Live Calendar",
                enabledConfig: "liveCalendarEnabled"
            },
            {
                alias: "results",
                displayName: "Results",
                enabledConfig: "showResultsTabInSportsbook"
            },
            {
                alias: "statistics",
                displayName: "Statistics",
                enabledConfig: "statisticsInsportsbookTab"
            }
        ],
        dashboard: {
            enabled: false,
            leftMenuPrematch: false,
            showLeftDashboard: true,
            version: 1,
            v2LastMinuteBets: true,
            v2WidgetGamesCount: 2,
            sliders: [false, false, true, false],
            sportsBanners: {
                'default': 'images/featured-games-backgrounds/default.png',
                'Baseball': 'images/featured-games-backgrounds/baseball.png',
                'Basketball': 'images/featured-games-backgrounds/basketball.png',
                'EBasketball': 'images/featured-games-backgrounds/basketball.png',
                'Boxing': 'images/featured-games-backgrounds/boxing.png',
                'Chess': 'images/featured-games-backgrounds/chess.png',
                'Golf': 'images/featured-games-backgrounds/golf.png',
                'Handball': 'images/featured-games-backgrounds/handball.png',
                'Horse-Racing': 'images/featured-games-backgrounds/horseracing.png',
                'HorseRacing': 'images/featured-games-backgrounds/horseracing.png',
                'Ice-Hockey': 'images/featured-games-backgrounds/icehockey.png',
                'IceHockey': 'images/featured-games-backgrounds/icehockey.png',
                'Rugby': 'images/featured-games-backgrounds/rugby.png',
                'Tennis': 'images/featured-games-backgrounds/tennis.png',
                'Volleyball': 'images/featured-games-backgrounds/volleyball.png',
                'Soccer': 'images/featured-games-backgrounds/soccer.png'
            }
        },
        liveCalendarEnabled: false,
        liveOverviewEnabled: false,
        liveCalendarView: 'multiDaySelectionView', // multiDaySelectionView or oneDaySelectionView
        liveMultiViewEnabled: false,
        prematchMultiColumnEnabled: false,
        liveMultiViewItemsAmount: 6,
        liveCalendarInLeftMenu: true,
        enableLiveCalendarPrinting: false,
        enableLiveCalendarUpcomingGamesFilter: false,
        numberOfExpandedMarkets: 'all',
        loadLibsLocally: false, //  load libs (angular, swfobject) locally instead of Google CDN (needed for users in China, where Google is blocked)
        addToFavouritesOnBet: false,
        betHistoryGmsBalanceTypes: {
            '-1': 'All',
            '0': 'Bet',
            '1': 'Bet Winning Increase',
            '3': 'Client Deposit Request Payment',
            '5': 'Cash Desk Deposit',
            '9': 'Canceled by user',
            '10': 'Client Deposit',
            '12': 'Client Withdrawal Request',
            '14': 'Client Withdrawal Request Rejection',
            '15': 'Client Withdrawal Payment',
            '16': 'Bet Winning Decrease',
            '50': 'Live Dealer Tip',
            '83': 'Client Bonus Payment',
            '84': 'Cashback Bonus',
            '301': 'Correction Up',
            '302': 'Correction Down'
        },
        betHistoryBalanceTypes: {
            '-1': 'All',
            '0': 'New Bets',
            '1': 'Winning Bets',
            '2': 'Returned Bet',
            '3': 'Deposit',
            '4': 'Card Deposit',
            '5': 'Bonus',
            '6': 'Bonus Bet',
            '7': 'Commission',
            '8': 'Withdrawal',
            '9': 'Client Request Cancellation',
            '302': 'Correction Down',
            '10': 'Deposit by payment system',
            '12': 'Withdrawal request',
            '13': 'Authorized Withdrawal',
            '14': 'Withdrawal denied',
            '15': 'Withdrawal paid',
            '16': 'Pool Bet',
            '17': 'Pool Bet Win',
            '18': 'Pool Bet Return',
            '23': 'In the process of revision',
            '24': 'Bet Recalculation',
            '29': 'Free Bet Bonus received',
            '30': 'Wagering Bonus received',
            '31': 'Transfer from Gaming Wallet',
            '32': 'Transfer to Gaming Wallet',
            '37': 'Declined Superbet',
            '39': 'Bet on hold',
            '40': 'Bet cashout',
            '19': 'Fair',
            '20': 'Fair Win',
            '21': 'Fair Commission'
	},
	esportsGames: ['Dota', 'Dota2', 'CounterStrike', 'LeagueOfLegends', 'StarCraft', 'StarCraft2', 'Hearthstone', 'CallofDuty', 'Overwatch', 'HeroesOfTheStorm'],
	// numberOfExpandedMarkets: 8
    expandAllInBetHistory: false,
    stakeAmountPreventInput: "[^\\d\\.\\,]",
    enableRuntimePopup: true,
    promoCodeFieldName: 'promo_code'
    },

    partner: {
        // section for partner config
        allowNoUserId: false, // make user id optional
        allowStringUserId: false, //don't convert userId to number
        notifyOnResize: false, //if enabled, will call partner's provided callback function on every resize, passing it the frame size
        enableSigninRegisterCallbacks: false, // log in and register buttons will be shown and when clicked callback function with corresponding parameters will be called
        inactivityCallbackTime: 0 // Time in seconds to send callback command once user is inactive
    },
    customTemplates: false, // skin specific templates , e.g. ["sport/main.html"]
    'env': {
        lang: 'eng',
        authorized: false,
        showSlider: false,
        live: false,
        selectedTimeZone: null, //
        oddFormat: 'decimal', // possible values:  decimal, fractional, american
        sound: 0.75,//'on',
        timeFormat: '24h',
        longTimeFormats: {
            HALF: '12h',
            FULL: '24h'
        },
        preMatchMultiSelection: false,
        liveStatsFlipMode: 0,
        hideLiveStats: false,
        showSportsbookToolTip: false
    },

    'betting': {
        enabled: true,
        bet_source: '42',
        storedBetslipLifetime: 3600000, // in milliseconds
        maxWinLimit: false,
        disableMaxBet: false,
        disableNumpad: true,
        enableExpressBonus: false,
        expressBonusVisibilityQty: 1,
        expressBonusType: 1, //1: regular bonus 2,3,4,5..% ; 2: 2-5,10,15,20,25,30,30..30 %; 3: (k > 2.5) ? 7% : 0;
        enableSuperBet: false,
        expressBonusMinOdd: 1,
        showSuperBetNotificationsViaPopup: false,
        enableHorseRacingBetSlip: true, // SP, new bet types, etc.
        enableEachWayBetting: false,
        enableBankerBet: false,
        enableShowBetSettings: false,
        allowManualSuperBet: false,
        superBetCheckingIntervalTime: 5000,
        betAcceptedMessageTime: 5000,
        autoSuperBetLimit: {}, // {'GEL': 400, 'AMD': 50000, 'USD': 1000} //if not false then set limit for each currency if stake is greater then Limit superbet is enabling automaticaly
        resetAmountAfterBet: false,
        totalOddsMax : 1000,
        enableLimitExceededNotifications: false,
        allowSuperBetOnLive: false,
        enableBetterOddSelectingFunctyionality: false,
        clearOnLogout: false,
        quickBet: {
            hideQuickBet: false,
            enableQuickBetStakes: false,
            visibleForPaths: ['sport', 'overview'],
            quickBetStakeCoeffs: {'USD': 5, 'AMD': 50, 'EUR': 3},
            quickBetStakeBases: [1, 2, 5, 10],
            quickBetBaseMultipliers: [1, 10, 100]
        },
        disableClearAllInBetProgress: false,
        disableMaxButtonInBetProgress: false,
        sections: {
            enableMyGamesIcon: false,
            enableMyBetsIcon: false,
            enableCashoutButton: false,
            betRulesLink: ''
        },
        defaultPriceChangeSetting: "1"

    },
    poker: {
        disableChinesePoker: true,
        balanceTimeout: 30000 // the period of requesting poker balance (in milliseconds),
    },
    backgammon: {
        tournamentScheduleUrl: '//skillgamesadmin.betconstruct.int:6446/request/get_tournaments_schedule'
    },
    belote: {
    },
    deberc: {
        redirectOnGame: false
    },
    geoIP: {
        callbackUrl: '//geoapi.betcoapps.com',
        callbackUrlCity: '//geoapi.betcoapps.com'
    },
    'swarm': {
        debugging: false, //enable websocket debugging
        languageMap: { 'pol' : 'eng', 'por': 'por_2', 'pt-br' : 'por', fre: 'fra', chi: 'zho', mac: 'mkd', bgr: 'bul', fas: 'far', rum: 'ron', dut: 'nld'},
        languageMapGms: { 'pt-br' : 'por_2', fre: 'fra', chi: 'zho', mac: 'mkd', fas: 'far', dut: 'nld'},
        sendSourceInRequestSession: false,
        sendTerminalIdlInRequestSession: false,
        webSocketTimeout: 5000,
        url: [{ url: "ws://10.32.5.83:8282/", weight: 10}],
        websocket: [{ url: "ws://10.32.5.83:8282/", weight: 10}],
//        url: "https://10.32.5.83:8080/", // bob
//        url: "https://www.vbet.com:8080/", //production
//        websocket: "ws://10.32.5.83:8080/", //bob
//        websocket: "ws://192.168.253.223:8080/", //stable

        useWebSocket: true,
        maxWebsocketRetries: 5,  // maximum number of websocket reconnect attempts after which it will give up
        webSocketRetryInterval: 2000 // retry interval, in milliseconds (will be increased after each unsuccessful retry by itself)
    },
    serverToServerTracking: false,
    xDomainSlaves: '{"https://www.vbet.com:8080" : "/xdomain-proxy.html"}', //has to be JSON string
    enableDefaultPaymentSelection: {
        deposit : true, // enable first payment type in deposit
        withdraw: true  // enable first payment type in withdraw
    },
    "everCookie": {
        "enabled": false,
        "afecUrl": "https://afec.betconstruct.com/topics/client-activity-v2",
        "options": {
            history: false,
            baseurl: 'https://init-ec.betconstruct.com',
            asseturi: "/assets",
            swfFileName: '/ec.swf',
            xapFileName: '/ec.xap',
            jnlpFileName: '/ec.jnlp',
            pngCookieName: 'ec_png',
            pngPath: 'ec_png.php',
            etagCookieName: 'ec_etag',
            etagPath: 'ec_etag.php',
            cacheCookieName: 'ec_cache',
            cachePath: 'ec_cache.php',
            phpuri: "/",
            java: false,
            silverlight: false
        }
    }
});
