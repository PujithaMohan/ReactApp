import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data';

function App() {
  //selectedTopic-current state, setSelectedTopic-updating state
  const [selectedTopic,setSelectedTopic] = useState();//initial state
  function clickHandler(typeOfConcept){
    setSelectedTopic(typeOfConcept);
    console.log(typeOfConcept);
  }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Components</h2>
        <ul>
          <CoreConcepts title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}/>

          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
             {/*we added onClickevent prop because we wanted to display the dynamic
            content below when the button is clicked, if we write onclick event handler
            in TabButton.jsx, then we wouldnt have access to display the dynamic content
             that needs to be rendered below in this component */}
            <TabButton onClickEvent={()=>clickHandler('components')}>Components</TabButton>
            <TabButton onClickEvent={()=>clickHandler('jsx')}>JSX</TabButton>
            <TabButton onClickEvent={()=>clickHandler('props')}>Props</TabButton>
            <TabButton onClickEvent={()=>clickHandler('state')}>State</TabButton>
            {/* configuring the execution of event dependant function ()=>clickHandler('State') */} 
            {/* <TabButton label="Components"/> - component composition */} 
          </menu>
          {/* {!selectedTopic && <p>Please select a topic</p>} - this is one of the ways of 
           saying react if truthy do what follows &&*/}
          {!selectedTopic?<p>Please select a topic</p>:<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
