import { Button, View } from '@tarojs/components'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handlePlus = () => {
    setCount(pre => pre + 1)
  }

  return (
    <View>
      <View>计数：{count}</View>
      <Button onClick={handlePlus}>点击+1</Button>
    </View>
  )
}

export default Counter