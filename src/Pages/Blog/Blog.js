import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='px-10 py-5 '>
                <div className='bg-base-200 rounded-xl p-5'>
                    <p className='text-xl font-semibold '> Question 01 : What are the different ways to manage a state in a React application? </p>
                    <div className='bg-base-100 rounded-xl my-5 p-5'>
                        <p className='my-3'><span className='font-semibold' >Answer : <br /> </span>
                            <span>
                                There are many way built into the core React library for managing a state in a React application.<br />

                                <code>useState</code> is the first tool we should reach for to manage state in our components. <code>useReducer</code> is another option that can be used for either local or global state. It is similar in many ways to <code>useState</code> under the hood, although instead of just an initial state it accepts a reducer. The benefit of <code>useReducer</code> is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than <code>useState</code> .
                            </span>
                        </p>
                    </div>
                </div>
            </div >
            <div className='px-10 py-5 '>
                <div className='bg-base-200 rounded-xl p-5'>
                    <p className='text-xl font-semibold '> Question 02 : How does prototypical inheritance work?</p>
                    <div className='bg-base-100 rounded-xl my-5 p-5'>
                        <p className='my-3'><span className='font-semibold' >Answer : <br /> </span>
                            <span>
                                Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                            </span>
                        </p>
                    </div>
                </div>
            </div >
            <div className='px-10 py-5 '>
                <div className='bg-base-200 rounded-xl p-5'>
                    <p className='text-xl font-semibold '> Question 03 : What is a unit test? Why should we write unit tests? </p>
                    <div className='bg-base-100 rounded-xl my-5 p-5'>
                        <p className='my-3'><span className='font-semibold' >Answer : <br /> </span>
                            <span>
                                Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                            </span>
                        </p>
                    </div>
                </div>
            </div >
            <div className='px-10 py-5'>
                <div className='bg-base-200 rounded-xl p-5'>
                    <p className='text-xl font-semibold '> Question 04 : What are the different ways to manage a state in a React application? </p>
                    <div className='bg-base-100 rounded-xl my-5 p-5'>
                        <p className='my-3'><span className='font-semibold' >Answer : <br /> </span>
                            <span className='font-bold'>Angular</span> is the most mature of the frameworks, has good backing in terms of contributors and is a complete package. However, the learning curve is steep and concepts of development in Angular may put off new developers. Angular is a good choice for companies with large teams and developers who already use TypeScript.
                            <br />
                            <br />
                            <span className='font-bold'>React</span> is just old enough to be mature and has a huge number of contributions from the community. It has gained widespread acceptance. The job market for React is really good, and the future for this framework looks bright. React looks like a good choice for someone getting started with front-end JavaScript frameworks, startups, and developers who like some flexibility. The ability to integrate with other frameworks seamlessly gives it a great advantage for those who would like some flexibility in their code.
                            <br />
                            <br />
                            <span className='font-bold'>Vue</span> is newest to the arena, without the backing of a major company. However, it has done really well in the last few years to come out as a strong competitor for Angular and React, and especially so with the release of Vue 3.0. This is perhaps playing a role with a lot of Chinese giants like Alibaba and Baidu picking Vue as their primary front-end JavaScript framework. Vue should be your choice if you prefer simplicity, but also like flexibility.
                        </p>
                    </div>
                </div>
            </div >

        </div>
    );
};

export default Blog;