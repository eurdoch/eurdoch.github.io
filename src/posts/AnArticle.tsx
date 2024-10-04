
import Markdown from 'markdown-to-jsx'; 

const AnArticle = () => {
    return (
        <div>
            <Markdown>
                {"# An Article\n\n## So grand\n\n### Much sexiness\n\nThere are two blackfeet waiting at the meadow\n"}
            </Markdown>
        </div>             
    )
}

export default AnArticle