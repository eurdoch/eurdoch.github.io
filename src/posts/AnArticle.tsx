
import Markdown from 'markdown-to-jsx'; 

const AnArticle = () => {
    return (
        <div>
            <Markdown>
                {"# An article\n\n## Subheader\nWhat a great article!\n"}
            </Markdown>
        </div>             
    )
}

export default AnArticle