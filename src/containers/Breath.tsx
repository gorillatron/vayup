import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import BreathVisualization from '../components/visualizations/Breath'
import BreathHeader from '../components/BreathHeader'
import RatioPicker from '../components/RatioPicker'
import { spacing } from '../theme'
import { TRatio, Ratio, ratioToMs } from '../lib/Ratio'
import { RootState } from '../redux/root-reducer'
import * as settings from '../redux/settings'

interface SProps {
  ratio: TRatio;
}

interface DProps {
  setRatio: (ratio:TRatio) => void
}

interface IProps {
  ratio: TRatio
}

type Props = SProps & DProps & IProps

const settingsKey = "breathe"

const mapStateToProps = (state:RootState) => ({
  ratio: settings.getRatioForKey(state, settingsKey)
})

const mapDispatchToprops = (dispatch) => ({
  setRatio: (ratio:TRatio) => dispatch(settings.setRatioForKey(settingsKey, ratio))
})

const { width } = Dimensions.get("window")

export default connect(mapStateToProps, mapDispatchToprops)(
  class Breath extends React.Component<Props> {

    onRatioChange = (ratio:TRatio) => {
      this.props.setRatio(ratio)
    }

    render() {

      const {ratio} = this.props
      
      return (
        <View style={[styles.container]}>
          
          <BreathHeader 
            title="Just Breathe"
            subTitle="Relieve stress or anxiety by training your breath to the vizualisation."
          />

          <View style={styles.visualizationContainer}>
            <BreathVisualization 
              ratio={ratioToMs(ratio)} 
              size={((width - (spacing.four * 2)) / 100) * 100}/>
          </View>
          
          <RatioPicker 
            style={styles.ratioPicker}
            value={ratio}
            showValues={["inhale", "exhale"]}
            onChange={this.onRatioChange}
          />

        </View>
      );
    }
  })


const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  visualizationContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  ratioPicker: {
    flex: 1
  }
});
