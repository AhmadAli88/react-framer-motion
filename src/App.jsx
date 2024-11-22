import './App.css';
import BasicAnimation from './components/Basic';
import DragAnimation from './components/DragAnimation';
import HoverAnimation from './components/HoverAnimation';
import LayoutAnimation from './components/LayoutAnimation';
import SharedLayoutTransition from './components/SharedLayoutTransition';
import SvgAnimation from './components/SvgAnimation';
import VariantsExample from './components/VariantsExample';

function App() {
  return (
    <div>
      <BasicAnimation />
      <VariantsExample/>
      <HoverAnimation/>
      <DragAnimation/>
      <LayoutAnimation/>
      <SharedLayoutTransition/>
      <SvgAnimation/>
    </div>
  );
}

export default App;
