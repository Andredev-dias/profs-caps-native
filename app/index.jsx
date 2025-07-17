import { Image } from "expo-image";
import { router } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {

    // function gotToList(){
    //     router.push('/list')
    // }

    // const goToList = () => {
    //     router.push('/list')
    // }

    // const goToList = () =>  router.push('/list')

    return (
        <SafeAreaView style={s.wrap}>
            <Text style={s.text2}>Meu header fixo</Text>
            <ScrollView>
                <Text style={s.text}>Minha primeira página</Text>
                <View style={s.wrapView}>
                    {/* IMAGEM DO REACT NATIVE */}
                    {/* <Image style={s.img} source={require('../assets/images/react-logo.png')}/>
                    <Image style={s.img} source={'https://img.freepik.com/fotos-premium/bandeira-da-italia-ilustracao-3d-da-bandeira-italiana-acenando_2227-631.jpg'}/> */}

                    {/* IMAGEM DO EXPO IMAGE */}
                    <Image style={s.img} source={require('../assets/images/react-logo.png')} />
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas aspernatur omnis ipsum a sequi, porro blanditiis quibusdam exercitationem itaque incidunt voluptatibus earum id cum ab minus harum cumque fugiat.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas aspernatur omnis ipsum a sequi, porro blanditiis quibusdam exercitationem itaque incidunt voluptatibus earum id cum ab minus harum cumque fugiat.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas aspernatur omnis ipsum a sequi, porro blanditiis quibusdam exercitationem itaque incidunt voluptatibus earum id cum ab minus harum cumque fugiat.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas aspernatur omnis ipsum a sequi, porro blanditiis quibusdam exercitationem itaque incidunt voluptatibus earum id cum ab minus harum cumque fugiat.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas aspernatur omnis ipsum a sequi, porro blanditiis quibusdam exercitationem itaque incidunt voluptatibus earum id cum ab minus harum cumque fugiat.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas aspernatur omnis ipsum a sequi, porro blanditiis quibusdam exercitationem itaque incidunt voluptatibus earum id cum ab minus harum cumque fugiat.
                    </Text>
                    <Text>😎</Text>
                    <TouchableOpacity style={s.btn} onPress={() => router.push('/list')}>
                        <Text style={s.btnText}>Ir para a lista</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={s.btn} onPress={() => router.push('/consume')}>
                        <Text style={s.btnText}>Ir para a API</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    text: {
        color: '#090909',
        backgroundColor: 'transparent',
        paddingHorizontal: 20,
        paddingVertical: 20,
        textAlign: 'center'
    },
    text2: {
        color: '#ffffff',
        backgroundColor: '#090909',
        paddingHorizontal: 20,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 6,
        textAlign: 'center',
        fontSize: 22
    },
    wrap: {
        flex: 1
    },
    wrapView: {
        // borderWidth: 2,
        // borderColor: '#090909',
        width: '90%',
        alignSelf: "center",
        marginTop: 10,
        alignItems: 'center',
        gap: 20,
        paddingBottom: 40
    },
    img: {
        width: 100,
        height: 100
    },
    btn: {
        paddingVertical: 15,
        paddingHorizontal: 35,
        // width: 200,
        // height: 50,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#1a5381',
        borderRadius: 999,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    btnText: {
        color: '#fff',
    }
})


