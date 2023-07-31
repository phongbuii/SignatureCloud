import { StyleSheet, Text, View } from 'react-native'
import { HEIGHT, WIDTH, getWidth } from '@app/config/functions'
import R from '@app/assets/index'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: R.colors.background,
    },
    header: {
        width: getWidth(),
        height:HEIGHT(70),
        backgroundColor: R.colors.backgroundFacebook
    },

    viewImg:{
        flex:4,
    },

    logoLogin: { width: WIDTH(60),height:HEIGHT(160),alignSelf:"center",marginTop:HEIGHT(30),},

    content: {
        flex:5,
        width: getWidth(),
        //backgroundColor:R.colors.backgroundModal,
        justifyContent: "center",
        alignItems: "center",
        marginTop:HEIGHT(50),
        padding: 20,
    },
    viewInput: {
        width: WIDTH(340),
        height: HEIGHT(50),
        borderWidth: 0.6,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        backgroundColor: R.colors.box,
    },

    viewButton: {
        width: WIDTH(340),
        height: HEIGHT(60),
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.6,
        borderRadius: 20,
        marginVertical: 30,
        backgroundColor: R.colors.backgroundFacebook,
    },
    textButton: {
        color: R.colors.box,
        fontSize: 20,
    }
})


export default styles;