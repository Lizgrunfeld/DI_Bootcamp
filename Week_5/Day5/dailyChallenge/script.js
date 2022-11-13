// //The program should take the currency which the user currently has 
// and the currency in which they would like to receive, as well as the amount of
// money. Afterwards, the program will output the correct exchange rate based on the
// data from the APIs.

// First, you need to fetch all the supported currencies, 
// in order to add the currencies options (ie FROM - To) in the currency converter.
// Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.
// async function getData(){
//     const results = fetch ("https://v6.exchangerate-api.com/v6/87eb783b8d5a2b8fb82105c2/latest/USD")
//     const object = JSON.parse(results)
//     console.log(object)
// }
// getData()


document.getElementById("btn-convert").addEventListener("click", fetchCurrencies);

const currencies = {
    AED: "UAE Dirham",
    AFN:"Afghan Afghani",
    ALL: "Albanian Lek",	
    AMD:"Armenian Dram",
    ANG:"Netherlands Antillian Guilder",
    AOA:"Angolan",
    ARS:"Argentine Peso",
    AUD:"Australian Dollar",
    AWG:"Aruban Florin",
    AZN:"Azerbaijani Manat",
    BAM:"Bosnia and Herzegovina Mark",
    BBD:"Barbados Dollar",
    BDT:"Bangladeshi Taka",
    BGN:"Bulgarian Lev",
    BHD:"Bahraini Dinar",
    BIF:"Burundian Franc",
    BMD:"Bermudian Dollar",
    BND:"Brunei Dollar",
    BOB:"Bolivian Boliviano",
    BRL:"Brazilian Real",
    BSD:"Bahamian Dollar",
    BTN:"Bhutanese Ngultrum",
    BWP:"Botswana Pula",
    BYN:"Belarusian Ruble",
    CAD:"Canadian Dollar",
    BZD:"Belize Dollar",
    CDF:"Congolese Franc",
    CHF:"Swiss Franc",
    CLP:"Chilean Peso",
    CNY:"Chinese Renminbi",
    COP:"Colombian Peso",
    CRC:"Costa Rican Colon",
    CUP:"Cuban Peso	Cuba",
    CVE:"Cape Verdean Escudo",
    CZK:"Czech Koruna",
    DJF:"Djiboutian Franc",
    DKK:"Danish Krone",
    DOP:"Dominican Peso",
    DZD:"Algerian Dinar",
    EGP:"Egyptian Pound",
    ERN:"Eritrean Nakfa",
    ETB:"Ethiopian Birr",
    EUR:"Euro",
    FJD:"Fiji Dollar",
    FKP:"Falkland Islands Pound",
    FOK:"Faroese Króna",
    GBP:"Pound Sterling",
    GEL:"Georgian Lari",
    GGP:"Guernsey Pound",
    GHS:"Ghanaian Cedi",
    GIP:"Gibraltar Pound",
    GMD:"Gambian Dalasi",
    GNF:"Guinean Franc",
    GTQ:"Guatemalan Quetzal",
    GYD:"Guyanese Dollar",
    HKD:"Hong Kong Dollar",
    HNL:"Honduran Lempira",
    HRK:"Croatian Kuna",
    HTG:"Haitian Gourde",
    HUF:"Hungarian Forint",
    IDR:"Indonesian Rupiah",
    ILS:"Israeli New Shekel",
    IMP:"Manx Pound",
    INR:"Indian Rupee",
    IQD:"Iraqi Dinar",
    IRR:"Iranian Rial",
    ISK:"Icelandic Króna",
    JEP:"Jersey Pound",
    JMD:"Jamaican Dollar",
    JOD:"Jordanian Dinar",
    JPY:"Japanese Yen",
    KES:"Kenyan Shilling",
    KGS:"Kyrgyzstani Som",
    KHR:"Cambodian Riel",
    KID:"Kiribati Dollar",
    KMF:"Comorian Franc",
    KRW:"South Korean Won",
    KWD:"Kuwaiti Dinar",
    KYD:"Cayman Islands Dollar",
    KZT:"Kazakhstani Tenge",
    LAK:"Lao Kip",
    LBP:"Lebanese Pound",
    LKR:"Sri Lanka Rupee",
    LRD:"Liberian Dollar",
    LSL:"Lesotho Loti",
    LYD:"Libyan Dinar",
    MAD:"Moroccan Dirham",
    MDL:"Moldovan Leu",
    MGA:"Malagasy Ariary",
    MKD:"Macedonian Denar",
    MMK:"Burmese Kyat",
    MNT:"Mongolian Tögrög",
    MOP:"Macanese Pataca",
    MRU:"Mauritanian Ouguiya",
    MUR:"Mauritian Rupee",
    MVR:"Maldivian Rufiyaa",
    MWK:"Malawian Kwacha",
    MXN:"Mexican Peso",
    MYR:"Malaysian Ringgit",
    MZN:"Mozambican Metical",
    NAD:"Namibian Dollar",
    NGN:"Nigerian Naira",
    NIO:"Nicaraguan Córdoba",
    NOK:"Norwegian Krone",
    NPR:"Nepalese Rupee",
    NZD:"New Zealand Dollar",
    OMR:"Omani Rial",
    PAB:"Panamanian Balboa",
    PEN:"Peruvian Sol",
    PGK:"Papua New Guinean",
    PHP:"Philippine Peso",
    PKR:"Pakistani Rupee",
    PLN:"Polish Złoty",
    PYG:"Paraguayan Guaraní",
    QAR:"Qatari Riyal",
    RON:"Romanian Leu",
    RSD:"Serbian Dinar",
    RUB:"Russian Ruble",
    RWF:"Rwandan Franc",
    SAR:"Saudi Riyal",
    SBD:"Solomon Islands Dollar",
    SCR:"Seychellois Rupee",
    SDG:"Sudanese Pound",
    SEK:"Swedish Krona",
    SGD:"Singapore Dollar",
    SHP:"Saint Helena Pound",
    SLE:"Sierra Leonean Leone",
    SOS:"Somali Shilling",
    SRD:"Surinamese Dollar",
    SSP:"South Sudanese Pound",
    STN:"São Tomé and Príncipe Dobra",
    SYP:"Syrian Pound",
    SZL:"Eswatini Lilangeni",
    THB:"Thai Baht",
    TJS:"Tajikistani Somoni",
    TMT:"Turkmenistan Manat",
    TND:"Tunisian Dinar",
    TOP:"Tongan Paanga",
    TRY:"Turkish Lira",
    TTD:"Trinidad and Tobago Dollar",
    TVD:"Tuvaluan Dollar",
    TWD:"New Taiwan Dollar",
    TZS:"Tanzanian Shilling",
    UAH:"Ukrainian Hryvnia",
    UGX:"Ugandan Shilling",
    USD:"United States Dollar",
    UYU:"Uruguayan Peso",
    UZS:"Uzbekistani So'm",
    VES:"Venezuelan Bolívar Soberano",
    VND:"Vietnamese Đồng",
    VUV:"Vanuatu Vatu",
    WST:"Samoan Tālā",
    XAF:"Central African CFA Franc",
    XCD:"East Caribbean Dollar",
    XDR:"Special Drawing Rights	International Monetary Fund",
    XOF:"West African CFA franc",
    XPF:"CFP Franc",
    YER:"Yemeni Rial",
    ZAR:"South African Rand",
    ZMW:"Zambian Kwacha",
    ZWL:"Zimbabwean Dollar",
  };

const primaryCurrency = document.getElementById("primary");
const secondaryCurrency = document.getElementById("secondary");
primaryCurrency.innerHTML = getOptions(currencies);
secondaryCurrency.innerHTML = getOptions(currencies);

function getOptions(data) {
    return Object.entries(data)
      .map(([country, currency]) => `<option value="${country}">${country} | ${currency}</option>`)
      .join("");
  }

function fetchCurrencies() {
    const primary = primaryCurrency.value;
    const secondary = secondaryCurrency.value;
    const amount = document.getElementById("amount").value;
    fetch("https://v6.exchangerate-api.com/v6/87eb783b8d5a2b8fb82105c2/latest/USD" + primary)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((data) => {
        console.log(data);
        displayCurrency(data, primary, secondary, amount);
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }

  function displayCurrency(data, primary, secondary, amount) {
    const calculated = amount * data.conversion_rates[secondary];
    document.getElementById("result").setAttribute("style", "display:block");
    document.getElementById("txt-primary").innerText = amount + " " + primary + " = ";
    document.getElementById("txt-secondary").innerText = calculated + " " + secondary;
  }




    // To convert from a currency, to another one, you need to fetch conversion rate fro
// the Pair Conversion API endpoint. Check out this page on Pair conversion requests 
// from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// Bonus: Add this “switch” button on the page, when clicked on it will switch the 
// currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button 
// is clicked on, the conversion should be from GBP to EUR.