let Y = 0.50;
let X = 0.05;
let OptionFee = 0.05;
let HomeOwnerCal = new HomeOwner(50000, 500000, 10, 200000);
let WithDraws = new WithdrawlContract(HomeOwnerCal.PriceBTC, HomeOwnerCal.TermLength, 1);

let BTCApprections = new Array(HomeOwnerCal.TermLength);

for (let N = 0; N < HomeOwnerCal.TermLength; N++)
{   
    BTCApprections[N] = new BTCAppreciate();
}

let DataProts = new Array(HomeOwnerCal.TermLength + 1);

for (let N = 0; N < HomeOwnerCal.TermLength + 1; N++)
{
    DataProts[N] = new DataForProtocol();
}

function HomeOwner(PriceBTC, ValueOfHome, TermLength, CurrMorBalance){
    this.PriceBTC = PriceBTC;
    this.ValueOfHome = ValueOfHome;
    this.TermLength = TermLength;
    this.CurrMorBalance = CurrMorBalance;
    this.HomeEquity = Math.min((this.ValueOfHome - this.CurrMorBalance) / 2, this.PriceBTC);
    this.BtcToCot = this.HomeEquity/this.PriceBTC;
}

function WithdrawlContract(PriceBTC, TermLength, PaymentFrequency)
{
    this.BTCAmount = HomeOwnerCal.BtcToCot;
    
    if (TermLength === 10)
    {
        this.AmortizeRate = 15;
    }

    else if (TermLength === 7)
    {
        this.AmortizeRate = 18;
    }

    else if (TermLength === 5)
    {
        this.AmortizeRate = 23;
    }

    this.PaymentFrequency = PaymentFrequency;
    
    this.RatePerPeriod = Math.round((((1 + ((this.AmortizeRate/100) / this.BTCAmount)) ** (this.BTCAmount / this.PaymentFrequency)) - 1) * 100);

    this.AmortizeConstant = ((this.BTCAmount * (this.RatePerPeriod/100)) / (1 - ((1 + (this.RatePerPeriod / 100)) ** (-1 * (TermLength *  this.PaymentFrequency)))));

}

function BTCAppreciate()
{
    this.HomeEquity =  0;  
    this.BTCinContract = 0;
    this.ESTPriceBTC = 0;
    this.ESTValCot = 0;
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
    this.ESTBTCPrice = (HomeOwnerCal.PriceBTC * Y) + HomeOwnerCal.PriceBTC;
}

function CalculateAppreciation (BTCApprections) {  // Method to display property type of Bike
        
    BTCApprections[0].HomeEquity = (HomeOwnerCal.ValueOfHome - HomeOwnerCal.CurrMorBalance) * Y
         + (HomeOwnerCal.ValueOfHome - HomeOwnerCal.CurrMorBalance);
    
         BTCApprections[0].BTCinContract = DataProts[0].Balance;

         BTCApprections[0].ESTPriceBTC = (HomeOwnerCal.PriceBTC * X) + HomeOwnerCal.PriceBTC;

         BTCApprections[0].ESTValCot = BTCApprections[0].BTCinContract * BTCApprections[0].ESTPriceBTC;

         BTCApprections[0].CotPrice = DataProts[0].NFTRevOptCall + DataProts[0].OptCallFees;

         BTCAppreciates[0].ESTProfit = Math.max(((BTCApprections[0].ESTValCot - BTCApprections[0].CotPrice) - (BTCApprections[0].ESTValCot * OptionFee)), 0);

    for (let N = 1; N < BTCApprections.length; N++)
    {
        BTCApprections[N].HomeEquity = (BTCApprections[N-1].HomeEquity * Y) + BTCApprections[N-1].HomeEquity;
        BTCApprections[N].BTCinContract = DataProts[N].Balance;
        BTCApprections[N].ESTPriceBTC = DataProts[N].ESTBTCPrice;
        BTCApprections[N].ESTValCot = BTCApprections[N].ESTPriceBTC * BTCApprections[N].BTCinContract;
        BTCApprections[N].CotPrice = DataProts[N].NFTRevOptCall + DataProts[N].OptCallFees;
        BTCAppreciates[N].ESTProfit = Math.max(((BTCApprections[N].ESTValCot - BTCApprections[N].CotPrice) - (BTCApprections[N].ESTValCot * OptionFee)), 0);
    }

}

function CalculateDataProtocol(DataProts)
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
        DataProts[N].TxFee *= DataProts[N].CotAppr * 0.025;
        DataProts[N].BTCYieldNFT = DataProts[N].AnuityWithdraw - DataProts[N].TxFee;
        DataProts[N].ESTBTCPrice += (DataProts[N-1].ESTBTCPrice * X); 
        DataProts[N].NFTYieldUSD = DataProts[N].BTCYieldNFT * DataProts[N].ESTBTCPrice;
        DataProts[N].NFTRevOptCall = (DataProts[N-1].NFTRevOptCall * DataProts[N].CotAppr) + DataProts[N-1].NFTRevOptCall;
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






function print()
{
    for (let N = 0; N < DataProts.length; N++)
    {
        console.log(DataProts[N].Payment);
        console.log(DataProts[N].Balance);
        console.log(DataProts[N].AnuityWithdraw);
        console.log(DataProts[N].CotAppr);
        console.log(DataProts[N].TxFee);
        console.log(DataProts[N].BTCYieldNFT);
        console.log(DataProts[N].ESTBTCPrice);
        console.log(DataProts[N].NFTYieldUSD);
        console.log(DataProts[N].NFTRevOptCall);
        console.log(DataProts[N].OptCallFee);

        console.log("\n\n");
    }

    console.log(WithDraws.RatePerPeriod/100);
    console.log(WithDraws.AmortizeConstant);
}


CalculateDataProtocol(DataProts);

print();
// CalculateAppreciation(Apprections);


