export function Category ( { bodyArticle } ) {
    return (
        <article className='w3-third w3-hover-opacity w3-card'>
            <img className='w-100 w3-padding' height='300px' width='auto' alt={ bodyArticle.title } src={ bodyArticle.imgUrl } style={ {objectFit: 'cover'} } />
            <header className="w3-container w3-center">
                <p>{ bodyArticle.title  }</p>
            </header>
        </article>
    )
}