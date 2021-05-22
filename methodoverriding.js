class Bank
{
    roi()
    {
        return 0;
    }
}

class Axis extends Bank
{
    roi()
    {
        return 10.6;
    } 
}
class SBI extends Bank
{
    roi()
    {
        return 12.6;
    } 
}
sbi = new SBI();
console.log(sbi.roi()); //12.6

ax = new Axis();
console.log(ax.roi()); //10.6

