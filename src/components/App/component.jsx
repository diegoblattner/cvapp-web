import { h, Component } from 'preact';
import './styles.scss';
import { loadCV } from '../../services/cv';
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
    const cvData = await loadCV();

    this.setState({
      uiState: cvData ? UIStates.loaded : UIStates.error,
      cvData,
    });
  }

  render() {
    const { uiState, cvData } = this.state;
    return uiState(cvData);
  }
}
