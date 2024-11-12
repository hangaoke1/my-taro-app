import { View, Text, Button, Navigator } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import Counter from '@/components/Counter'

import './index.less'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const hanldeClick = () => {
    Taro.showToast({
      title: '点击了按钮',
      icon: 'none'
    })
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={hanldeClick}>第一个按钮</Button>
      <Counter />
      <Navigator url='/pages/about/index'>关于我们</Navigator>
    </View>
  )
}
