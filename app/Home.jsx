import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-web'
import { useNavigation, useRoute } from '@react-navigation/native';
import Alert from '../components/Alert';

const Card = ({ product }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Product', { product })}
        >
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </TouchableOpacity>
    )
}
const Home = () => {
    const route = useRoute();//
    const navigation = useNavigation();//
    const { message } = route.params || { message: '' };//
    const [modalVisible, setModalVisible] = useState(false);//

    const products = [
        { id: 1, name: 'Product 1', url: 'https://example.com/product1', image: 'https://via.placeholder.com/150', price: 10, description: 'Description of product 1' },
        { id: 2, name: 'Product 2', url: 'https://example.com/product2', image: 'https://via.placeholder.com/150', price: 20, description: 'Description of product 2' },
        { id: 3, name: 'Product 3', url: 'https://example.com/product3', image: 'https://via.placeholder.com/150', price: 30, description: 'Description of product 3' }
    ];

    const renderCard = () => {
        return (
            products.map((product) =>
                <Card key={product.id} product={product} />
            )
        );
    }

    const handleOk = () => {
        setModalVisible(false);
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    };//

    useEffect(() => {
        if (message) {
            setModalVisible(true);
        }
    }, [message]);

    return (
        <View accessibilityRole={'none'} style={styles.container}>
            <ScrollView contentContainerStyle={styles.render}>
                {renderCard()}
            </ScrollView>
            {/*  */}
            <Alert
                visible={modalVisible}
                setVisible={setModalVisible}
                message={message}
                ok={handleOk}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        height: 250,
        width: "30%",
        backgroundColor: '#d3d3d3',
        margin: 5,
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: '#888',
    },
    render: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
});
