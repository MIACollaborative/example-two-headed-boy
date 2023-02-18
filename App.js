import OldSchoolNavigation from './OldSchoolNavigation';
import AgentNavigation from './AgentNavigation';
import Constants from 'expo-constants';

function AppContainer() {

  let variant = Constants.expoConfig.variant;
  console.log('Variant:', variant);
  
  if (variant == 'AGENT') {
    return(
      <AgentNavigation/>
    );
  } else {
    return(
      <OldSchoolNavigation/>
    );
  }
}

export default AppContainer;

