const renderProducts = (data, index) => {
    return (
        <TouchableOpacity
            key={data.key}
            onPress={() => navigation.navigate('ProductInfo', { productID: data.id })}
            style={{
                width: '100%',
                height: 100,
                marginVertical: 6,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <View
                style={{
                    width: '30%',
                    height: 100,
                    padding: 14,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLOURS.backgroundLight,
                    borderRadius: 10,
                    marginRight: 22,
                }}>
                <Image
                    source={data.productImage}
                    style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                    }}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    height: '100%',
                    justifyContent: 'space-around',
                }}>
                <View style={{}}>
                    <Text
                        style={{
                            fontSize: 14,
                            maxWidth: '100%',
                            color: COLOURS.black,
                            fontWeight: '600',
                            letterSpacing: 1,
                        }}>
                        {data.productName}
                    </Text>
                    <View
                        style={{
                            marginTop: 4,
                            flexDirection: 'row',
                            alignItems: 'center',
                            opacity: 0.6,
                        }}>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '400',
                                maxWidth: '85%',
                                marginRight: 4,
                            }}>
                            &#8377;{data.productPrice}
                        </Text>
                        <Text>
                            (~&#8377;
                            {data.productPrice + data.productPrice / 20})
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                borderRadius: 100,
                                marginRight: 20,
                                padding: 4,
                                borderWidth: 1,
                                borderColor: COLOURS.backgroundMedium,
                                opacity: 0.5,
                            }}>
                            <MaterialCommunityIcons
                                name="minus"
                                style={{
                                    fontSize: 16,
                                    color: COLOURS.backgroundDark,
                                }}
                            />
                        </View>
                        <Text>1</Text>
                        <View
                            style={{
                                borderRadius: 100,
                                marginLeft: 20,
                                padding: 4,
                                borderWidth: 1,
                                borderColor: COLOURS.backgroundMedium,
                                opacity: 0.5,
                            }}>
                            <MaterialCommunityIcons
                                name="plus"
                                style={{
                                    fontSize: 16,
                                    color: COLOURS.backgroundDark,
                                }}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
                        <MaterialCommunityIcons
                            name="delete-outline"
                            style={{
                                fontSize: 16,
                                color: COLOURS.backgroundDark,
                                backgroundColor: COLOURS.backgroundLight,
                                padding: 8,
                                borderRadius: 100,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

return (
    <View
        style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOURS.white,
            position: 'relative',
        }}>
        <ScrollView>
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    paddingTop: 16,
                    paddingHorizontal: 16,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons
                        name="chevron-left"
                        style={{
                            fontSize: 18,
                            color: COLOURS.backgroundDark,
                            padding: 12,
                            backgroundColor: COLOURS.backgroundLight,
                            borderRadius: 12,
                        }}
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 14,
                        color: COLOURS.black,
                        fontWeight: '400',
                    }}>
                    Order Details
                </Text>
                <View></View>
            </View>
            <Text
                style={{
                    fontSize: 20,
                    color: COLOURS.black,
                    fontWeight: '500',
                    letterSpacing: 1,
                    paddingTop: 20,
                    paddingLeft: 16,
                    marginBottom: 10,
                }}>
                My Cart
            </Text>
            <View style={{ paddingHorizontal: 16 }}>
                {product ? product.map(renderProducts) : null}
            </View>

        </ScrollView>



    </View>
)