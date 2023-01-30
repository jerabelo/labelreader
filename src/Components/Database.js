

const ingredientsList = ["Caffeine", "Tren", "TRT","Shrooms", "Adderal"]


function Ingredients() { 
return (
    <div>
        {ingredientsList.map((item, index) =>(
            <div key={index}>ingredient: {item}</div>
        ))}
    </div>
)
}

export default Ingredients