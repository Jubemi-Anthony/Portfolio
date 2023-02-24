import { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { shuffle } from 'lodash';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure
  } from '@chakra-ui/react'

import './Questions.css' 
import Ask from "../../components/Ask/Ask";

export default function Questions(){
    const scatteredQuestions = useSelector((state) => state.questions);
    const questions = shuffle(scatteredQuestions);

    const [searchQuestion, setsearchQuestion] = useState('');

    const { isOpen, onOpen, onClose } = useDisclosure();

    const update = ()=>{
        onOpen();
    }

    return(
        <section className="Questions">
             <div className="search">
                <input 
                    type="text"
                    placeholder='Search by Question, Source or Answerer'
                    onChange={(e) =>{
                        setsearchQuestion(e.target.value);
                    }}
                />
                <img className='icon' src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-64.png" alt="search"/>
            </div>
            <div className="ask"><button onClick={update}>Ask a Question</button></div>
            <div className="allQuestions">
                {
                    questions.filter((questions) => {
                        if(searchQuestion === ''){
                            return questions;
                        }else if(questions.question.tag.toLowerCase().includes(searchQuestion.toLowerCase()) || questions.question.question.toLowerCase().includes(searchQuestion.toLowerCase()) || questions.answeredBy.toLowerCase().includes(searchQuestion.toLowerCase())){
                            return questions
                        }
                    }) 
                    .map((question) =>(
                        <Link key={question.id} to={`/Answer/${question.id}`}>
                            <div className="question-box">
                                <p className='question-title'>{question.question.question}?</p>
                                <div className="question-details">
                                    <p>{question.question.tag} <img src="https://cdn4.iconfinder.com/data/icons/design-thinking-34/512/design-thinking-management-problem-question-thinking-solve-64.png" alt="question" className="icon" /></p>
                                    <p>{question.question.answeredBy} <img className='icon' src="https://cdn3.iconfinder.com/data/icons/people-emoji/50/HandRaised-64.png" alt="answer"/></p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <Ask
                    close={onClose}
                />
                </ModalContent>
            </Modal>
        </section>
    )
}