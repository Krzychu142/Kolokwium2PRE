import React, {useState} from "react";

const KRhome = () => {

    const [name, setName] = useState('World');

    return(
        <>
            <div class="jumbotron">
            <h1 class="display-4">Hello, {name}</h1>
            
             <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button" onClick={ () => setName('Krzysztof')}>Learn more</a>
             </p>
            </div>
        </>
    );
}

export default KRhome;