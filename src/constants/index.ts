import { ImageSourcePropType } from "react-native";

export type Back={
    id:number,
    title:string,
    description:string,
    image:ImageSourcePropType,
    price:number,
    size:number,
    color:string,
}[];

export const Backs:Back=[
    {
        id:1,
        title:"Mada Bag",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image:require("../images/bag_1.png"),
        price:250,
        size:12,
        color:"#2b6b93"
    },
    {
        id:2,
        title:"ELab Bag",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image:require("../images/bag_2.png"),
        price:190,
        size:14,
        color:"#c7804d"
    },
    {
        id:3,
        title:"Hang Top",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image:require("../images/bag_3.png"),
        price:150,
        size:12,
        color:"#4e4a4b"
    },
    {
        id:4,
        title:"Old Fashion",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image:require("../images/bag_4.png"),
        price:260,
        size:12,
        color:"#cb7544"
    },
    {
        id:5,
        title:"Designer Bag",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image:require("../images/bag_5.png"),
        price:200,
        size:12,
        color:"#ea545b"
    },
    {
        id:6,
        title:"DD Bag",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image:require("../images/bag_6.png"),
        price:280,
        size:12,
        color:"#4f5253"
    },
    {
        id:7,
        title:"Bag Backpack",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image:require("../images/bag_7.png"),
        price:150,
        size:12,
        color:"#616a8b"
    },
    {
        id:8,
        title:"Mada Bag",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image:require("../images/bag_1.png"),
        price:250,
        size:12,
        color:"#2b6b93"
    },
    
];
