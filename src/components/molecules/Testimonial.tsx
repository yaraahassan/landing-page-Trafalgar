import Images from "../atoms/Images";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

interface props{
    img :string,
    title :string,
    text :string,
}
export default function Testimonial({img,title,text}:props) {
  return (
    <div className=" flex gap-8  items-center">
        <Images src={img} alt="img" width={135} height={135}/>
        <div className="flex flex-col">
            <Title size="lg">{title}</Title>
            <Text>{text}</Text>

        </div>

    </div>
  )
}
