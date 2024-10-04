
import Markdown from 'markdown-to-jsx'; 

const SomeNews = () => {
    return (
        <div>
            <Markdown>
                {"# Some News\n\n## sOmething hapened\n\n## oh dear\n\nla la la la lala \n"}
            </Markdown>
        </div>             
    )
}

export default SomeNews