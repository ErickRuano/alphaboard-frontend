import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'

export default dynamic(
    () => Promise.resolve(Canvas),
    { ssr: false }
)

const Canvas = (props) => {
    // console.log(props)
    const [id, setId] = useState(generateId(20));
    const [width, setWidth] = useState(`${ props?.width || 300 }px`);
    const [height, setHeight] = useState(`${ props?.height || 300 }px`);

    let ctx,
    px = 30,
    px_s = 15;
    
    function ravatar(id) {
        
        // Canvas
        let canvas = document.getElementById(id)
        
        // Canvas supported
        // console.log(canvas);
        if (canvas?.getContext) {
            ctx = canvas.getContext('2d');

            let cxlg=ctx.createLinearGradient(0, 0, 300, 300);
            cxlg.addColorStop(0, '#555');
            cxlg.addColorStop(0.5, '#ccc');
            cxlg.addColorStop(1.0, '#666');
            ctx.fillStyle = cxlg;

            ctx.fillRect(0,0,300,300);
            ctx.fillRect(300,0,300,300);
            ctx.fillRect(0,300,300,300);

            face();

            // Eyes
            eyes();

            // Mouth
            draw(randomColor(), [
                        [4, 6], [5, 6]
                        ]
            );

            // Hair
            hair();

            // Body
            body();
        }
    }

    /**
     * Face
     */
    function face() {
        let faces = [
            [ // F@ face
            [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3.5],
            [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4],
            [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5],
            [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 5.5],
            ],
            [ // Normal face
            [3, 3], [4, 3], [5, 3], [6, 3],
            [3, 4], [4, 4], [5, 4], [6, 4],
            [3, 5], [4, 5], [5, 5], [6, 5],
            [3, 6], [4, 6], [5, 6],
            ],
            [ // Alien face
            [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3],
            [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4],
            [3, 5], [4, 5], [5, 5], [6, 5],
            [3, 6], [4, 6], [5, 6],
            ]
        ];

        // Face
        draw(randomColor(), faces[randomBetween(faces.length)]);
    }

    /**
     * Eyes
     */
    function eyes() {
        let eyes = [
            [
            [4, 4], [6, 4]
            ]
        ]

        // Eyes
        draw(randomColor(), eyes[randomBetween(eyes.length)]);

        let pupil = [
            [[4.5, 4], [6.5, 4]],
            [[4.5, 4.5], [6.5, 4.5]],
            [[4, 4.5], [6, 4.5]],
            [[4, 4], [6.5, 4.5]],
            [[4.5, 4.5], [6, 4]],
            []
        ];

        // Pupil
        draw(randomColor(), pupil[randomBetween(pupil.length)], px_s);
    }

    /**
     * Hair
     */
    function hair() {
        let hair = [
            [
                        [4, .5], [5, .5],               [6,0],
            [3, 1.5], [4, 1],  [5, 1], [6, 1],
            [3, 2.5], [4, 2],  [5, 2], [6, 2],
            ],
            [
            [4, .5], [5, .5],[6,0],[7,0],
            [2, 1.5],[3, 1.5], [4, 1],  [5, 1], [6, 1],
            [2, 2.5], [3, 2.5], [4, 2],  [5, 2], [6, 2], [7, 2],
            ],
            [
            [4, .5], [5, .5],
            [2, 1.5],[3, 1.5], [4, 1.5],  [5, 1.5], [6, 1.5], [7, 1.5],
            [1, 2.5],[2, 2.5], [3, 2.5], [4, 2.5],  [5, 2.5], [6, 2.5], [7, 2.5], [8, 2.5]
            ],
            []
        ];

        draw(randomColor(), hair[randomBetween(hair.length)]);
    }

    /**
     * Body
     */
    function body() {
        let bodys = [
            [
                    [2, 7], [3, 7], [4, 7], [5, 7], [6, 7],
            [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8],
            [1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9]
            ],
            [
            [2, 7], [3, 7], [4, 7], [5, 7], [5, 7], [6, 7], [7, 7],
    [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8],
    [0, 9], [1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9]
            ]
        ];

        // Body
        draw(randomColor(), bodys[randomBetween(bodys.length)]);


        let body_decorations = [
            [
            [3, 7],         [5, 7], [5, 7],
                    [4, 8],
                    [4, 9],
            ],
            []
        ];

        draw(randomColor(), body_decorations[randomBetween(body_decorations.length)]);

        let body_decorations_2 = [
                [
                    [3.5, 7.5],         [5, 7], [5, 7],
                            [4, 8],
                            [4, 9],
                ],
                [
                [3, 8.5], [5.5, 8.5],
                [2.5, 9], [6, 9],
                [2.5, 9.5], [5.5, 9.5]
                ],
        ];

        draw(randomColor(), body_decorations_2[randomBetween(body_decorations_2.length)], px_s);
    }

    function draw(color, coords, size) {
        coords.forEach((v, i) => {
            let _size = px;

            if (size != undefined) {
                _size = size;
            }

            ctx.fillStyle = color;
            ctx.fillRect(coords[i][0] * px, coords[i][1] * px, _size, _size);
        });

        // $.each(coords, function(i, v) {

        //     let _size = px;

        //     if (size != undefined) {
        //         _size = size;
        //     }

        //     ctx.fillStyle = color;
        //     ctx.fillRect(coords[i][0] * px, coords[i][1] * px, _size, _size);
        // });
    }

    function randomBetween(max) {
        let r;
        do {r = Math.random();} while(r == 1.0);
        return parseInt(r * max);
    }

    function randomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    //make id generator
    function generateId(length = 8) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    
    useEffect(() => {
        ravatar(id)
    }, []);

    return (
        <div style={{width, height}}>
            <canvas width={width} height={height} id={id}>
                Your browser doesn't support canvas.
            </canvas>
        </div>
    )
}