export function Plan ( {planBody} ){
    return(
        <div class="w3-third w3-margin-bottom">
            <ul class="w3-ul w3-border w3-center w3-hover-shadow">
                <li class={`${planBody.bgColor} w3-xlarge w3-padding-32`}>{ planBody.title }</li>
                { planBody.description.map( d => (
                    <li class="w3-padding-16">{ d }</li>
                ) ) }
               <li class="w3-padding-16">
                    <h2 class="w3-wide price">{ planBody.price }</h2>
                    <span class="w3-opacity">per month</span>
                </li>
                <li class="w3-light-grey w3-padding-24">
                    <button class="w3-button w3-green w3-padding-large">Sign Up</button>
                </li>
            </ul>
        </div>
    )
}