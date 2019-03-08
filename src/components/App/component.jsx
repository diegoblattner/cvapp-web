import { h, Component } from 'preact';
import { Profile } from '../Profile/component';
import { Skills } from '../Skills/component';

const UIStates = {
  loading() {
    return <div>Loading....</div>;
  },
  loaded({ profile, skills }) {
    return (
      <div>
        <Profile {...profile} />
        <Skills skills={skills} />
      </div>
    );
  },
  error() {
    return (
      <div>
        <b>Something went astray =(</b>
        <small>Refreshing the page might work</small>
      </div>
    );
  },
};

export class App extends Component {
  constructor() {
    super();
    this.state.uiState = UIStates.loading;
    this.cvData = {};
  }

  async componentDidMount() {
    try {
      const cvData = await import('../../../mock/cv-data.json');
      // const cvDataStream = await fetch('../../../mock/cv-data.json');
      // const cvData = await cvDataStream.json();

      this.setState({
        uiState: UIStates.loaded,
        cvData,
      });
    } catch (e) {
      console.error('error loading the json', e);
      // TODO: log error...
      this.setState({
        uiState: UIStates.error,
        cvData: {},
      });
    }
  }

  render() {
    const { uiState, cvData } = this.state;
    return uiState(cvData);
  }
}
