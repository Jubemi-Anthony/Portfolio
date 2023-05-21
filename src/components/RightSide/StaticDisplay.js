import "./StaticDisplay.css";
import RightQuestion from "./RightQuestions";
import RightBlog from "./RightBlog";
import RightContact from "./RightContact";

export default function StaticDisplay({setAnswer, setPost}){
    return(
        <section className="StaticDisplay">
            <RightQuestion setAnswer={setAnswer}/>
            <RightBlog setPost={setPost}/>
            <RightContact/>
        </section>
    )
}