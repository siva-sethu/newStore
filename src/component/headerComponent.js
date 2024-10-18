import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackButtonSvg from '../assets/svg/backButtonSvg'
import { typography } from '../theme/typography'
import { useNavigation } from '@react-navigation/native'

const HeaderComponent = ({ component, navigationData }) => {
  const navigation = useNavigation();
  const handleGoback = () => {
    navigation.canGoBack() && navigation.goBack()
  }
  const handleScreenPress = (val) => {
    navigation.navigate(`${val}`)
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.4, backgroundColor: '#44B9B1', flexDirection: 'row' }}>
        <TouchableOpacity onPress={handleGoback} style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
          <BackButtonSvg height={50} width={30} />
        </TouchableOpacity>
        <View style={{ flex: 2.5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
          {
            navigationData?.map((value, index) => {
              return (
                <TouchableOpacity onPress={() => { handleScreenPress(value.navigationName) }} key={index} style={{ flexDirection: 'row' }}>
                  <Text style={{ fontFamily: typography.regular, fontSize: 16, color: '#ffff' }}>{value.DisplayName}
                  </Text>
                  {
                    navigationData.length !== 1 && (
                      <Text style={{ marginLeft: 5, fontFamily: typography.regular, fontSize: 16, color: '#ffff' }}>{'>'}</Text>
                    )
                  }
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <View style={{ flex: 5 }}>
        {component}
      </View>
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({})