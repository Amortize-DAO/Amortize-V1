let Y = 0.50;
let X = 0.05;
let OptionFee = 0.05;
let HomeOwnerCal = new HomeOwner(50000, 500000, 10, 200000);
let WithDraws = new WithdrawlContract(1);

let DataProts = new Array(HomeOwnerCal.TermLength + 1);

for (let N = 0; N < HomeOwnerCal.TermLength + 1; N++)
{
    DataProts[N] = new DataForProtocol();
}

let BTCApprections = new Array(HomeOwnerCal.TermLength + 1);

for (let N = 0; N < HomeOwnerCal.TermLength + 1; N++)
{   
    BTCApprections[N] = new BTCAppreciate();
}

function HomeOwner(PriceBTC, ValueOfHome, TermLength, CurrMorBalance){
    this.PriceBTC = PriceBTC;
    this.ValueOfHome = ValueOfHome;
    this.TermLength = TermLength;
    this.CurrMorBalance = CurrMorBalance;
    this.HomeEquity = Math.min((this.ValueOfHome - this.CurrMorBalance) / 2, this.PriceBTC);
    this.BtcToCot = this.HomeEquity/this.PriceBTC;
}

function WithdrawlContract(PaymentFrequency)
{
    this.BTCAmount = HomeOwnerCal.BtcToCot;
    
    if (HomeOwnerCal.TermLength === 10)
    {
        this.AmortizeRate = 15;
    }

    else if (HomeOwnerCal.TermLength === 7)
    {
        this.AmortizeRate = 18;
    }

    else if (HomeOwnerCal.TermLength === 5)
    {
        this.AmortizeRate = 23;
    }

    this.PaymentFrequency = PaymentFrequency;
    
    this.RatePerPeriod = Math.round((((1 + ((this.AmortizeRate/100) / this.BTCAmount)) ** (this.BTCAmount / this.PaymentFrequency)) - 1) * 100);

    this.AmortizeConstant = ((this.BTCAmount * (this.RatePerPeriod/100)) / (1 - ((1 + (this.RatePerPeriod / 100)) ** (-1 * (HomeOwnerCal.TermLength *  this.PaymentFrequency)))));

}

function BTCAppreciate()
{
    this.HomeEquity =  HomeOwnerCal.ValueOfHome - HomeOwnerCal.CurrMorBalance;  
    this.BTCinContract = DataProts[0].Balance;
    this.ESTPriceBTC = HomeOwnerCal.PriceBTC;
    this.ESTValCot = this.BTCinContract * this.ESTPriceBTC;
    this.CotPrice =  0;
    this.ESTProfit = 0;
}

function DataForProtocol()
{
    this.Payment = 0;
    this.Balance = HomeOwnerCal.BtcToCot;
    this.AnuityWithdraw = 0;
    this.TxFee = 2.5;
    this.BTCYieldNFT = 0;
    this.NFTYieldUSD = 0;
    this.CotAppr = 0;
    this.NFTRevOptCall = (HomeOwnerCal.HomeEquity * this.CotAppr) + HomeOwnerCal.HomeEquity;
    this.OptCallFee = 0.05;
    this.ESTBTCPrice = HomeOwnerCal.PriceBTC;
}

function CalculateAppreciation () {  // Method to display property type of Bike
        
    BTCApprections[1].HomeEquity = ((HomeOwnerCal.ValueOfHome - HomeOwnerCal.CurrMorBalance) * X)
         + (HomeOwnerCal.ValueOfHome - HomeOwnerCal.CurrMorBalance);
    
         BTCApprections[1].BTCinContract = DataProts[1].Balance;

         BTCApprections[1].ESTPriceBTC = (HomeOwnerCal.PriceBTC * Y) + HomeOwnerCal.PriceBTC;

         BTCApprections[1].ESTValCot = BTCApprections[1].BTCinContract * BTCApprections[1].ESTPriceBTC;

         BTCApprections[1].CotPrice = DataProts[1].NFTRevOptCall + DataProts[1].OptCallFee;

         BTCApprections[1].ESTProfit = Math.max(((BTCApprections[1].ESTValCot - BTCApprections[1].CotPrice) - (BTCApprections[1].ESTValCot * OptionFee)), 0);

    for (let N = 2; N < BTCApprections.length; N++)
    {
        BTCApprections[N].HomeEquity = (BTCApprections[N-1].HomeEquity * X) + BTCApprections[N-1].HomeEquity;
        BTCApprections[N].BTCinContract = DataProts[N].Balance;
        BTCApprections[N].ESTPriceBTC = DataProts[N].ESTBTCPrice;
        BTCApprections[N].ESTValCot = BTCApprections[N].ESTPriceBTC * BTCApprections[N].BTCinContract;
        BTCApprections[N].CotPrice = DataProts[N].NFTRevOptCall + DataProts[N].OptCallFee;
        BTCApprections[N].ESTProfit = Math.max(((BTCApprections[N].ESTValCot - BTCApprections[N].CotPrice) - (BTCApprections[N].ESTValCot * OptionFee)), 0);
    }

}

function CalculateDataProtocol()
{
    for (let N = 1; N < DataProts.length; N++){
        DataProts[N].Payment = DataProts[N-1].Balance * (WithDraws.RatePerPeriod/100);
        DataProts[N].Balance = DataProts[N-1].Balance - WithDraws.AmortizeConstant + DataProts[N].Payment;
        DataProts[N].AnuityWithdraw = WithDraws.AmortizeConstant - DataProts[N].Payment;
    }

    for (let N = 1; N < DataProts.length; N++){
        let searchVal = HomeOwnerCal.TermLength - N + 1;
        DataProts[N].CotAppr = DataProts[searchVal].AnuityWithdraw * 100;
    }
    
    for (let N = 1; N < DataProts.length; N++){
        DataProts[N].TxFee = (DataProts[N].CotAppr * 0.025) / 100;
        DataProts[N].BTCYieldNFT = (DataProts[N].AnuityWithdraw - DataProts[N].TxFee) * 100;
        DataProts[N].ESTBTCPrice = (DataProts[N-1].ESTBTCPrice * Y) + DataProts[N-1].ESTBTCPrice; 
        DataProts[N].NFTYieldUSD = (DataProts[N].BTCYieldNFT/100) * DataProts[N].ESTBTCPrice;
        DataProts[N].NFTRevOptCall = (DataProts[N-1].NFTRevOptCall * (DataProts[N].CotAppr/100)) + DataProts[N-1].NFTRevOptCall;
        DataProts[N].OptCallFee *= DataProts[N].NFTRevOptCall;
    }
}

let StartNumHom = 0;
let AnualProtGrow = 0;
let AvgNumOptCall = 0;

function PropRev(){
    this.homes = 0;
    this.btcincot = 0;
    this.txrevbtc = 0;
    this.txrevusd = 0;
    this.futvaltxinbtc = 0;
    this.avgbtccotpr = 0;
}

let ProtRev = new Array(HomeOwnerCal.TermLength);

for (let N = 0; N < HomeOwnerCal.TermLength; N++)
{   
    ProtRev[N] = new PropRev();

}

function CalPropRev(){
    ProtRev[0].homes = (StartNumHom * AnualProtGrow) + StartNumHom;
    ProtRev[0].btcincot = (ProtRev[0].homes * HomeOwnerCal.HomeEquity) / avgbtccotpr;
    ProtRev[0].txrevbtc = (ProtRev[0].btcincot * DataProts[0].TxFee); 
    ProtRev[0].txrevusd = (ProtRev[0].txrevbtc *  DataProts[0].ESTBTCPrice) / 1000;
    ProtRev[0].futvaltxinbtc = ProtRev[0].txrevusd;
    ProtRev[0].avgbtccotpr = (HomeOwnerCal.PriceBTC + DataProts[0].ESTBTCPrice) / 2;

    for (let N = 1; N < PropRev.length; N++){
        ProtRev[N].homes = (ProtRev[N-1].homes * AnualProtGrow) + ProtRev[N-1].homes;
        ProtRev[N].btcincot = (ProtRev[N].homes * HomeOwnerCal.HomeEquity) / avgbtccotpr;
        ProtRev[N].txrevbtc = (ProtRev[N].btcincot * DataProts[0].TxFee); 
        ProtRev[N].txrevusd = (ProtRev[N].txrevbtc *  DataProts[N].ESTBTCPrice) / 1000;
        ProtRev[N].futvaltxinbtc = ((ProtRev[N-1].txrevbtc + ProtRev[N].txrevbtc) * DataProts[N].ESTBTCPrice) / 1000;
        ProtRev[N].avgbtccotpr = (HomeOwnerCal.PriceBTC + DataProts[N].ESTBTCPrice) / 2;
    
    }
}

function NFTInvestCal(){
    this.btcnftyield = 0;
    this.nftrevusd = 0;
    this.contprice = 0;
    this.usdroci = 0;
    this.roioptcal = 0;
    this.irroptcal = 0;
}

let InvestNFT = new Array(HomeOwnerCal.TermLength);

for (let N = 0; N < HomeOwnerCal.TermLength; N++)
{   
    InvestNFT[N] = new NFTInvestCal();
}

function CalNFTInvest(){
    InvestNFT[0].btcnftyield = DataProts[0].AnuityWithdraw - DataProts[0].TxFee;
    InvestNFT[0].nftrevusd = InvestNFT[0].btcnftyield * DataProts[0].ESTBTCPrice;
    InvestNFT[0].contprice = DataProts[0].NFTRevOptCall;
    InvestNFT[0].usdroci = InvestNFT[0].contprice - HomeOwnerCal.HomeEquity;
    InvestNFT[0].roioptcal = (InvestNFT[0].usdroci / HomeOwnerCal.HomeEquity) * 100;
    InvestNFT[0].irroptcal = InvestNFT[0].usdroci / HomeOwnerCal.HomeEquity;

    for (let N = 1; N < NFTInvestCal.length; N++){
        InvestNFT[N].btcnftyield = DataProts[N].AnuityWithdraw - DataProts[N].TxFee;
        InvestNFT[N].nftrevusd = InvestNFT[N].btcnftyield * DataProts[N].ESTBTCPrice;
        InvestNFT[N].contprice = DataProts[N].NFTRevOptCall;
        InvestNFT[N].usdroci = InvestNFT[N].contprice - HomeOwnerCal.HomeEquity;
        InvestNFT[N].roioptcal = (InvestNFT[N].usdroci / HomeOwnerCal.HomeEquity) * 100;
        InvestNFT[N].irroptcal = (InvestNFT[N].usdroci / HomeOwnerCal.HomeEquity) / N;
    }
}






function printDataProts()
{
    for (let N = 0; N < DataProts.length; N++)
    {
        console.log("YEAR: " + N + "\n");
        console.log("Payment: " + DataProts[N].Payment);
        console.log("Balance: " + DataProts[N].Balance);
        console.log("Annuity Withdrawal: " + DataProts[N].AnuityWithdraw);
        console.log("Contract Appreciation: " + DataProts[N].CotAppr);
        console.log("2.5% TxFee: " + DataProts[N].TxFee);
        console.log("BTC-NFT Yield: " + DataProts[N].BTCYieldNFT);
        console.log("EST-BTC-Price: " + DataProts[N].ESTBTCPrice);
        console.log("NFT Yield USD: " + DataProts[N].NFTYieldUSD);
        console.log("NFT Revenue on Option Call: " + DataProts[N].NFTRevOptCall);
        console.log("Option Call Fee: " + DataProts[N].OptCallFee);

        console.log("\n\n");
    }

    console.log("Rate Per Period: " + WithDraws.RatePerPeriod/100);
    console.log("Amortize Constant: " + WithDraws.AmortizeConstant);
}

function printBTCApprection()
{
    for (let N = 0; N < BTCApprections.length; N++)
    {
        console.log("YEAR: " + N + "\n");
        console.log("Home Equity: " + BTCApprections[N].HomeEquity);
        console.log("BTC-in-Contract: " + BTCApprections[N].BTCinContract);
        console.log("EST-BTC-Price: " + BTCApprections[N].ESTPriceBTC);
        console.log("EST-Contract Value: " + BTCApprections[N].ESTValCot);
        console.log("Contract Price: " + BTCApprections[N].CotPrice);
        console.log("EST-Profit: " + BTCApprections[N].ESTProfit);

        console.log("\n\n");
    }
}



CalculateDataProtocol();

// printDataProts();

CalculateAppreciation();

printBTCApprection();



