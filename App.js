import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.containerA}>
        <Text style={styles.TextoA}>A</Text>
      </View>

      <View style={styles.containermedio}>
        <View style={styles.fila1}>
          <View style={styles.containermedio1}>
            <Text style={styles.TextosTodos}>B</Text>
          </View>
          <View style={styles.containermedio1}>
            <Text style={styles.TextosTodos}>C</Text>
          </View>
          <View style={styles.containermedio1}>
            <Text style={styles.TextosTodos}>D</Text>
          </View>

        </View>
        <View style={styles.fila2}>
          <View style={styles.containermedio2}>
            <Text style={styles.TextosTodos}>E</Text>
          </View>
          <View style={styles.containermedio2}>
            <Text style={styles.TextosTodos}>F</Text>
          </View>
          <View style={styles.containermedio2}>
            <Text style={styles.TextosTodos}>G</Text>
          </View>          
        </View>
      </View>

      <View style={styles.containerH}>
        <Text style={styles.TextoH}>H</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerA: {
    backgroundColor: '#E8666A',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    width: '90%',
    marginTop: '1%',
  },
  TextoA: {
    textAlign: 'center',
    marginTop: '0%',
    fontSize: '200%',
  },
  TextoH: {
    textAlign: 'center',
    marginTop: '0%',
    fontSize: '200%',
  },
  containermedio: {    
    flexDirection: 'column',
    marginTop: '1%',
    backgroundColor: '#B7EB8B',
    width: '90%',
    height: '30%',
    justifyContent: 'center',
  },
  fila1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containermedio1: {
    backgroundColor: '#833BEB',
    display: 'flex',
    width: '20%',
    height: '120%',
    marginTop: '2%',
    marginBottom: '5%',
  },
  fila2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containermedio2: {
    backgroundColor: '#833BEB',
    display: 'flex',
    width: '20%',
    height: '100%',
    marginTop: '10%',
    marginBottom: '1%',
  },
  containerH: {
    backgroundColor: '#E8666A',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    width: '90%',
    marginTop: '1%',
    marginBottom: '1%',
  },
  
  TextosTodos: {
    textAlign: 'center',
    marginTop: '15%',
    fontSize: '200%',
  },
});

/*fetch('')
  .then(Response => Response.json())
  .then(json => console.log(json))*/
  