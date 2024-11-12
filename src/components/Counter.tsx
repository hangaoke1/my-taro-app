import { countAtom } from '@/store/count'
import { Button, View } from '@tarojs/components'
import { useAtom } from 'jotai'

const Counter = () => {
  const [count, setCount] = useAtom(countAtom)

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