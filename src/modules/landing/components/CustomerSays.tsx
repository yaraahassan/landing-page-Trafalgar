import Title from "@/components/atoms/Title";
import Heading from "@/components/molecules/Heading";
import Testimonial from "@/components/molecules/Testimonial";
import {Group5} from "@/assets/images/images"
import Text from "@/components/atoms/Text";

export default function CustomerSays() {
  return (
    <div className="w-[80%] bg-linear-to-r from-[#5A98F2] to-[#67C3F3] mx-auto h-80 my-50 rounded-2xl">
        <Title varient="btn1" center={true} size="xl" className="py-12">What our customer are saying</Title>
        <div className="flex gap-x-30 px-26">
            <Testimonial 
             title="EdwardNewgate"
             text="FounderCircle"
             img={Group5}
            />
            <Text className="w-90 mt-4">“Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely”</Text>
        </div>
    </div>
  )
}
