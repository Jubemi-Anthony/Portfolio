import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";

export default function RightQuestion(){
    const questions = useSelector((state) => state.questions);
    const rand = Math.floor(Math.random() * questions.length);
    let sample;
    let id;
    questions.length > 0 ? sample = questions[rand].question : sample = null;
    questions.length > 0 ? id = questions[rand].id : id = null;

    return(
        <section className="R_Question">
             {
                sample === null ? (<div className='load'><Loader/></div>) : (
                    <div>
                        <h4>Questions</h4>
                        <div className="question">
                            <p>{sample.question}?</p>
                            <p>_{sample.source}</p>
                            <Link to= {`/Answer/${id}`}><p>View Answer</p></Link>
                        </div>
                    </div>
                )
            }
        </section>
    )
}