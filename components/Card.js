import { React } from 'react';
import { View, Text, FlatList, Dimensions, ImageBackground } from 'react-native';
import { gStyle } from '../styles/style';
import { cord, image } from './cord';

const { width } =  Dimensions.get('window');

export default function Card() {
  return (
    <View style={gStyle.card} >
        <View style={gStyle.list} >
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={true}
                snapToAlignment="start"
                snapToInterval={width-27} //-41.1 for 25 margin right
                decelerationRate="fast"
                style={gStyle.flatlist}
                data={image}
                renderItem={({item}) => 
                <View>
                    {/* <Text style={gStyle.text}>
                        Тип: {item.name}
                    </Text> */}
                    <ImageBackground 
                        source={item}
                        style={gStyle.item}
                        />
                </View>
            }/> 
        </View>
        <View style={gStyle.indicatorplace} >
            <View style={gStyle.indicator10}/>
            <View style={gStyle.indicator9}/>
            <View style={gStyle.indicator8}/>
            <View style={gStyle.indicator7}/>
            <View style={gStyle.indicator6}/>
            <View style={gStyle.indicator5}/>
            <View style={gStyle.indicator4}/>
            <View style={gStyle.indicator3}/>
            <View style={gStyle.indicator2}/>
            <View style={gStyle.indicator1}/>
        </View>
    </View>
  );
}