import {Component} from "react";
import './SimplePresent.css'
import {QuestionBox} from "../../question-box/QuestionBox";

export class SimplePresent extends Component {

    render() {
        return (
            <div className="font-serif container max-w-full w-11/12 p-5 m-auto ">
                <h2 className="pb-2 font-cormorant font-extrabold"> Present Simple Tense Introduction</h2>
                <ol className="flex flex-col gap-3">
                    <li>
                        <p className="leading-8">
                            1) We use the present simple when we talk about things in general. We use it to say that
                            something happens all the time or repeatedly, or that something is true in general:
                            <span
                                className="ml-8 font-sans block">Jane works as a barista. Her shift begins at 7 a.m.</span>
                        </p>
                    </li>
                    <li>
                        <p className="leading-8">
                            2) The present simple is formed with the bare infinitive form of the verb. We add <span
                            className="font-sans">-s</span> in the
                            third person singular (he/she/it).
                            I like apples but my father likes grapes.
                            Verbs ending in o, s, ch, sh, x add <span className="font-sans">-es</span> for the third
                            person singular.
                            <span className="ml-8 font-sans block">My sister watches TV in the evening and my brother does his homework.</span>
                            Such verbs as <span className="italic">to be</span> and <span
                            className="italic">to have</span> are irregular.
                        </p>
                        <div className="w-3/4 m-auto">
                            <div className="grid grid-cols-5 grid-rows-3">
                                <div
                                    className="col-start-1 col-end-3  row-start-1 row-end-2 flex flex-row justify-around">
                                    <span>I am</span>
                                    <span>we are</span>
                                </div>
                                <div
                                    className="col-start-1 col-end-3 row-start-2 row-end-3 flex flex-row justify-around">
                                    <span>you are</span>
                                    <span>you are</span>

                                </div>
                                <div
                                    className="col-start-1 col-end-3  row-start-3 row-end-4 flex flex-row justify-around">
                                    <span>He/She/It is</span>
                                    <span>they are</span>
                                </div>
                                <div
                                    className="col-start-4 col-end-6   row-start-1 row-end-2 flex flex-row justify-around">

                                    <span>I have</span>
                                    <span>we have</span>
                                </div>
                                <div
                                    className="col-start-4 col-end-6   row-start-2 row-end-3  flex flex-row justify-around">
                                    <span>you have</span>
                                    <span>you have</span>
                                </div>
                                <div
                                    className="col-start-4 col-end-6  row-start-3 row-end-4  flex flex-row justify-around">
                                    <span>he/she/it has</span>
                                    <span>they have</span>
                                </div>
                            </div>
                        </div>

                        <p className="leading-8 italic">
                            Note the difference between British English and American English.
                        </p>
                    </li>
                </ol>
                <p className="leading-8">
                    Questions are formed with <span className="font-sans">do</span> and the bare infinitive form of the
                    verb. The third person singular is
                    formed with <span className="font-sans">does</span>. Negatives are formed with <span
                    className="font-sans">do/does not</span> and the bare infinitive form of the verb.
                </p>
                <p className="leading-8">
                    The third person singular is formed with does not and the bare infinitive form of the verb.
                    <span className="pl-10 block">
                        <small>(+)</small> He gets up at 6 o’clock every morning.
                    </span>
                    <span className="pl-10 block">
                         (-) He does not get up at 6 o’clock every morning. He gets up at 7.
                    </span>
                    <span className="pl-10 block">
                         (?) Does he get up at 6 o’clock every morning?/When does he get up?
                    </span>

                    Some time markers can explain how often someone does an action, or something happens. These time
                    markers are <span className="font-extrabold">always, often, usually, sometimes, rarely, never, every day</span> etc.
                    <span className="pl-10 block font-sans">
                         I usually cook at home but my friend always eats at the local cafe.
                    </span>
                    Note that in the above examples time markers come before the verb. With the verb <span
                    className="font-sans">to be</span> the time marker comes after it.
                    <span className="pl-10 block font-sans">
                          Kim is always late for classes.
                    </span>
                </p>

                <section className="leading-8 mt-10">
                    <h3 className="font-extrabold font-cormorant">Short Story Dialogue</h3>
                    <h4 className="font-serif">The present simple is widely used in daily life.</h4>
                    <div className="pl-10">
                        <p>– Hello! <span className="font-sans">What’s your name?</span></p>
                        <p>– Oh, hi, <span className="font-sans">my name’s Sarah.</span> And yours?</p>
                        <p>– <span className="font-sans">I'm Alex.</span> Nice to meet you, Sarah!</p>
                        <p>– Nice to meet you too! So, <span className="font-sans">where do you come from?</span></p>
                        <p className="font-sans"> – I come from Germany. And where are you from?
                        </p>
                        <p className="font-sans">– I’m from the UK.</p>
                        <p> – Oh, <span className="font-sans">I have a lot of friends from the UK. You
                            probably have a great sense of
                            humour.</span></p>
                        <p className="font-sans">– I’m not sure about that! I don’t always get our jokes.</p>
                        <p className="font-sans">– You’re an exception then!</p>
                        <p> – I’ll take that as a compliment.</p>
                    </div>
                </section>

                <section className="leading-8 mt-10">
                    <h3 className="font-extrabold font-cormorant"> Independent Practice - Present simple tense</h3>
                    <div className="p-10">
                        <h4 className="font-serif">1) Underline the correct phrase..</h4>
                        <QuestionBox question={"a. Excuse me, do you know/does you know the time?"}
                                     answer={"Excuse me, do you know the time?"}/>
                        <QuestionBox question={"b. My sister always is/is always in a hurry."}
                                     answer={"My sister is always in a hurry."}/>
                        <QuestionBox question={"c. What time you go/do you go to bed on Fridays?"}
                                     answer={"What time do you go to bed on Fridays?"}/>
                    </div>
                    <div className="p-10">
                        <h4 className="font-serif"> 2) Write the correct sentence.</h4>
                        <QuestionBox
                            question={" a. Kelly (to stay/often) at home on Saturdays to work on her projects."}
                            answer={"Kelly often stays at home on Saturdays to work on her projects."}/>
                        <QuestionBox
                            question={" b. Her brother (not to use) the Internet. He (to like) everything the old-fashioned way."}
                            answer={"Her brother doesn’t use the Internet. He likes everything the old-fashioned way."}/>
                        <QuestionBox question={" c. When (you/to get) home? We need to talk."}
                                     answer={"When do you get home? We need to talk."}/>
                        <QuestionBox question={" d. (you/to know) Lucy? She (to be) my friend from college."}
                                     answer={"Do you know Lucy? She is my friend from college."}/>
                    </div>
                    <div className="p-10">

                        <h4 className="font-serif"> 3) Answer the questions.</h4>

                        <QuestionBox question={" a. What do you do for a living?"}
                                     answer={"I work as a teacher. I teach 2nd grade."}/>
                        <QuestionBox question={"  b. What are your hobbies?"}
                                     answer={" I like painting and reading. I sometimes go hiking."}/>
                        <QuestionBox question={" c. What does your typical Sunday look like?"}
                                     answer={"I wake up really late, have a big breakfast, and watch TV all day."}/>

                    </div>
                </section>
            </div>
        )
    }
}