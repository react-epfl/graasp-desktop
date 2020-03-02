import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { getDatabase, setDatabase } from '../../actions';
import Loader from '../common/Loader';
import Styles from '../../Styles';
import SampleDatabase from '../../data/sample.json';

export class ActionEditor extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.shape({
      button: PropTypes.string.isRequired,
    }).isRequired,
    dispatchGetDatabase: PropTypes.func.isRequired,
    dispatchSetDatabase: PropTypes.func.isRequired,
    database: PropTypes.shape({
      user: PropTypes.object,
      spaces: PropTypes.array,
      actions: PropTypes.array,
    }),
  };

  static defaultProps = {
    database: {},
  };

  componentDidMount() {
    const { dispatchGetDatabase } = this.props;
    dispatchGetDatabase();
  }

  handleEdit = ({ updated_src: updatedSrc }) => {
    const { dispatchSetDatabase } = this.props;
    dispatchSetDatabase(updatedSrc);
  };

  handleUseSampleDatabase = () => {
    const { dispatchSetDatabase } = this.props;
    dispatchSetDatabase(SampleDatabase);
  };

  render() {
    const { database, t } = this.props;

    if (!database || _.isEmpty(database)) {
      return <Loader />;
    }

    return (
      <div>
        <Typography variant="h6">{t('View Action Database')}</Typography>
        <ReactJson name="actions" collapsed src={database.actions} />
      </div>
    );
  }
}

const mapStateToProps = ({ Developer }) => ({
  database: Developer.get('database'),
});

const mapDispatchToProps = {
  dispatchGetDatabase: getDatabase,
  dispatchSetDatabase: setDatabase,
};

const StyledComponent = withStyles(Styles, { withTheme: true })(ActionEditor);
const TranslatedComponent = withTranslation()(StyledComponent);
const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TranslatedComponent);

export default ConnectedComponent;