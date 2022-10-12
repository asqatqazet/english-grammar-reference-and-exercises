export const QuestionBox = (props) => {

    const {question, answer} = props

    return (
        <>
            <div className="collapse w-3/5 collapse-arrow  font-sans">
                <input type="checkbox" className="peer"/>
                <div className="collapse-title">
                    {question}
                </div>
                <div className="collapse-content">
                    <p className="pl-5">{answer}</p>
                </div>
            </div>
        </>
    )
}