TestScore = 75;
Grade = "A+";
GPA = 2.1;
if (a=(TestScore >= 80 && (GPA>= 3.5) && (Grade == "A+")))
{
    console.log("boolean result ", a);
}
if(b=(TestScore >= 80 || GPA>= 3.5 || Grade == "A+"))
{
    console.log("boolean result ", b);

}