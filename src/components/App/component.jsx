import { h, Component } from 'preact';
import { AppLoading } from './loading.component';
import { AppError } from './error.component';
import { AppMain } from './main.component';

const UIStates = {
  loading() {
    return <AppLoading />;
  },
  loaded(cvData) {
    return <AppMain cvData={cvData} />;
  },
  error() {
    return <AppError />;
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
