import Title from "../atoms/Title"
import Text from "../atoms/Text"

interface props{
    title:string;
    text:string;
}
export default function Heading({title,text}:props) {
  return (
    <div className="">
        <Title center={true}>{title}</Title>
        <Text center={true} className="w-[60%]">{text}</Text>
    </div>
  )
}
