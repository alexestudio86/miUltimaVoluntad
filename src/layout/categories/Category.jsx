export function Category ( { bodyArticle } ) {
    return (
        <article className='w3-third w3-hover-opacity'>
            <img className='w-100 w3-padding' height='300px' width='auto' alt={ bodyArticle.title } src={ bodyArticle.imgUrl } style={ {objectFit: 'cover'} } />
        </article>
    )
}