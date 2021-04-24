function Test (){
    let x = [`Poxos`,`Petros`,`Ashot`,`Arsen`]
    return (<div>
            <ul>
                {x.map( (el,i) => <li key={i}>{el}</li> )}
            </ul>
    </div>
    )
}

export default Test;