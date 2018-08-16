import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BoxBreath from '../containers/BoxBreath';
import { LinearGradient } from 'expo';
import { heading, spacing } from '../theme';
export default class App extends React.Component {
    render() {
        return (React.createElement(LinearGradient, { start: [0.1, 0.1], end: [1, 1], colors: ["rgb(255,255,255)", "rgb(235,235,235)"], style: styles.container },
            React.createElement(View, { style: styles.header },
                React.createElement(View, { style: styles.title },
                    React.createElement(Text, { style: styles.titleHeader }, "Box Breath"),
                    React.createElement(Text, { style: styles.titleSubHeader }, "Even breath to calm and increase blood oxygenation."))),
            React.createElement(View, { style: styles.contentContainer },
                React.createElement(BoxBreath, null))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        paddingTop: spacing.four,
        paddingLeft: spacing.four,
        paddingRight: spacing.four,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    title: {
        flex: 1,
    },
    titleHeader: {
        fontSize: heading.one,
        color: "rgba(0,0,0,0.96)",
        marginBottom: spacing.one
    },
    titleSubHeader: {
        fontSize: heading.three,
        color: "rgba(0,0,0,0.7)",
    },
    contentContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxBreath: {
        height: 200,
        width: 200
    }
});
//# sourceMappingURL=App.js.map