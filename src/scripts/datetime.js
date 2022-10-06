export default function DateDisplayData(){
    var date = new Date();
    const formattedDate = date.toDateString();
    document.getElementById('date-time').innerHTML=formattedDate;
}