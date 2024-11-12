import { countAtom } from "@/store/count"
import { View } from "@tarojs/components"
import { useAtomValue } from "jotai"

const AboutPage = () => {
  const count = useAtomValue(countAtom)
  return (
    <View>AboutPage {count}</View>
  )
}

export default AboutPage
