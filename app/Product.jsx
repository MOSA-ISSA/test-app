import { useRoute } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Product = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { product } = route.params;

    const handleAddToCart = () => {
        console.log(`${product.name} added to cart`);
        // alert(`${product.name} has been added to your cart!`);
        navigation.navigate('Cart');
        
    };

    const handleBuy = () => {
        // console.log(`${product.name} added to cart`);
        navigation.navigate('Test');
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>

            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBuy} onPress={handleBuy}>
                <Text style={styles.buttonText}>buy</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color: '#888',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#ff6347', // Modern "tomato" color
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // Add some shadow for modern button effect
    },
    buttonBuy: {
        margin:10,
        backgroundColor: '#2999', // Modern "tomato" color
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // Add some shadow for modern button effect
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
