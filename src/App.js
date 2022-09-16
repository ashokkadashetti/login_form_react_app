import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import UsersList from './components/UsersList';
import StyleSheet from './components/StyleSheet';
import InlineStyle from './components/InlineStyle';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import Increment from './components/Increment';
import Table from './components/Table';
import PerentComponent from './components/PerentComponent';
import RefsDemo from './components/RefsDemo';
import FRPerentInput from './components/FRPerentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBondry from './components/ErrorBondry';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverComponentTwo from './components/HoverComponentTwo';
import User from './components/User';
import CountIncrement from './components/CountIncrement';
import ConmponentC from './components/ConmponentC';
import { UserProvider } from './components/UserContext';
import Useeffect from './components/Useeffect';
import ArrayObj from './components/ArrayObj';
import HookCounterOne from './components/HookCounterOne';
import MoveOver from './components/MoveOver';
import LoginPage from './components/LoginPage';
import Validation from './components/Validation';
import CustomHookOne from './CustomHookOne';
import CustomHookTwo from './CustomHookOne';

function App() {
  return (
    <div className="App">
      <CustomHookOne />
      <CustomHookTwo />
      {/* <MoveOver /> */}
      {/* <LoginPage /> */}
      {/* <Validation /> */}
      {/* <HookCounterOne /> */}
      {/* <ArrayObj /> */}
      {/* <Useeffect /> */}
      {/* <ClickCounter /> */}
      {/* <Welcome /> */}
      {/* <UserProvider value='Ashok'>
        <ConmponentC />
      </UserProvider> */}
      {/* <CountIncrement render={(count, incrementCount) => {(<ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>)}}/> */}
    {/* <CountIncrement /> */}
      {/* <User render={(isLoggedIn) => isLoggedIn ? 'Ashok' : 'Guest'}/> */}
      {/* <ClickCounterTwo /> */}
      {/* <HoverComponentTwo /> */}
      {/* <ClickCounter name='Ashok' />
      <HoverCounter name='Kiran' /> */}
      {/* <ErrorBondry>
        <Hero heroName='Raju'/>
        <Hero heroName='Ashok'/>
        <Hero heroName='joker'/>
      </ErrorBondry> */}
      {/* <Hero heroName='Batman'/>
      <Hero heroName='Superman'/>
      <Hero heroName='joker'/> */}


      {/* <PerentComponent /> */}
      {/* <RefsDemo /> */}
      {/* <FRPerentInput /> */}
      {/* <PortalDemo /> */}
      {/* <Table /> */}
      {/* <Increment /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <InlineStyle /> */}
      {/* <StyleSheet primary ={true} /> */}
      {/* <UsersList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}

    {/* <EventBind /> */}

    {/* <FunctionClick />
    <ClassClick /> */}

      {/* <Message /> */}

      {/* <Counter /> */}

      {/* <Greet name='Ashok' color='Red'>
        <p>This is chiled tag</p>
      </Greet> */}
      {/* <Greet name='Sagar' color='pink'>
        <button>Action</button>
      </Greet>
      <Greet name='Mallu' color='white' />

      <Welcome name='Ashok' color='Red'/>
      <Welcome name='Sagar' color='pink'/>
      <Welcome name='Mallu' color='white'/> */}


      {/* <Hello /> */}


    </div>
  );
}

export default App;
