import React from "react";
import Carousels from "../../../../components/Carousels/Carousels";
import Card from "./Card";


function CarouselTop(){
    const items = [
        {
            id: 1,
            title: "title1",
            img: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            text: "lorem the image keeps its aspect ratio, but is resized to fit within the given dimension"
        },
        {
            id: 2,
            title: "title2",
            img: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            text: "lorem the image keeps its aspect ratio, but is resized to fit within the given dimension"
        },
        {
            id: 3,
            title: "title3",
            img: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            text: "lorem the image keeps its aspect ratio, but is resized to fit within the given dimension"
        },
        {
            id: 4,
            title: "title4",
            img: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            text: "lorem the image keeps its aspect ratio, but is resized to fit within the given dimension"
        }
    ]

    const renderItem = items.map(item => {
        return <Card key={item.id} title={item.title} text={item.text} />;
    });

    return(
        <Carousels itemss={renderItem} length={3}/>
    )
}

export default CarouselTop;