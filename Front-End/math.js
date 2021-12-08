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

let DataProts = new Array(HomeOwnerCal.TermLength);

for (let N = 0; N < HomeOwnerCal.TermLength; N++)
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
    this.BTCAmount = PriceBTC;
    
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

    this.AmortizeConstant = Math.round((this.BTCAmount * this.RatePerPeriod/100) / (1 - ((1 + this.RatePerPeriod/100) ^ (- (TermLength *  this.PaymentFrequency)))));

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
    this.CotAppr = 17.3262663/100;
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
        DataProts[N].TxFee *= DataProts[N].CotAppr;
        DataProts[N].BTCYieldNFT = DataProts[N].AnuityWithdraw - DataProts[N].TxFee;
        DataProts[N].ESTBTCPrice += (DataProts[N-1].ESTBTCPrice * X); 
        DataProts[N].NFTYieldUSD = DataProts[N].BTCYieldNFT * DataProts[N].ESTBTCPrice;
        DataProts[N].NFTRevOptCall = (DataProts[N-1].NFTRevOptCall * DataProts[N].CotAppr) + DataProts[N-1].NFTRevOptCall;
        DataProts[N].OptCallFee *= DataProts[N].NFTRevOptCall;
    }
}

function print()
{
    for (let N = 0; N < DataProts.length; N++)
    {
        console.log(DataProts[N].Payment);
        console.log(DataProts[N].Balance);
        console.log(DataProts[N].AnuityWithdraw);
        console.log(DataProts[N].TxFee);
        console.log(DataProts[N].BTCYieldNFT);
        console.log(DataProts[N].ESTBTCPrice);
        console.log(DataProts[N].NFTYieldUSD);
        console.log(DataProts[N].NFTRevOptCall);
        console.log(DataProts[N].OptCallFee);

        console.log("\n\n");
    }

    //console.log((WithDraws.RatePerPeriod/100));
}


CalculateDataProtocol(DataProts);

print();
// CalculateAppreciation(Apprections);


